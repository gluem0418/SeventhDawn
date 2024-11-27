import { defineStore } from 'pinia';
import config from '@/config/commonConfig.ts';

export const useSpeechStore = defineStore('speech', {
  state: () => ({
    voices: [] as SpeechSynthesisVoice[],
    voice: undefined as SpeechSynthesisVoice | undefined,
  }),
  actions: {
    async fetchVoices() {
      return new Promise<void>((resolve) => {
        speechSynthesis.addEventListener('voiceschanged', () => {
          this.voices = speechSynthesis.getVoices();
          this.voice = this.voices.find(voice => voice.name === config.uttrVoice);
          resolve();
        });
        speechSynthesis.getVoices(); // トリガー
      });
    },
    speakText(text: string, rate: number) {
      if (!this.voice) {
        console.error('Voice not selected');
        return;
      }
      const uttr = new SpeechSynthesisUtterance();
      uttr.voice = this.voice;
      uttr.lang = config.uttrLang;
      uttr.text = text;
      uttr.rate = rate;
      speechSynthesis.speak(uttr);
    }
  }
});
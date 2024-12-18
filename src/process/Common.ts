import { usePartyStore } from '@/stores/Party.ts';

import Character from '@/class/Character';

//////////////////////////////////////
//共通処理
/////////////////////////////////////
//minからmaxまでのランダムな値を返す
export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

//minからmaxまでのランダムな値を返す
export const randomNuma = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//0からmax-1までのランダムな値を返す
export const random = (max: number) => {
  return Math.floor(Math.random() * max);
}

// 非同期関数としてタイマーを実装
export const timer = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//キャラクター配列からindex取得
export const getCharacterIndex = (character: Character) => {
  const partyStore = usePartyStore()
  return partyStore.characters.findIndex(c => c === character);
}


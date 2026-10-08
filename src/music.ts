import { printAnimation } from "./animation";
const music = ["Passion", "Fruit", "Drake"];

export function printMusic(): void {
  printAnimation("Music");
  for (const song of music) {
    console.log(song);
  }
}

printMusic();
export const snacks = ["Lolipop"];

export function printSnacks(): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

printSnacks();
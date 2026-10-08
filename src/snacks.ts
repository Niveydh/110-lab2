export const snacks = ["Lolipop", "Gummies", "Chicken"];

export function printSnacks(): void {
  for (const snack of snacks) {
    console.log(snack);
  }
}

printSnacks();
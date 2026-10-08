const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Pretzels"];

export function printSnacks(): void {
  snacks.forEach((snack) => {
    console.log(snack);
  });
}

printSnacks();

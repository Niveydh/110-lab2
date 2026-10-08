const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Pretzels"];

export function printSnacks1(): void {
  snacks.forEach((snack) => {
    console.log(snack);
  });
}

printSnacks1();

const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Pretzels, Candy, Cheetos, Soda"];

export function printSnacks1(): void {
  snacks.forEach((snack) => {
    console.log(snack);
  });
}

printSnacks1();

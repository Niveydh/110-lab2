const snacks: string[] = ["Drake", "Tom", "Nev", "George Clooney"];

export function printSnacks(): void {
  snacks.forEach((snack) => {
    console.log(snack);
  });
}

printSnacks();
export const guests: string[] = ["Drake", "Tom", "Nev", "George Clooney"];

export function printSnacks(): void {
  guests.forEach((guest) => {
    console.log(guest);
  });
}

printSnacks();
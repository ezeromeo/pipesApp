export enum Color {
  black,
  blue,
  green,
  red,
  yellow,
}

export interface Hero {
  name: string;
  fly: boolean;
  color: Color;
}

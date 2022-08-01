export class Pokemon {
  id: number | undefined;
  hp: number | undefined;
  cp: number | undefined;
  name: string | undefined;
  picture: string | undefined;
  types: Array<string> = [];
  created: Date | undefined;
}

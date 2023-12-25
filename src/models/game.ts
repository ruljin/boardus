export interface Game {
  name: string;
  type: string[];
  minimumNumberOfPlayers: number;
  maximumNumberOfPlayers: number;
  category: string[];
  mechanics: string[];
  imageUrl: string;
}

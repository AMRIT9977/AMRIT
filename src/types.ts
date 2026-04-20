export type GameStatus = 'START' | 'PLAYING' | 'GAMEOVER';

export interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export interface Obstacle {
  id: string;
  x: number;
  width: number;
  topHeight: number;
  bottomY: number;
  passed: boolean;
}

export interface PowerUp {
  id: string;
  type: 'SHIELD' | 'SLOWMO' | 'DOUBLE';
  x: number;
  y: number;
  radius: number;
  collected: boolean;
}

export interface Theme {
  id: string;
  name: string;
  background: string;
  obstacleColor: string;
  birdColor: string;
  accent: string;
}

export interface Character {
  id: string;
  name: string;
  price: number;
  rarity: 'COMMON' | 'RARE' | 'SUPER RARE' | 'LEGENDARY' | 'MYTHIC';
  color: string;
  eyeColor: string;
}

export interface GameState {
  score: number;
  status: GameStatus;
  birdY: number;
  birdVelocity: number;
  birdRotation: number;
  obstacles: Obstacle[];
  particles: Particle[];
  powerUps: PowerUp[];
  activePowerUp: PowerUp['type'] | null;
  powerUpTimeRemaining: number;
  distanceTraveled: number;
  difficulty: number;
}

export interface CrystalConstructor {
  scene: Phaser.Scene;
  x: number;
  y: number;
  texture: string;
  alpha?: number;
  frame?: string | number;
}

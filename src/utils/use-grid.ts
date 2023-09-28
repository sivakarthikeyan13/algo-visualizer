export interface CellProps {
  col: number;
  row: number;
  weight: number;
  isStart: boolean;
  isTarget: boolean;
  isWall: boolean;
}

export function useGrid(width: number, height: number) {
  const grid: CellProps[][] = [];
  for (let row = 0; row < height; row++) {
    const currentRow: CellProps[] = [];
    for (let col = 0; col < width; col++) {
      currentRow.push({
        col: col,
        row: row,
        weight: 1,
        isStart: false,
        isTarget: false,
        isWall: false,
      });
    }
    grid.push(currentRow);
  }
  grid[Math.floor(height / 2)][Math.floor(width / 2)].isStart = true;
  grid[height - 2][width - 2].isTarget = true;
  return grid;
}

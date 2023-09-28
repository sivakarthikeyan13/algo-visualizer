import { useEffect, useState } from "react";
import { CellProps, useGrid } from "./use-grid";
import { Grid } from "../components/grid/grid";

export function Visualizer() {
  const [grid, setGrid] = useState<CellProps[][]>();
  const [isMousePressed, setIsMousePressed] = useState(false);

  useEffect(() => {
    const width = ~~((screen.width - 320) / 32);
    const height = ~~((screen.height - 180) / 32);
    const initailGrid = useGrid(width, height);
    setGrid(initailGrid);
  }, []);

  const handleMouseDown = (row: number, col: number) => {
    const updatedGrid = prepareGridWall(grid, row, col);
    setGrid(updatedGrid);
    setIsMousePressed(true);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!isMousePressed) {
      return;
    }
    const updatedGrid = prepareGridWall(grid, row, col);
    setGrid(updatedGrid);
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
  };

  return (
    <Grid
      grid={grid}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
    />
  );
}

const prepareGridWall = (
  grid: CellProps[][] | undefined,
  row: number,
  col: number
) => {
  if (!grid) {
    return [];
  }
  const newGrid = grid.slice();
  const cell = newGrid[row][col];
  const newCell = {
    ...cell,
    isWall: !cell.isWall,
  };
  newGrid[row][col] = newCell;
  return newGrid;
};

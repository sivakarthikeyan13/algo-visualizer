import { CellProps } from "../../utils/use-grid";
import Cell, { CellInteractProps } from "./cell";

interface GridProps extends CellInteractProps {
  grid?: CellProps[][];
}

export function Grid({
  grid,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}: GridProps) {
  return (
    <>
      {grid?.map((row: CellProps[], rowIndex) => {
        return (
          <div
            key={rowIndex}
            className="flex flex-row w-fit last:border-b border-stone-700"
          >
            {row.map((cell: CellProps, cellIndex) => {
              return (
                <Cell
                  {...cell}
                  key={cellIndex}
                  onMouseDown={onMouseDown}
                  onMouseEnter={onMouseEnter}
                  onMouseUp={onMouseUp}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

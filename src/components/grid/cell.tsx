import { CellProps } from "../../utils/use-grid";

export interface CellInteractProps {
  onMouseDown(row: number, col: number): any;
  onMouseEnter(row: number, col: number): any;
  onMouseUp(): any;
}

type ICellProps = CellProps & CellInteractProps;

export default function Cell({
  col,
  row,
  isStart,
  isTarget,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}: ICellProps) {
  const bgColor = isTarget
    ? "bg-teal-600"
    : isStart
    ? "bg-rose-800"
    : isWall
    ? "bg-gray-500"
    : "bg-transparent";
  return (
    <div
      className={`border-l border-t border-stone-700 h-8 w-8 last:border-r ${bgColor}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    />
  );
}

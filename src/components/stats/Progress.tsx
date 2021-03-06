import classNames from 'classnames'

type Props = {
  index: number
  size: number
  label: string
  currentDayStatRow: boolean
}

export const Progress = ({ index, size, label, currentDayStatRow }: Props) => {
  const currentRowClass = classNames(
    'text-xs font-medium text-neutral-100 text-center p-0.5',
    { 'bg-ori-green-light': currentDayStatRow, 'bg-neutral-600': !currentDayStatRow }
  )
  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="w-full ml-2">
        <div style={{ width: `${8 + size}%` }} className={currentRowClass}>
          {label}
        </div>
      </div>
    </div>
  )
}

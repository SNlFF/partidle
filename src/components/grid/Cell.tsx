import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-16 h-16 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold dark:text-white',
    {
      'bg-white dark:bg-darkBackground border-neutral-200 dark:border-neutral-800':
        !status,
      'border-black dark:border-neutral-700': value && !status,
      'absent bg-neutral-500 dark:bg-neutral-700 text-white border-neutral-500 dark:border-neutral-700':
        status === 'absent',
      // For High Contrast Mode
      'present bg-ori-yellow-light text-white border-ori-yellow-light':
        status === 'correct' && isHighContrast,
      'correct bg-ori-green-light text-white border-ori-green-light':
        status === 'present' && isHighContrast,
      // Default Mode
      'present bg-cyan-500 text-white border-cyan-500':
        status === 'correct' && !isHighContrast,
      'correct bg-hc-red-light text-white border-hc-red-light':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}

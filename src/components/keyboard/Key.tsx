import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'bg-neutral-200 dark:bg-neutral-600 hover:bg-neutral-300 active:bg-neutral-400':
        !status,
      'bg-neutral-400 dark:bg-neutral-800 text-white': status === 'absent',
      'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white':
        status === 'correct' && isHighContrast,
      'bg-hc-red-light hover:bg-hc-red-dark active:bg-hc-red-darkest text-white':
        status === 'present' && isHighContrast,
      'bg-ori-green-light hover:bg-ori-green-dark active:bg-ori-green-darkest text-white':
        status === 'correct' && !isHighContrast,
      'bg-ori-yellow-light hover:bg-ori-yellow-dark active:bg-ori-yellow-darkest text-white':
        status === 'present' && !isHighContrast,
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}

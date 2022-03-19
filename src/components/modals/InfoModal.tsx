import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="THE Manual" isOpen={isOpen} handleClose={handleClose}>
      <p className="mt-4 italic text-sm text-neutral-500 dark:text-neutral-300">
        There is no time for critquing. Just Play.
      </p>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-300">
        Guess the architecture related word in 6 tries. Colours of tiles reveal to represent
        how good you actually are.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="C" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        D from doric is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        The letter A is not in the word in any spot.
      </p>
      <p className="mt-4 italic text-sm text-neutral-500 dark:text-neutral-300">
        {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold"
        >
          Archidle Source Code
        </a>
      </p>
    </BaseModal>
  )
}

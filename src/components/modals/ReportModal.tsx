//import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const ReportModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Missing Word?" isOpen={isOpen} handleClose={handleClose}>
      <p className="mt-4 italic text-sm text-neutral-500 dark:text-neutral-300">
        This was never meant to be perfect.
      </p>
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-300">
        If you found a word that is related to architecture and should be accepted but was denied, submit it here.
      </p>
    </BaseModal>
  )
}

export const GAME_TITLE = 'ARCHIDLE'

export const WIN_MESSAGES = [
  'So good !',
  'Not bad.',
  'What a fluke !',
  'What took so long? You must be new.',
  'What else did you think it was?',
  'Correct !',
  'Nice. See you again after your all nighter.',
  'Finally... I thought you were in architecture?',
  'Congrats unlicensed buddy.',
  'Well done !',
  'Great job !',
  'Ok. Well played.',
  'Awesome :)',
  'You are such amazing !',
  'Good. Do not comment. This is auto generated.',
  'I keep track of how many times you cursed at me.',
  'You are ugly and you smell. Also, good job.',
  'Can you still feel your fingers and toes?',
  'Yeah you got it! Are you going to frakking cry?',
  'So the loser decided to take the day off. How lucky.',
  'Did you hack me?',
  'I thought you were cursed.',
  'You are better than a quantum supercomputer, or so I thought.',
  'I like big wins and I cannot lie',
  'Good job surviving last night.',
  'You are slower than a brown antechinus.',
  'I am sensing a surge of paranormal activity in your brain today.',
  'How depressing is it that you know your architecture?',
  'Wondering why you won? I think your connection dropped some packets.',
  'Impress your licensed boss now.',
  'Your local architect is not anywhere near as important as this game. This is architecture.',
  'Le Corbusier is that you?',
  'That is not a certrified submission. You have no license.',
  'You are free.',
  'I thought you were an expert.',
  'Do not come blaming me for your mental energy loss. That is on you.',
  'I almost had to reboot.',
  'OMG finally.. need an ambulance?',
  'You got it. However I am always one step ahead of you.',
  'Almost had to disconnect you for taking so long.',
  'I did not make up this word. That is on your mom.',
  'Beautiful. There are 206 bones in the human body. I know how to break them all.',
  'Lucky. Ha ha, FYI architecture is not real engineering.',
  'Nice guess. Just so you know, architecture is not real engineering.',
  'Why do you even know this word?',
  'Correct ! Is it president of Archidle or prime minister? LMK.',
  '404 error. This is an illusion.',
  '404 error. This is not real.',
  'Good job. Now bye.',
  'Nice. But you are not a genius, you kept dreaming of me last night.',
  'Nice. Do you ever wish you were uhhhhhhh...',
  'Archidle > Rome',
  'Good guess, come back tomorrow !',
  'Awesome. Why am i free ?',
  'Shit. Nothing makes me happier than telling you got the word wrong just like your career choice. So you make me mad.',
  'Correct ! Is this theory or practice? Who knows..',
  'Well done. FYI I prefer IKEA.',
  'Stop. You were not supposed to know that.',
  'How banal.',
  'Good job not failing !'
];

export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Missing letters..'
export const WORD_NOT_FOUND_MESSAGE = 'Nice try. Since when was that in architecture?'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start !'
export const HARD_MODE_DESCRIPTION =
  'Any hints presented must be used in subsequent attempts. Much like comments from crits.'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Original colour mode.'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Fluke History'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total Attempts'
export const SUCCESS_RATE_TEXT = 'Luck Rate'
export const CURRENT_STREAK_TEXT = 'Fluke Streak'
export const BEST_STREAK_TEXT = 'Best Fluke'

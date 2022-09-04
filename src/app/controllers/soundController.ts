export class SoundController {
  private playerCorrect: HTMLAudioElement;

  private playerIncorrect: HTMLAudioElement;

  constructor() {
    this.playerCorrect = new Audio('../../assets/sound/correct-answer.wav');
    this.playerIncorrect = new Audio('../../assets/sound/wrong-answer.wav');
  }

  async startPlay(isCorrect: boolean): Promise<void> {
    if (isCorrect) {
      await this.playerCorrect.play().catch((err) => console.debug(err));
    } else {
      await this.playerIncorrect.play().catch((err) => console.debug(err));
    }
  }

  stopPlay() {
    this.playerCorrect.currentTime = 0;
    this.playerCorrect.pause();
    this.playerIncorrect.currentTime = 0;
    this.playerIncorrect.pause();
  }
}
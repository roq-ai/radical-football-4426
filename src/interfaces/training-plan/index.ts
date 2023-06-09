import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';

export interface TrainingPlanInterface {
  id?: string;
  coach_id: string;
  player_id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;

  coach?: CoachInterface;
  player?: PlayerInterface;
  _count?: {};
}

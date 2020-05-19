import './styles.css';
import { CountdownTimer } from './plugin';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 19, 2020'),
});

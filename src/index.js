import './styles.css';
import { CountdownTimer } from './plugin';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

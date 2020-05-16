import { combinReducers } from 'redux';
import count from './count';

export default combinReducers({ count });
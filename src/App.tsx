import React from 'react';

import './App.css';
import Board from './components/Board/Board';
import { getInitPieces } from './services/seed';

function App() {
  return <Board pieces={getInitPieces()}></Board>;
}

export default App;

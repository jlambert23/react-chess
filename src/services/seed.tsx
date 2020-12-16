import { CoordinatePiece } from '../components/Board/Board';

export const getInitPieces = () =>
  [
    {
      pieceType: 'R',
      color: 'white',
      place: 'a1',
      moves: ['a1']
    },
    {
      pieceType: 'N',
      color: 'white',
      place: 'b1',
      moves: ['b1', 'a3', 'c3']
    },
    {
      pieceType: 'B',
      color: 'white',
      place: 'c1',
      moves: ['c1']
    },
    {
      pieceType: 'Q',
      color: 'white',
      place: 'd1',
      moves: ['d1']
    },
    {
      pieceType: 'K',
      color: 'white',
      place: 'e1',
      moves: ['e1']
    },
    {
      pieceType: 'B',
      color: 'white',
      place: 'f1',
      moves: ['f1']
    },
    {
      pieceType: 'N',
      color: 'white',
      place: 'g1',
      moves: ['g1', 'f3', 'h3']
    },
    {
      pieceType: 'R',
      color: 'white',
      place: 'h1',
      moves: ['h1']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'a2',
      moves: ['a2', 'a3', 'a4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'b2',
      moves: ['b2', 'b3', 'b4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'c2',
      moves: ['c2', 'c3', 'c4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'd2',
      moves: ['d2', 'd3', 'd4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'e2',
      moves: ['e2', 'e3', 'e4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'f2',
      moves: ['f2', 'f3', 'f4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'g2',
      moves: ['g2', 'g3', 'g4']
    },
    {
      pieceType: 'P',
      color: 'white',
      place: 'h2',
      moves: ['h2', 'h3', 'h4']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'a7',
      moves: ['a7', 'a6', 'a5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'b7',
      moves: ['b7', 'b6', 'b5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'c7',
      moves: ['c7', 'c6', 'c5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'd7',
      moves: ['d7', 'd6', 'd5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'e7',
      moves: ['e7', 'e6', 'e5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'f7',
      moves: ['f7', 'f6', 'f5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'g7',
      moves: ['g7', 'g6', 'g5']
    },
    {
      pieceType: 'P',
      color: 'black',
      place: 'h7',
      moves: ['h7', 'h6', 'h5']
    },
    {
      pieceType: 'R',
      color: 'black',
      place: 'a8',
      moves: ['a8']
    },
    {
      pieceType: 'N',
      color: 'black',
      place: 'b8',
      moves: ['b8', 'a6', 'c6']
    },
    {
      pieceType: 'B',
      color: 'black',
      place: 'c8',
      moves: ['c8']
    },
    {
      pieceType: 'Q',
      color: 'black',
      place: 'd8',
      moves: ['d8']
    },
    {
      pieceType: 'K',
      color: 'black',
      place: 'e8',
      moves: ['e8']
    },
    {
      pieceType: 'B',
      color: 'black',
      place: 'f8',
      moves: ['f8']
    },
    {
      pieceType: 'N',
      color: 'black',
      place: 'g8',
      moves: ['g8', 'f6', 'h6']
    },
    {
      pieceType: 'R',
      color: 'black',
      place: 'h8',
      moves: ['h8']
    }
  ] as CoordinatePiece[];

import rank14 from "../images/PvPRank14.png";
import rank13 from "../images/PvPRank13.png";
import rank12 from "../images/PvPRank12.png";
import rank11 from "../images/PvPRank11.png";
import rank10 from "../images/PvPRank10.png";
import rank09 from "../images/PvPRank09.png";
import rank08 from "../images/PvPRank08.png";
import rank07 from "../images/PvPRank07.png";
import rank06 from "../images/PvPRank06.png";

export interface Rank {
  number: number;
  title: string;
  image: string;
  baseRp: number;
}

const ranks: Rank[] = [
  {
    number: 14,
    title: "High Warlord / Grand Marshal",
    image: rank14,
    baseRp: 60000,
  },
  {
    number: 13,
    title: "Warlord / Field Marshal",
    image: rank13,
    baseRp: 55000,
  },
  {
    number: 12,
    title: "General / Marshal",
    image: rank12,
    baseRp: 50000,
  },
  {
    number: 11,
    title: "Lieutenant General / Commander",
    image: rank11,
    baseRp: 45000,
  },
  {
    number: 10,
    title: "Champion / Lieutenant Commander",
    image: rank10,
    baseRp: 40000,
  },
  {
    number: 9,
    title: "Centurion / Knight Champion",
    image: rank09,
    baseRp: 35000,
  },
  {
    number: 8,
    title: "Legionnaire / Knight Captain",
    image: rank08,
    baseRp: 30000
  },
  {
    number: 7,
    title: "Blood Guard / Knight Lieutenant",
    image: rank07,
    baseRp: 25000
  },
  {
    number: 6,
    title: "Stone Guard / Knight",
    image: rank06,
    baseRp: 20000
  },
]

export default ranks

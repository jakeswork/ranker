import rank14 from "../images/PvPRank14.png";
import rank13 from "../images/PvPRank13.png";
import rank12 from "../images/PvPRank12.png";
import rank11 from "../images/PvPRank11.png";
import rank10 from "../images/PvPRank10.png";
import rank09 from "../images/PvPRank09.png";
import rank08 from "../images/PvPRank08.png";
import rank07 from "../images/PvPRank07.png";
import rank06 from "../images/PvPRank06.png";
import rank05 from "../images/PvPRank05.png";
import rank04 from "../images/PvPRank04.png";
import rank03 from "../images/PvPRank03.png";
import rank02 from "../images/PvPRank02.png";

export interface Rank {
  number: number;
  title: string;
  image: string;
  baseRp: number;
  newRp: number;
}

const ranks: Rank[] = [
  {
    number: 14,
    title: "High Warlord / Grand Marshal",
    image: rank14,
    baseRp: 60000,
    newRp: 60001
  },
  {
    number: 13,
    title: "Warlord / Field Marshal",
    image: rank13,
    baseRp: 55000,
    newRp: 55001
  },
  {
    number: 12,
    title: "General / Marshal",
    image: rank12,
    baseRp: 50000,
    newRp: 50001
  },
  {
    number: 11,
    title: "Lieutenant General / Commander",
    image: rank11,
    baseRp: 45000,
    newRp: 45001
  },
  {
    number: 10,
    title: "Champion / Lieutenant Commander",
    image: rank10,
    baseRp: 40000,
    newRp: 40001
  },
  {
    number: 9,
    title: "Centurion / Knight Champion",
    image: rank09,
    baseRp: 35000,
    newRp: 35001
  },
  {
    number: 8,
    title: "Legionnaire / Knight Captain",
    image: rank08,
    baseRp: 30000,
    newRp: 30001
  },
  {
    number: 7,
    title: "Blood Guard / Knight Lieutenant",
    image: rank07,
    baseRp: 25000,
    newRp: 25001
  },
  {
    number: 6,
    title: "Stone Guard / Knight",
    image: rank06,
    baseRp: 20000,
    newRp: 20001
  },
  {
    number: 5,
    title: "First Sergeant / Sergeant Major",
    image: rank05,
    baseRp: 15000,
    newRp: 15001
  },
  {
    number: 4,
    title: "Senior Sergeant / Master Sergeant",
    image: rank04,
    baseRp: 10000,
    newRp: 10001
  },
  {
    number: 3,
    title: "Sergeant",
    image: rank03,
    baseRp: 5000,
    newRp: 5001
  },
  {
    number: 2,
    title: "Grunt / Corporal",
    image: rank02,
    baseRp: 2000,
    newRp: 2001
  }
]

export default ranks

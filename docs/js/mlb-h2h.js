import { MlbTeams as Teams } from "teams";
import { to_uniq, load_css_rules, load_font, svgdownload, fetchJson } from "utils";
import { get_logos } from "logos";
import { scheduledGames } from "./mlb2024-schedule.js";
import { GameResult } from "GameResult";
import { TeamSelector } from "./team-selector.js?v=0803";

const svgTemplate = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-1200 -1200 2400 2400">
  <style data-css="external"></style>
  <style data-css="fonts"></style>
  <style>
    #bgRect {
      fill: var(--bgcolor, cornsilk);
    }
    circle {
      fill: var(--team-color, none);
      r: 30px;
      stroke-width: 4px;
      stroke: var(--team-shadow-color, black);
    }
    circle.lost {
      r: 24px;
    }
    text {
      font-family: 'Noto Sans', Arial, sans-serif;
    }
    .arc {
      fill: none;
      stroke-width: 20px;
      stroke: var(--team-color, black);
      stroke-linecap: round;
    }
    .arc[data-fill="AL"],
    .arc[data-fill="NL"]{
      stroke-width: 10px;
    }
    .record {
      font-size: 50px;
      text-anchor: middle;
    }
    #Record text {
      text-anchor: middle;
      alignment-baseline: middle;
      font-size: 120px;
    }
    #season text {
      text-anchor: middle;
      alignment-baseline: middle;
      font-size: 120px; 
    }
    #elements {
      display: none;
    }
  </style>
  <style>
    [data-fill="Orioles"],
    [data-winner="Orioles"],
    .BAL {
      --team-color: var(--orioles-orange);
      --team-shadow-color: var(--orioles-black);
    }
    [data-fill="Red Sox"],
    [data-winner="Red Sox"],
    .BOS {
      --team-color: var(--redsox-red);
      --team-shadow-color: var(--redsox-blue);
    }
    [data-fill="Yankees"],
    [data-winner="Yankees"],
    .NYY {
      --team-color: var(--yankees-navy);
      --team-shadow-color: var(--yankees-blue);
      --team-text-color: var(--yankees-navy);
    }
    [data-fill="Rays"],
    [data-winner="Rays"],
    .TB,
    .TBR {
      --team-color: var(--rays-navy);
      --team-shadow-color: var(--rays-columbia-blue);
    }
    [data-fill="Blue Jays"],
    [data-winner="Blue Jays"],
    .TOR {
      --team-color: var(--bluejays-powderblue);
      --team-shadow-color: var(--bluejays-blue);
      --team-text-color: var(--bluejays-blue);
    }

    [data-fill="White Sox"],
    [data-winner="White Sox"],
    .CWS,
    .CHW {
      --team-color: var(--whitesox-silver);
      --team-shadow-color: var(--whitesox-black);
      --team-text-color: var(--whitesox-black);
    }
    [data-fill="Guardians"],
    [data-winner="Guardians"],
    .CLE {
      --team-color: var(--guardians-red);
      --team-shadow-color: var(--guardians-navy);
    }
    [data-fill="Tigers"],
    [data-winner="Tigers"],
    .DET {
      --team-color: var(--tigers-navy);
      --team-shadow-color: var(--tigers-navy);
    }
    [data-fill="Royals"],
    [data-winner="Royals"],
    .KC,
    .KCR {
      --team-color: var(--royals-blue);
      --team-shadow-color: var(--royals-gold);
    }
    [data-fill="Twins"],
    [data-winner="Twins"],
    .MIN {
      --team-color: var(--twins-navy);
      --team-shadow-color: var(--twins-scarlet-red);
    }

    [data-fill="Astros"],
    [data-winner="Astros"],
    .HOU {
      --team-color: var(--astros-orange);
      --team-shadow-color: var(--astros-darkblue);
    }
    [data-fill="Angels"],
    [data-winner="Angels"],
    .LAA {
      --team-color: var(--angels-maroon);
      --team-shadow-color: var(--angels-blue);
    }
    [data-fill="Athletics"],
    [data-winner="Athletics"],
    .OAK {
      --team-color: var(--athletics-green);
      --team-shadow-color: var(--athletics-gold);
    }
    [data-fill="Mariners"],
    [data-winner="Mariners"],
    .SEA {
      --team-color: var(--mariners-aqua);
      --team-shadow-color: var(--mariners-navy);
      --team-text-color: var(--mariners-navy);
    }
    [data-fill="Rangers"],
    [data-winner="Rangers"],
    .TEX {
      --team-color: var(--rangers-blue);
      --team-shadow-color: var(--rangers-red);
      --team-text-color: var(--rangers-red);
    }

    [data-fill="Braves"],
    [data-winner="Braves"],
    .ATL {
      --team-color: var(--braves-scarlet);
      --team-shadow-color: var(--braves-navy);
    }
    [data-fill="Marlins"],
    [data-winner="Marlins"],
    .MIA {
      --team-color: var(--marlins-black);
      --team-shadow-color: var(--marlins-miamiblue);
    }
    [data-fill="Mets"],
    [data-winner="Mets"],
    .NYM {
      --team-color: var(--mets-orange);
      --team-shadow-color: var(--mets-blue);
    }
    [data-fill="Phillies"],
    [data-winner="Phillies"],
    .PHI {
      --team-color: var(--phillies-red);
      --team-shadow-color: var(--phillies-blue);
    }
    [data-fill="Nationals"],
    [data-winner="Nationals"],
    .WSH {
      --team-color: var(--nationals-red);
      --team-shadow-color: var(--nationals-blue);
    }

    [data-fill="Cubs"],
    [data-winner="Cubs"],
    .CHC {
      --team-color: var(--cubs-blue);
      --team-shadow-color: var(--cubs-red);
    }
    [data-fill="Reds"],
    [data-winner="Reds"],
    .CIN {
      --team-color: var(--reds-red);
      --team-shadow-color: var(--reds-black);
    }
    [data-fill="Brewers"],
    [data-winner="Brewers"],
    .MIL {
      --team-color: var(--brewers-navy);
      --team-shadow-color: var(--brewers-yellow);
    }
    [data-fill="Pirates"],
    [data-winner="Pirates"],
    .PIT {
      --team-color: var(--pirates-gold);
      --team-shadow-color: var(--pirates-black);
      --team-text-color: var(--pirates-black);
    }
    [data-fill="Cardinals"],
    [data-winner="Cardinals"],
    .STL {
      --team-color: var(--cardinals-red);
      --team-shadow-color: var(--cardinals-navy);
    }

    [data-fill="Diamondbacks"],
    [data-winner="Diamondbacks"],
    .AZ,
    .ARI {
      --team-color: var(--dbacks-red);
      --team-shadow-color: var(--dbacks-black);
    }
    [data-fill="Rockies"],
    [data-winner="Rockies"],
    .COL {
      --team-color: var(--rockies-silver);
      --team-shadow-color: var(--rockies-purple);
      --team-text-color: var(--rockies-purple);
    }
    [data-fill="Dodgers"],
    [data-winner="Dodgers"],
    .LAD {
      --team-color: var(--dodger-blue);
      --team-shadow-color: var(--dodger-blue);
    }
    [data-fill="Padres"],
    [data-winner="Padres"],
    .SD,
    .SDP {
      --team-shadow-color: var(--padres-brown);
      --team-color: var(--padres-brown);
      --team-text-color: var(--padres-brown);
    }
    [data-fill="Giants"],
    [data-winner="Giants"],
    .SF,
    .SFG {
      --team-color: var(--giants-orange);
      --team-shadow-color: var(--giants-black);
    }

    [data-fill="AL"]{
      --team-color: var(--al-red);
    }
    [data-fill="NL"]{
      --team-color: var(--nl-navy);
    }

    
    [data-team="Red Sox"] [data-fill="Orioles"],
    [data-team="Guardians"] [data-fill="Orioles"],
    [data-team="Astros"] [data-fill="Orioles"],
    [data-team="Angels"] [data-fill="Orioles"],
    [data-team="Diamondbacks"] [data-fill="Orioles"],
    [data-team="Giants"] [data-fill="Orioles"],
    [data-team="Reds"] [data-fill="Orioles"],
    [data-team="Cardinals"] [data-fill="Orioles"],
    [data-team="Mets"] [data-fill="Orioles"],
    [data-team="Braves"] [data-fill="Orioles"],
    [data-team="Phillies"] [data-fill="Orioles"],
    [data-team="Nationals"] [data-fill="Orioles"],
    [data-opponent="Orioles"][data-loser="Red Sox"],
    [data-opponent="Orioles"][data-loser="Guardians"],
    [data-opponent="Orioles"][data-loser="Astros"],
    [data-opponent="Orioles"][data-loser="Angels"],
    [data-opponent="Orioles"][data-loser="Diamondbacks"],
    [data-opponent="Orioles"][data-loser="Giants"],
    [data-opponent="Orioles"][data-loser="Reds"],
    [data-opponent="Orioles"][data-loser="Cardinals"],
    [data-opponent="Orioles"][data-loser="Mets"],
    [data-opponent="Orioles"][data-loser="Braves"],
    [data-opponent="Orioles"][data-loser="Nationals"],
    [data-opponent="Orioles"][data-loser="Phillies"] {
      --team-color: var(--orioles-black);
    }

    [data-team="Orioles"] [data-fill="Red Sox"],
    [data-team="Guardians"] [data-fill="Red Sox"],
    [data-team="Astros"] [data-fill="Red Sox"],
    [data-team="Angels"] [data-fill="Red Sox"],
    [data-team="Giants"] [data-fill="Red Sox"],
    [data-team="Reds"] [data-fill="Red Sox"],
    [data-team="Cardinals"] [data-fill="Red Sox"],
    [data-team="Mets"] [data-fill="Red Sox"],
    [data-team="Braves"] [data-fill="Red Sox"],
    [data-team="Phillies"] [data-fill="Red Sox"],
    [data-team="Nationals"] [data-fill="Red Sox"],
    [data-team="Diamondbacks"] [data-fill="Red Sox"],
    [data-opponent="Red Sox"][data-loser="Orioles"],
    [data-opponent="Red Sox"][data-loser="Guardians"],
    [data-opponent="Red Sox"][data-loser="Astros"],
    [data-opponent="Red Sox"][data-loser="Angels"],
    [data-opponent="Red Sox"][data-loser="Giants"],
    [data-opponent="Red Sox"][data-loser="Reds"],
    [data-opponent="Red Sox"][data-loser="Cardinals"],
    [data-opponent="Red Sox"][data-loser="Mets"],
    [data-opponent="Red Sox"][data-loser="Braves"],
    [data-opponent="Red Sox"][data-loser="Nationals"],
    [data-opponent="Red Sox"][data-loser="Diamondbacks"],
    [data-opponent="Red Sox"][data-loser="Phillies"] {
      --team-color: var(--redsox-blue);
    }

    [data-team="Marlins"] [data-fill="Yankees"],
    [data-team="Cubs"] [data-fill="Yankees"],
    [data-team="Brewers"] [data-fill="Yankees"],
    [data-team="Padres"] [data-fill="Yankees"],
    [data-team="Dodgers"] [data-fill="Yankees"],
    [data-team="Rays"] [data-fill="Yankees"],
    [data-team="Tigers"] [data-fill="Yankees"],
    [data-team="Royals"] [data-fill="Yankees"],
    [data-team="Twins"] [data-fill="Yankees"],
    [data-team="Athletics"] [data-fill="Yankees"],
    [data-team="Rangers"] [data-fill="Yankees"],
    [data-opponent="Yankees"][data-loser="Marlins"],
    [data-opponent="Yankees"][data-loser="Cubs"],
    [data-opponent="Yankees"][data-loser="Brewers"],
    [data-opponent="Yankees"][data-loser="Padres"],
    [data-opponent="Yankees"][data-loser="Dodgers"],
    [data-opponent="Yankees"][data-loser="Rays"],
    [data-opponent="Yankees"][data-loser="Tigers"],
    [data-opponent="Yankees"][data-loser="Royals"],
    [data-opponent="Yankees"][data-loser="Twins"],
    [data-opponent="Yankees"][data-loser="Athletics"],
    [data-opponent="Yankees"][data-loser="Rangers"] {
      --team-color: var(--yankees-gray);
      --team-shadow-color: var(--yankees-blue);
    }

    [data-team="Marlins"] [data-fill="Rays"],
    [data-team="Cubs"] [data-fill="Rays"],
    [data-team="Brewers"] [data-fill="Rays"],
    [data-team="Padres"] [data-fill="Rays"],
    [data-team="Dodgers"] [data-fill="Rays"],
    [data-team="Tigers"] [data-fill="Rays"],
    [data-team="Royals"] [data-fill="Rays"],
    [data-team="Twins"] [data-fill="Rays"],
    [data-team="Athletics"] [data-fill="Rays"],
    [data-team="Rangers"] [data-fill="Rays"],
    [data-team="Yankees"] [data-fill="Rays"],
    [data-opponent="Rays"][data-loser="Marlins"],
    [data-opponent="Rays"][data-loser="Cubs"],
    [data-opponent="Rays"][data-loser="Brewers"],
    [data-opponent="Rays"][data-loser="Padres"],
    [data-opponent="Rays"][data-loser="Dodgers"],
    [data-opponent="Rays"][data-loser="Tigers"],
    [data-opponent="Rays"][data-loser="Royals"],
    [data-opponent="Rays"][data-loser="Twins"],
    [data-opponent="Rays"][data-loser="Athletics"],
    [data-opponent="Rays"][data-loser="Rangers"],
    [data-opponent="Rays"][data-loser="Yankees"] {
      --team-color: var(--rays-columbia-blue);
      --team-shadow-color: var(--rays-navy);
    }

    [data-opponent="Blue Jays"][data-loser="Mariners"] {
      --team-color: var(--bluejays-navy);
    }

    [data-opponent="White Sox"][data-loser="Rockies"] {
      --team-color: var(--whitesox-black);
    }

    [data-team="Orioles"] [data-fill="Guardians"],
    [data-team="Red Sox"] [data-fill="Guardians"],
    [data-team="Astros"] [data-fill="Guardians"],
    [data-team="Angels"] [data-fill="Guardians"],
    [data-team="Diamondbacks"] [data-fill="Guardians"],
    [data-team="Giants"] [data-fill="Guardians"],
    [data-team="Reds"] [data-fill="Guardians"],
    [data-team="Cardinals"] [data-fill="Guardians"],
    [data-team="Nationals"] [data-fill="Guardians"],
    [data-team="Mets"] [data-fill="Guardians"],
    [data-team="Braves"] [data-fill="Guardians"],
    [data-team="Phillies"] [data-fill="Guardians"],
    [data-opponent="Guardians"][data-loser="Orioles"],
    [data-opponent="Guardians"][data-loser="Red Sox"],
    [data-opponent="Guardians"][data-loser="Astros"],
    [data-opponent="Guardians"][data-loser="Angels"],
    [data-opponent="Guardians"][data-loser="Diamondbacks"],
    [data-opponent="Guardians"][data-loser="Giants"],
    [data-opponent="Guardians"][data-loser="Reds"],
    [data-opponent="Guardians"][data-loser="Cardinals"],
    [data-opponent="Guardians"][data-loser="Nationals"],
    [data-opponent="Guardians"][data-loser="Mets"],
    [data-opponent="Guardians"][data-loser="Braves"],
    [data-opponent="Guardians"][data-loser="Phillies"] {
      --team-color: var(--guardians-navy);
    }

    [data-team="Athletics"] [data-fill="Tigers"],
    [data-team="Rangers"] [data-fill="Tigers"],
    [data-team="Yankees"] [data-fill="Tigers"],
    [data-team="Rays"] [data-fill="Tigers"],
    [data-team="Royals"] [data-fill="Tigers"],
    [data-team="Twins"] [data-fill="Tigers"],
    [data-team="Marlins"] [data-fill="Tigers"],
    [data-team="Cubs"] [data-fill="Tigers"],
    [data-team="Brewers"] [data-fill="Tigers"],
    [data-team="Padres"] [data-fill="Tigers"],
    [data-team="Dodgers"] [data-fill="Tigers"],
    [data-opponent="Tigers"][data-loser="Athletics"],
    [data-opponent="Tigers"][data-loser="Rangers"],
    [data-opponent="Tigers"][data-loser="Yankees"],
    [data-opponent="Tigers"][data-loser="Rays"],
    [data-opponent="Tigers"][data-loser="Royals"],
    [data-opponent="Tigers"][data-loser="Twins"],
    [data-opponent="Tigers"][data-loser="Marlins"],
    [data-opponent="Tigers"][data-loser="Cubs"],
    [data-opponent="Tigers"][data-loser="Brewers"],
    [data-opponent="Tigers"][data-loser="Padres"],
    [data-opponent="Tigers"][data-loser="Dodgers"] {
      --team-color: var(--tigers-orange);
    }

    [data-team="Brewers"] [data-fill="Royals"],
    [data-team="Yankees"] [data-fill="Royals"],
    [data-team="Rays"] [data-fill="Royals"],
    [data-team="Tigers"] [data-fill="Royals"],
    [data-team="Twins"] [data-fill="Royals"],
    [data-team="Athletics"] [data-fill="Royals"],
    [data-team="Rangers"] [data-fill="Royals"],
    [data-team="Marlins"] [data-fill="Royals"],
    [data-team="Cubs"] [data-fill="Royals"],
    [data-team="Padres"] [data-fill="Royals"],
    [data-team="Dodgers"] [data-fill="Royals"],
    [data-opponent="Royals"][data-loser="Brewers"],
    [data-opponent="Royals"][data-loser="Yankees"],
    [data-opponent="Royals"][data-loser="Rays"],
    [data-opponent="Royals"][data-loser="Tigers"],
    [data-opponent="Royals"][data-loser="Twins"],
    [data-opponent="Royals"][data-loser="Athletics"],
    [data-opponent="Royals"][data-loser="Rangers"],
    [data-opponent="Royals"][data-loser="Marlins"],
    [data-opponent="Royals"][data-loser="Cubs"],
    [data-opponent="Royals"][data-loser="Padres"],
    [data-opponent="Royals"][data-loser="Dodgers"] {
      --team-color: var(--royals-powderblue);
      --team-shadow-color: var(--royals-blue);
    }

    [data-team="Yankees"] [data-fill="Twins"],
    [data-team="Rays"] [data-fill="Twins"],
    [data-team="Tigers"] [data-fill="Twins"],
    [data-team="Athletics"] [data-fill="Twins"],
    [data-team="Rangers"] [data-fill="Twins"],
    [data-team="Royals"] [data-fill="Twins"],
    [data-team="Marlins"] [data-fill="Twins"],
    [data-team="Cubs"] [data-fill="Twins"],
    [data-team="Brewers"] [data-fill="Twins"],
    [data-team="Padres"] [data-fill="Twins"],
    [data-team="Dodgers"] [data-fill="Twins"],
    [data-opponent="Twins"][data-loser="Yankees"],
    [data-opponent="Twins"][data-loser="Rays"],
    [data-opponent="Twins"][data-loser="Tigers"],
    [data-opponent="Twins"][data-loser="Athletics"],
    [data-opponent="Twins"][data-loser="Rangers"],
    [data-opponent="Twins"][data-loser="Royals"],
    [data-opponent="Twins"][data-loser="Marlins"],
    [data-opponent="Twins"][data-loser="Cubs"],
    [data-opponent="Twins"][data-loser="Brewers"],
    [data-opponent="Twins"][data-loser="Padres"],
    [data-opponent="Twins"][data-loser="Dodgers"] {
      --team-color: var(--twins-scarlet-red);
    }

    [data-team="Orioles"] [data-fill="Astros"],
    [data-team="Red Sox"] [data-fill="Astros"],
    [data-team="Guardians"] [data-fill="Astros"],
    [data-team="Mets"] [data-fill="Astros"],
    [data-team="Phillies"] [data-fill="Astros"],
    [data-team="Giants"] [data-fill="Astros"],
    [data-opponent="Astros"][data-loser="Orioles"],
    [data-opponent="Astros"][data-loser="Red Sox"],
    [data-opponent="Astros"][data-loser="Guardians"],
    [data-opponent="Astros"][data-loser="Mets"],
    [data-opponent="Astros"][data-loser="Phillies"],
    [data-opponent="Astros"][data-loser="Giants"] {
      --team-color: var(--astros-darkblue);
    }

    [data-team="Orioles"] [data-fill="Angels"],
    [data-team="Red Sox"] [data-fill="Angels"],
    [data-team="Guardians"] [data-fill="Angels"],
    [data-team="Astros"] [data-fill="Angels"],
    [data-team="Diamondbacks"] [data-fill="Angels"],
    [data-team="Reds"] [data-fill="Angels"],
    [data-team="Cardinals"] [data-fill="Angels"],
    [data-team="Mets"] [data-fill="Angels"],
    [data-team="Braves"] [data-fill="Angels"],
    [data-team="Nationals"] [data-fill="Angels"],
    [data-team="Phillies"] [data-fill="Angels"],
    [data-opponent="Angels"][data-loser="Orioles"],
    [data-opponent="Angels"][data-loser="Red Sox"],
    [data-opponent="Angels"][data-loser="Guardians"],
    [data-opponent="Angels"][data-loser="Astros"],
    [data-opponent="Angels"][data-loser="Diamondbacks"],
    [data-opponent="Angels"][data-loser="Reds"],
    [data-opponent="Angels"][data-loser="Cardinals"],
    [data-opponent="Angels"][data-loser="Mets"],
    [data-opponent="Angels"][data-loser="Braves"],
    [data-opponent="Angels"][data-loser="Nationals"],
    [data-opponent="Angels"][data-loser="Phillies"] {
      --team-color: var(--angels-blue);
    }

    [data-team="Yankees"] [data-fill="Rangers"],
    [data-team="Rays"] [data-fill="Rangers"],
    [data-team="Tigers"] [data-fill="Rangers"],
    [data-team="Royals"] [data-fill="Rangers"],
    [data-team="Twins"] [data-fill="Rangers"],
    [data-team="Athletics"] [data-fill="Rangers"],
    [data-team="Marlins"] [data-fill="Rangers"],
    [data-team="Cubs"] [data-fill="Rangers"],
    [data-team="Brewers"] [data-fill="Rangers"],
    [data-team="Padres"] [data-fill="Rangers"],
    [data-team="Dodgers"] [data-fill="Rangers"],
    [data-opponent="Rangers"][data-loser="Yankees"],
    [data-opponent="Rangers"][data-loser="Rays"],
    [data-opponent="Rangers"][data-loser="Tigers"],
    [data-opponent="Rangers"][data-loser="Royals"],
    [data-opponent="Rangers"][data-loser="Twins"],
    [data-opponent="Rangers"][data-loser="Athletics"],
    [data-opponent="Rangers"][data-loser="Marlins"],
    [data-opponent="Rangers"][data-loser="Cubs"],
    [data-opponent="Rangers"][data-loser="Brewers"],
    [data-opponent="Rangers"][data-loser="Padres"],
    [data-opponent="Rangers"][data-loser="Dodgers"] {
      --team-color: var(--rangers-red);
    }


    [data-team="Diamondbacks"] [data-fill="Braves"],
    [data-team="Giants"] [data-fill="Braves"],
    [data-team="Orioles"] [data-fill="Braves"],
    [data-team="Red Sox"] [data-fill="Braves"],
    [data-team="Guardians"] [data-fill="Braves"],
    [data-team="Astros"] [data-fill="Braves"],
    [data-team="Angels"] [data-fill="Braves"],
    [data-team="Reds"] [data-fill="Braves"],
    [data-team="Cardinals"] [data-fill="Braves"],
    [data-team="Nationals"] [data-fill="Braves"],
    [data-team="Mets"] [data-fill="Braves"],
    [data-team="Phillies"] [data-fill="Braves"],
    [data-opponent="Braves"][data-loser="Diamondbacks"],
    [data-opponent="Braves"][data-loser="Giants"],
    [data-opponent="Braves"][data-loser="Orioles"],
    [data-opponent="Braves"][data-loser="Red Sox"],
    [data-opponent="Braves"][data-loser="Guardians"],
    [data-opponent="Braves"][data-loser="Astros"],
    [data-opponent="Braves"][data-loser="Angels"],
    [data-opponent="Braves"][data-loser="Reds"],
    [data-opponent="Braves"][data-loser="Cardinals"],
    [data-opponent="Braves"][data-loser="Nationals"],
    [data-opponent="Braves"][data-loser="Mets"],
    [data-opponent="Braves"][data-loser="Phillies"] {
      --team-color: var(--braves-navy);
    }

    
    [data-team="Yankees"] [data-fill="Marlins"],
    [data-team="Rays"] [data-fill="Marlins"],
    [data-team="Tigers"] [data-fill="Marlins"],
    [data-team="Twins"] [data-fill="Marlins"],
    [data-team="Rangers"] [data-fill="Marlins"],
    [data-team="Royals"] [data-fill="Marlins"],
    [data-team="Cubs"] [data-fill="Marlins"],
    [data-team="Brewers"] [data-fill="Marlins"],
    [data-team="Padres"] [data-fill="Marlins"],
    [data-team="Dodgers"] [data-fill="Marlins"],
    [data-opponent="Marlins"][data-loser="Yankees"],
    [data-opponent="Marlins"][data-loser="Rays"],
    [data-opponent="Marlins"][data-loser="Tigers"],
    [data-opponent="Marlins"][data-loser="Twins"],
    [data-opponent="Marlins"][data-loser="Rangers"],
    [data-opponent="Marlins"][data-loser="Royals"],
    [data-opponent="Marlins"][data-loser="Cubs"],
    [data-opponent="Marlins"][data-loser="Brewers"],
    [data-opponent="Marlins"][data-loser="Padres"],
    [data-opponent="Marlins"][data-loser="Dodgers"] {
      --team-color: var(--marlins-miamiblue);
      --team-shadow-color: var(--marlins-black);
    }

    [data-team="Orioles"] [data-fill="Mets"],
    [data-team="Red Sox"] [data-fill="Mets"],
    [data-team="Guardians"] [data-fill="Mets"],
    [data-team="Astros"] [data-fill="Mets"],
    [data-team="Giants"] [data-fill="Mets"],
    [data-team="Reds"] [data-fill="Mets"],
    [data-team="Braves"] [data-fill="Mets"],
    [data-team="Phillies"] [data-fill="Mets"],
    [data-opponent="Mets"][data-loser="Orioles"],
    [data-opponent="Mets"][data-loser="Red Sox"],
    [data-opponent="Mets"][data-loser="Guardians"],
    [data-opponent="Mets"][data-loser="Astros"],
    [data-opponent="Mets"][data-loser="Giants"],
    [data-opponent="Mets"][data-loser="Reds"],
    [data-opponent="Mets"][data-loser="Braves"],
    [data-opponent="Mets"][data-loser="Phillies"] {
      --team-color: var(--mets-blue);
      --team-shadow-color: var(--mets-orange);
    }

    [data-team="Orioles"] [data-fill="Phillies"],
    [data-team="Red Sox"] [data-fill="Phillies"],
    [data-team="Guardians"] [data-fill="Phillies"],
    [data-team="Diamondbacks"] [data-fill="Phillies"],
    [data-team="Astros"] [data-fill="Phillies"],
    [data-team="Angels"] [data-fill="Phillies"],
    [data-team="Giants"] [data-fill="Phillies"],
    [data-team="Reds"] [data-fill="Phillies"],
    [data-team="Cardinals"] [data-fill="Phillies"],
    [data-team="Nationals"] [data-fill="Phillies"],
    [data-team="Mets"] [data-fill="Phillies"],
    [data-team="Braves"] [data-fill="Phillies"],
    [data-opponent="Phillies"][data-loser="Orioles"],
    [data-opponent="Phillies"][data-loser="Red Sox"],
    [data-opponent="Phillies"][data-loser="Guardians"],
    [data-opponent="Phillies"][data-loser="Diamondbacks"],
    [data-opponent="Phillies"][data-loser="Astros"],
    [data-opponent="Phillies"][data-loser="Angels"],
    [data-opponent="Phillies"][data-loser="Giants"],
    [data-opponent="Phillies"][data-loser="Reds"],
    [data-opponent="Phillies"][data-loser="Cardinals"],
    [data-opponent="Phillies"][data-loser="Nationals"],
    [data-opponent="Phillies"][data-loser="Mets"],
    [data-opponent="Phillies"][data-loser="Braves"] {
      --team-color: var(--phillies-blue);
    }

    [data-team="Orioles"] [data-fill="Nationals"],
    [data-team="Red Sox"] [data-fill="Nationals"],
    [data-team="Guardians"] [data-fill="Nationals"],
    [data-team="Astros"] [data-fill="Nationals"],
    [data-team="Angels"] [data-fill="Nationals"],
    [data-team="Diamondbacks"] [data-fill="Nationals"],
    [data-team="Giants"] [data-fill="Nationals"],
    [data-team="Reds"] [data-fill="Nationals"],
    [data-team="Cardinals"] [data-fill="Nationals"],
    [data-team="Mets"] [data-fill="Nationals"],
    [data-team="Braves"] [data-fill="Nationals"],
    [data-team="Phillies"] [data-fill="Nationals"],
    [data-opponent="Nationals"][data-loser="Orioles"],
    [data-opponent="Nationals"][data-loser="Red Sox"],
    [data-opponent="Nationals"][data-loser="Guardians"],
    [data-opponent="Nationals"][data-loser="Astros"],
    [data-opponent="Nationals"][data-loser="Angels"],
    [data-opponent="Nationals"][data-loser="Diamondbacks"],
    [data-opponent="Nationals"][data-loser="Giants"],
    [data-opponent="Nationals"][data-loser="Reds"],
    [data-opponent="Nationals"][data-loser="Cardinals"],
    [data-opponent="Nationals"][data-loser="Mets"],
    [data-opponent="Nationals"][data-loser="Braves"],
    [data-opponent="Nationals"][data-loser="Phillies"] {
      --team-color: var(--nationals-navyblue);
    }

    [data-team="Yankees"] [data-fill="Cubs"],
    [data-team="Rays"] [data-fill="Cubs"],
    [data-team="Tigers"] [data-fill="Cubs"],
    [data-team="Royals"] [data-fill="Cubs"],
    [data-team="Twins"] [data-fill="Cubs"],
    [data-team="Athletics"] [data-fill="Cubs"],
    [data-team="Rangers"] [data-fill="Cubs"],
    [data-team="Brewers"] [data-fill="Cubs"],
    [data-team="Marlins"] [data-fill="Cubs"],
    [data-team="Padres"] [data-fill="Cubs"],
    [data-team="Dodgers"] [data-fill="Cubs"],
    [data-opponent="Cubs"][data-loser="Yankees"],
    [data-opponent="Cubs"][data-loser="Rays"],
    [data-opponent="Cubs"][data-loser="Royals"],
    [data-opponent="Cubs"][data-loser="Tigers"],
    [data-opponent="Cubs"][data-loser="Twins"],
    [data-opponent="Cubs"][data-loser="Athletics"],
    [data-opponent="Cubs"][data-loser="Rangers"],
    [data-opponent="Cubs"][data-loser="Brewers"],
    [data-opponent="Cubs"][data-loser="Marlins"],
    [data-opponent="Cubs"][data-loser="Padres"],
    [data-opponent="Cubs"][data-loser="Dodgers"] {
      --team-color: var(--cubs-red);
      --team-shadow-color: var(--cubs-blue);
    }

    [data-team="Orioles"] [data-fill="Reds"],
    [data-team="Red Sox"] [data-fill="Reds"],
    [data-team="Guardians"] [data-fill="Reds"],
    [data-team="Astros"] [data-fill="Reds"],
    [data-team="Angels"] [data-fill="Reds"],
    [data-team="Diamondbacks"] [data-fill="Reds"],
    [data-team="Giants"] [data-fill="Reds"],
    [data-team="Cardinals"] [data-fill="Reds"],
    [data-team="Nationals"] [data-fill="Reds"],
    [data-team="Mets"] [data-fill="Reds"],
    [data-team="Braves"] [data-fill="Reds"],
    [data-team="Phillies"] [data-fill="Reds"],
    [data-opponent="Reds"][data-loser="Orioles"],
    [data-opponent="Reds"][data-loser="Red Sox"],
    [data-opponent="Reds"][data-loser="Guardians"],
    [data-opponent="Reds"][data-loser="Astros"],
    [data-opponent="Reds"][data-loser="Angels"],
    [data-opponent="Reds"][data-loser="Diamondbacks"],
    [data-opponent="Reds"][data-loser="Giants"],
    [data-opponent="Reds"][data-loser="Cardinals"],
    [data-opponent="Reds"][data-loser="Nationals"],
    [data-opponent="Reds"][data-loser="Mets"],
    [data-opponent="Reds"][data-loser="Braves"],
    [data-opponent="Reds"][data-loser="Phillies"] {
      --team-color: var(--reds-black);
    }
    
    [data-team="Yankees"] [data-fill="Brewers"],
    [data-team="Rays"] [data-fill="Brewers"],
    [data-team="Tigers"] [data-fill="Brewers"],
    [data-team="Royals"] [data-fill="Brewers"],
    [data-team="Twins"] [data-fill="Brewers"],
    [data-team="Athletics"] [data-fill="Brewers"],
    [data-team="Rangers"] [data-fill="Brewers"],
    [data-team="Marlins"] [data-fill="Brewers"],
    [data-team="Cubs"] [data-fill="Brewers"],
    [data-team="Padres"] [data-fill="Brewers"],
    [data-team="Dodgers"] [data-fill="Brewers"],
    [data-opponent="Brewers"][data-loser="Yankees"],
    [data-opponent="Brewers"][data-loser="Rays"],
    [data-opponent="Brewers"][data-loser="Tigers"],
    [data-opponent="Brewers"][data-loser="Royals"],
    [data-opponent="Brewers"][data-loser="Twins"],
    [data-opponent="Brewers"][data-loser="Athletics"],
    [data-opponent="Brewers"][data-loser="Rangers"],
    [data-opponent="Brewers"][data-loser="Marlins"],
    [data-opponent="Brewers"][data-loser="Cubs"],
    [data-opponent="Brewers"][data-loser="Padres"],
    [data-opponent="Brewers"][data-loser="Dodgers"] {
      --team-color: var(--brewers-yellow);
      --team-shadow-color: var(--brewers-navy);
    }

    [data-team="Orioles"] [data-fill="Cardinals"],
    [data-team="Red Sox"] [data-fill="Cardinals"],
    [data-team="Guardians"] [data-fill="Cardinals"],
    [data-team="Diamondbacks"] [data-fill="Cardinals"],
    [data-team="Astros"] [data-fill="Cardinals"],
    [data-team="Angels"] [data-fill="Cardinals"],
    [data-team="Giants"] [data-fill="Cardinals"],
    [data-team="Reds"] [data-fill="Cardinals"],
    [data-team="Nationals"] [data-fill="Cardinals"],
    [data-team="Mets"] [data-fill="Cardinals"],
    [data-team="Braves"] [data-fill="Cardinals"],
    [data-team="Phillies"] [data-fill="Cardinals"],
    [data-opponent="Cardinals"][data-loser="Oriloes"],
    [data-opponent="Cardinals"][data-loser="Red Sox"],
    [data-opponent="Cardinals"][data-loser="Guardians"],
    [data-opponent="Cardinals"][data-loser="Diamondbacks"],
    [data-opponent="Cardinals"][data-loser="Astors"],
    [data-opponent="Cardinals"][data-loser="Angels"],
    [data-opponent="Cardinals"][data-loser="Giants"],
    [data-opponent="Cardinals"][data-loser="Reds"],
    [data-opponent="Cardinals"][data-loser="Nationals"],
    [data-opponent="Cardinals"][data-loser="Mets"],
    [data-opponent="Cardinals"][data-loser="Braves"],
    [data-opponent="Cardinals"][data-loser="Phillies"] {
      --team-color: var(--cardinals-navy);
    }

    [data-team="Orioles"] [data-fill="Diamondbacks"],
    [data-team="Red Sox"] [data-fill="Diamondbacks"],
    [data-team="Guardians"] [data-fill="Diamondbacks"],
    [data-team="Astros"] [data-fill="Diamondbacks"],
    [data-team="Angels"] [data-fill="Diamondbacks"],
    [data-team="Padres"] [data-fill="Diamondbacks"],
    [data-team="Giants"] [data-fill="Diamondbacks"],
    [data-team="Reds"] [data-fill="Diamondbacks"],
    [data-team="Nationals"] [data-fill="Diamondbacks"],
    [data-team="Cubs"] [data-fill="Diamondbacks"],
    [data-team="Cardinals"] [data-fill="Diamondbacks"],
    [data-team="Mets"] [data-fill="Diamondbacks"],
    [data-team="Braves"] [data-fill="Diamondbacks"],
    [data-team="Phillies"] [data-fill="Diamondbacks"],
    [data-opponent="Diamondbacks"][data-loser="Orioles"],
    [data-opponent="Diamondbacks"][data-loser="Red Sox"],
    [data-opponent="Diamondbacks"][data-loser="Guardians"],
    [data-opponent="Diamondbacks"][data-loser="Astros"],
    [data-opponent="Diamondbacks"][data-loser="Angels"],
    [data-opponent="Diamondbacks"][data-loser="Padres"],
    [data-opponent="Diamondbacks"][data-loser="Giants"],
    [data-opponent="Diamondbacks"][data-loser="Reds"],
    [data-opponent="Diamondbacks"][data-loser="Nationals"],
    [data-opponent="Diamondbacks"][data-loser="Cubs"],
    [data-opponent="Diamondbacks"][data-loser="Cardinals"],
    [data-opponent="Diamondbacks"][data-loser="Mets"],
    [data-opponent="Diamondbacks"][data-loser="Braves"],
    [data-opponent="Diamondbacks"][data-loser="Phillies"] {
      --team-color: var(--dbacks-sand);
    }

    [data-team="White Sox"] [data-fill="Rockies"],
    [data-opponent="Rockies"][data-loser="White Sox"] {
      --team-color: var(--rockies-purple);
    }

    [data-team="Marlins"] [data-fill="Padres"],
    [data-team="Cubs"] [data-fill="Padres"],
    [data-team="Brewers"] [data-fill="Padres"],
    [data-team="Rays"] [data-fill="Padres"],
    [data-team="Tigers"] [data-fill="Padres"],
    [data-team="Royals"] [data-fill="Padres"],
    [data-team="Twins"] [data-fill="Padres"],
    [data-team="Athletics"] [data-fill="Padres"],
    [data-team="Rangers"] [data-fill="Padres"],
    [data-team="Yankees"] [data-fill="Padres"],
    [data-opponent="Padres"][data-loser="Marlins"],
    [data-opponent="Padres"][data-loser="Cubs"],
    [data-opponent="Padres"][data-loser="Brewers"],
    [data-opponent="Padres"][data-loser="Rays"],
    [data-opponent="Padres"][data-loser="Tigers"],
    [data-opponent="Padres"][data-loser="Royals"],
    [data-opponent="Padres"][data-loser="Twins"],
    [data-opponent="Padres"][data-loser="Athletics"],
    [data-opponent="Padres"][data-loser="Rangers"],
    [data-opponent="Padres"][data-loser="Yankees"] {
      --team-color: var(--padres-gold);
    }

    [data-team="Orioles"] [data-fill="Giants"],
    [data-team="Red Sox"] [data-fill="Giants"],
    [data-team="Guardians"] [data-fill="Giants"],
    [data-team="Astros"] [data-fill="Giants"],
    [data-team="Reds"] [data-fill="Giants"],
    [data-team="Braves"] [data-fill="Giants"],
    [data-team="Mets"] [data-fill="Giants"],
    [data-team="Phillies"] [data-fill="Giants"],
    [data-opponent="Giants"][data-loser="Orioles"],
    [data-opponent="Giants"][data-loser="Red Sox"],
    [data-opponent="Giants"][data-loser="Guardians"],
    [data-opponent="Giants"][data-loser="Astros"],
    [data-opponent="Giants"][data-loser="Reds"],
    [data-opponent="Giants"][data-loser="Braves"],
    [data-opponent="Giants"][data-loser="Mets"],
    [data-opponent="Giants"][data-loser="Phillies"] {
      --team-color: var(--giants-black);
    }
  </style>
  <g id="elements">
    <path />
    <text class="record" dy="-30">
      <textPath startOffset="50%">0-0</textPath>
    </text>
    <circle cx="0" cy="0" />
    <g></g>
  </g>
  <rect x="-1200" y="-1200" width="2400" height="2400" stroke="none" id="bgRect"/>
  <g data-team="">
  <g id="gArcs"></g>
  <g id="gDivRecords"></g>
  <g id="gGames"></g>
  <g id="teamLogo"></g>
  <g id="Record">
    <text x="0" y="360">0-0</text>
  </g>
  <g id="season">
    <text x="0" y="-360">2024</text>
  </g>
  <g id="opLogo"><g></g></g>
  </g>
</svg>
`;

const trunc = (n) => Number(n.toFixed(2));

const rad2deg = rad => (rad * 180.0) / Math.PI;

const byDivision = (team) => (a, b) => {
  const divs = ["East", "Central", "West"];
  const league = Teams.league(team);
  const [aa, bb] = [a, b].map((ab) => {
    if (Teams.league(ab) === league) {
      return divs.indexOf(Teams.division(ab));
    } else {
      return 5 + [...divs].reverse().indexOf(Teams.division(ab));
    }
  })
  if (aa < bb) return -1;
  if (aa > bb) return 1;
  return 0;
}

const isGameOf = (team) => (game) => {
  return [game.road, game.home].some(t => t === team);
}

const getOpponentOf = (team) => (game) => {
  return [game.road, game.home].find(t => t !== team);
}

const to_series = (a, c) => {
  const curSeries = a.at(-1);
  const prevGame = curSeries.at(-1);
  if (curSeries.length === 0 || (prevGame.home === c.home && prevGame.road === c.road)) {
    curSeries.push(c);
  } else if ([prevGame.venue, c.venue].every((v) => v === "Gocheok Sky Dome")) {
    curSeries.push(c);
  } else if ([prevGame.venue, c.venue].every((v) => v === "Estadio Alfredo Harp Helu")) {
    curSeries.push(c);
  } else if ([prevGame.venue, c.venue].every((v) => v === "London Stadium")) {
    curSeries.push(c);
  } else {
    a.push([c]);
  }
  return a;
}

const create_arc = (path, start, end, distance, numSeries = 52, clockwise = 0, largeArcFlag = 0, sweepFlag = 1,) => {
  const angles = [start, end].map(pos => 2 * (pos / numSeries) * Math.PI + (15 / numSeries) * Math.PI);
  const x = angles.map((r) => distance * Math.sin(r));
  const y = angles.map((r) => distance * Math.cos(r));
  const d = `M ${x[0]} ${y[0]} A ${distance} ${distance} ${clockwise} ${largeArcFlag} ${sweepFlag} ${x[1]} ${y[1]}`;
  path.setAttribute("d", d);
  return path;
}

const add_win_loss_to_arc = ({ svg, arc }) => {
  const text = ["win", "loss"].map((item) => Number(arc.dataset[item])).join("-");
  const textNode = svg.querySelector("#elements .record").cloneNode(true);
  const textPath = textNode.querySelector("textPath");
  textPath.setAttribute("href", `#${arc.id}`);
  textPath.textContent = text;
  return textNode;
}

const update_record = ({ team, myGames, target }) => {
  const win = myGames.filter((g) => g.winner === team).length;
  const loss = myGames.filter((g) => g.loser === team).length;
  target.textContent = `${win}-${loss}`;
}

const update_teamLogo = ({ logo, grp, size = 500 }) => {
  logo.setAttribute("width", size);
  logo.setAttribute("height", size);

  grp.append(logo);
  grp.setAttribute("transform", `translate(-${0.5 * size},-${0.5 * size})`);
}

const update_games = ({ svg, myGames, team, rOffset, z, numSeries }) => {
  const circles = Teams.all()
    .map((op) => {
      const targets = myGames
        .filter((g) => g.opponent === op)
        .map((g) => {
          const angle = 2 * (g.pos / numSeries) * Math.PI + (15 / numSeries) * Math.PI;
          const x = z * (rOffset + g.seriesGameNumber) * Math.sin(angle);
          const y = z * (rOffset + g.seriesGameNumber) * Math.cos(angle);
          const c = svg.querySelector("#elements circle").cloneNode(true);
          ["date", "opponent", "venue", "seriesGameNumber", "seriesNumber", "winner", "loser", "score", "pos"].forEach((item) => {
            if (g[item]) c.dataset[item] = g[item];
          });
          c.setAttribute("transform", `translate(${trunc(x)},${trunc(y)})`);
          if (g.loser === team) {
            c.classList.add("lost");
          }
          return c;
        });
      return targets;
    })
    .flat()
    ;
  svg.querySelector("#gGames").replaceChildren(...circles);
}

const update_arcs = ({ svg, team, opponents, rOffset, z, numSeries }) => {
  const path = svg.querySelector("#elements path");

  const arcs = opponents
    .map((opponent) => {
      const dots = [...svg.querySelectorAll(`[data-opponent="${opponent}"]`)];
      const obj = {
        id: `arc${opponent.replace(/ /g, "")}`,
        dots, opponent,
        fill: opponent,
        distance: rOffset + 4.85
      };
      return [obj, Object.assign({}, obj, { id: `inner${obj.id}`, distance: rOffset + 0.15 })];
    })
    .flat()
    .concat(
      [
        { league: "AL", division: "West" },
        { league: "AL", division: "Central" },
        { league: "AL", division: "East" },
        { league: "NL", division: "West" },
        { league: "NL", division: "Central" },
        { league: "NL", division: "East" },
      ].map(({ league, division }) => {
        const dots = [...svg.querySelectorAll(`[data-opponent]`)]
          .filter((dot) => Teams.league(dot.dataset.opponent) === league)
          .filter((dot) => Teams.division(dot.dataset.opponent) === division)
          ;
        return {
          id: `${league}${division}`,
          dots,
          league,
          division,
          fill: league,
          distance: rOffset + 6.2
        }
      })
    )
    .flat()
    .map(({ id, dots, distance, fill }) => {
      const win = dots.filter((dot) => dot.dataset.winner === team).length;
      const loss = dots.filter((dot) => dot.dataset.loser === team).length;
      const positions = dots.map((dot) => Number(dot.dataset.pos));
      const [start, end] = [Math.max(...positions), Math.min(...positions)];
      const ext = 0.25 + (distance / (rOffset + 100));
      const arc = create_arc(path.cloneNode(), start + ext, end - ext, z * distance, numSeries);
      arc.classList.add("arc");
      arc.dataset.win = win;
      arc.dataset.loss = loss;
      arc.dataset.fill = fill;
      arc.id = id;
      return arc;
    });
  svg.querySelector("#gArcs").replaceChildren(...arcs);
}

const update_divRecords = ({ svg }) => {
  const divRecords = [...svg.querySelectorAll("#gArcs path")]
    .filter((arc) => !arc.id.includes("inner"))
    .map((arc) => ({ arc, svg }))
    .map(add_win_loss_to_arc);
  svg.getElementById("gDivRecords").replaceChildren(...divRecords);
}

const update_opLogos = ({ team, svg, opponents, rOffset, z, logos, numSeries }) => {
  const opLogos = opponents
    .map((opTeam) => {
      const len = z * (rOffset - .75);
      const isSameLeague = Teams.league(team) === Teams.league(opTeam);
      const size = isSameLeague ? 80 : 65;
      const opLogo = logos[opTeam];
      opLogo.setAttribute("width", size);
      opLogo.setAttribute("height", size);
      const grp = svg.querySelector("#opLogo g").cloneNode(true);
      grp.append(opLogo);
      const pos = [...svg.querySelectorAll(`[data-opponent="${opTeam}"]`)]
        .map((c) => Number(c.dataset.pos))
        .reduce((a, c, i, ary) => {
          a += c;
          if (i === ary.length - 1) return (a / ary.length);
          return a;
        }, 0);
      const angle = 2 * (pos / numSeries) * Math.PI + (15 / numSeries) * Math.PI;
      const flip = isSameLeague ? Math.PI : Math.PI;
      grp.setAttribute("transform", `translate(${len * Math.sin(angle)},${len * Math.cos(angle)}) rotate(${-rad2deg(angle + flip)}) translate(${-0.5 * size},${-0.5 * size})`);
      return grp;
    });
  svg.querySelector("#opLogo").replaceChildren(...opLogos);
}

const setup = (games, team) => {
  const opponents = Teams.all()
    .filter((t) => t !== team)
    .sort(byDivision(team));

  const myGames = games
    .filter(isGameOf(team))
    .map((g) => Object.assign(g, { opponent: getOpponentOf(team)(g) }))
    .map((g) => {
      const opIndex = opponents.findIndex((t) => t === g.opponent);
      return Object.assign(g, { opIndex })
    })
    .reduce(to_series, [[]])
    .map((series, i) => {
      series.forEach((g, j) => {
        g.seriesNumber = i + 1;
        g.seriesGameNumber = j + 1;
      });
      return series;
    })
    .flat()
    .sort((a, b) => a.opIndex - b.opIndex)
    ;

  const seriesNumbers = myGames.map((g) => g.seriesNumber).reduce(to_uniq);
  const numSeries = seriesNumbers.length; // 52=4*4+2*10+2*1+14*1

  myGames.forEach((g) => {
    g.pos = 1 + seriesNumbers.findIndex((n) => n === g.seriesNumber);
  });

  return { myGames, opponents, numSeries };
}

const create_chart = (games, team, self) => {
  const logos = get_logos(2024);

  const { myGames, opponents, numSeries } = setup(games, team);
  const svg = document.querySelector("mlb-h2h").shadowRoot.querySelector("template").content.cloneNode(true).querySelector("svg");
  svg.querySelector(`g[data-team]`).dataset.team = team;
  update_record({ team, myGames, target: svg.querySelector("#Record text") });
  update_teamLogo({ team, logo: logos[team], grp: svg.getElementById("teamLogo") });

  const rOffset = 8;
  const z = 78;
  update_games({ svg, myGames, team, rOffset, z, numSeries });
  update_arcs({ svg, team, opponents, rOffset, z, numSeries });
  update_divRecords({ svg })
  update_opLogos({ team, svg, opponents, rOffset, z, logos, numSeries });

  return svg;
}

const tweet = ({ team, record, svg }) => {
  const wins = [...svg.querySelectorAll(`[data-winner="${team}"]`)];
  const losses = [...svg.querySelectorAll(`[data-loser="${team}"]`)];
  const vsLeague = ["AL", "NL"]
    .sort((a, b) => a === Teams.league(team) ? -1 : 1)
    .map((league) => {
      const win = wins.filter((c) => Teams.league(c.dataset.opponent) === league).length;
      const loss = losses.filter((c) => Teams.league(c.dataset.opponent) === league).length;
      return { win, loss, league, division: "" };
    })
    ;

  const vsDivision = ["AL", "NL"]
    .sort((a, b) => a === Teams.league(team) ? -1 : 1)
    .map((league) => {
      return ["East", "Central", "West"].map((division) => ({ league, division }));
    })
    .flat()
    .map(({ league, division }) => {
      const arc = svg.getElementById(`${league}${division}`);
      const win = arc.dataset.win;
      const loss = arc.dataset.loss;
      return { win, loss, league, division };
    })
    ;

  const ja = team === "Angels" ? "#エンゼルス" : "";
  return [
    `2024 ${team} are ${record}. ${Teams.hashtag(team)} ${ja}`,
    `#HeadToHead `,
    [...vsLeague, ...vsDivision].map(({ win, loss, league, division }) => `${win}-${loss} vs ${[league, division].join(" ")}`),
  ]
    .flat()
    .join("\n");
}

async function downloadHandler(detail) {
  const opts = Object.assign({
    width: 1600,
    height: 1600,
  }, detail);

  const { team, width, height, self } = opts;

  const svg = opts.svg.cloneNode(true);
  svg.setAttributeNS(null, "width", width);
  svg.setAttributeNS(null, "height", height);

  const record = svg.querySelector("#Record text").textContent;
  const filename = `${team}-${record}.png`;

  const waitForCss = [...self.shadowRoot.querySelectorAll(`link[rel="stylesheet"]`)]
    .map((link) => {
      return load_css_rules(link, svg);
    });
  const rules = await Promise.all(waitForCss)
    .then(css => css.join("\n"));
  svg.querySelector(`style[data-css="external"]`).textContent = rules;

  const waitForFonts = [
    { name: "Noto Sans", url: "/mlb2024/fonts/NotoSans-Regular.ttf" },
  ].map(load_font);
  const fonts = await Promise.all(waitForFonts)
    .then(css => css.join("\n"));
  svg.querySelector(`style[data-css="fonts"]`).textContent = fonts;

  svg.dataset.download = filename;
  document.body.append(svg);
  await svgdownload(filename, document.querySelector(`[data-download]`));
  svg.remove();
  console.log(tweet({ team, record, svg }));
}

const gamesToday = () => {
  return [];
  return fetchJson("https://statsapi.mlb.com/api/v1/schedule?sportId=1")
    .then((input) => {
      const data = input.dates[0].games
        .filter((g) => !g.resumeGameDate)
        .map((g) => ({
          gamePk: g.gamePk,
          date: g.officialDate,
          road: Teams.nickname(g.teams.away.team.name),
          home: Teams.nickname(g.teams.home.team.name),
          score: [g.teams.away.score, g.teams.home.score].join(" - "),
          status: g.status.detailedState,
        }))
        .filter(({ status }) => ["Final", "Game Over", "Completed Early"].includes(status))
        ;
      return data;
    });
}

const merge = (scheduled, results) => {
  return scheduled
    .map((g) => {
      const obj = results.find((o) => o.gamePk === g.gamePk);
      if (!obj) return g;
      const r = new GameResult(obj);
      const [date, winner, loser, score] = [r.date, r.winner, r.loser, obj.score];
      return Object.assign(g, { date, winner, loser, score });
    });
}

class MlbH2h extends HTMLElement {
  static get observedAttributes() {
    return ["team"];
  }

  constructor() {
    super();
    const self = this;
    this.render();
    this.container = self.shadowRoot.querySelector(".canvas");

    document.addEventListener("ResultsLoaded", async ({ detail }) => {
      const today = await gamesToday();
      self.data = merge(scheduledGames, detail.concat(today));
      const team = self.getAttribute("team") || "Angels";
      const svg = create_chart(self.data, team, self);
      self.container.replaceChildren(svg);
    });
  }

  render() {
    const css = [
      `<link rel="stylesheet" href="/mlb2024/css/mlb2024-colors.css">`,
      `<style>
      :host {
        --direction: column;
        height: 100%;
      }
      @media (orientation: landscape) {
        :host {
          --direction: row;
        }
        .container {
          height: 100%;
        }
        .canvas {
          height: 100%;
        }
      }
      @media (orientation: portrait){
        .canvas {
          width: 100%;
        }
      }
      .container {
        display: flex;
        flex-direction: var(--direction);
        align-items: center;
      }
      .canvas {
        aspect-ratio: 1 / 1;
        padding: .25em;
        background: var(--bg-color, cornsilk);
      }
      </style>`
    ].join("\n");
    const html = `<div class="container">
      <div class="canvas"></div>
        <team-selector></team-selector>
      </div>
    <template>${svgTemplate}</template>`;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `${css}${html}`;
  }

  connectedCallback() {
    const self = this;

    document.addEventListener("DownloadSVG", ({ detail }) => {
      const team = self.getAttribute("team") || "Angels";
      const opts = Object.assign({
        self,
        svg: self.shadowRoot.querySelector("svg"),
        team
      }, detail);
      downloadHandler(opts);
    });

    document.addEventListener("UpdateResults", async ({ detail }) => {
      const today = await gamesToday();
      document.dispatchEvent(new CustomEvent("ResultsLoaded", { detail: today }));
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const self = this;
    const root = this.shadowRoot;
    const container = root.querySelector(".canvas");

    root.querySelector("team-selector").setAttribute("team", this.getAttribute("team"));

    if (!this.data) return;
    if (name === "team") {
      const team = newValue;
      const svg = create_chart(self.data, team);
      container.replaceChildren(svg);

      root.querySelector("team-selector").setAttribute("team", team);
    }
  }
}

customElements.define("mlb-h2h", MlbH2h);
export { MlbH2h }

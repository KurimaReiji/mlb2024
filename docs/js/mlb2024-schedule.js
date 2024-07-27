const json = `
[
  {
    "gamePk": 745444,
    "officialDate": "2024-03-20",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Gocheok Sky Dome"
  },
  {
    "gamePk": 746175,
    "officialDate": "2024-03-21",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Gocheok Sky Dome"
  },
  {
    "gamePk": 747060,
    "officialDate": "2024-03-28",
    "road": "Angels",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746737,
    "officialDate": "2024-03-28",
    "road": "Nationals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745445,
    "officialDate": "2024-03-28",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746165,
    "officialDate": "2024-03-28",
    "road": "Cardinals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745116,
    "officialDate": "2024-03-28",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746335,
    "officialDate": "2024-03-28",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746821,
    "officialDate": "2024-03-28",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746089,
    "officialDate": "2024-03-28",
    "road": "Pirates",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746418,
    "officialDate": "2024-03-28",
    "road": "Yankees",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745039,
    "officialDate": "2024-03-28",
    "road": "Cubs",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745687,
    "officialDate": "2024-03-28",
    "road": "Guardians",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747224,
    "officialDate": "2024-03-28",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745283,
    "officialDate": "2024-03-28",
    "road": "Red Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745848,
    "officialDate": "2024-03-29",
    "road": "Brewers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745604,
    "officialDate": "2024-03-29",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745117,
    "officialDate": "2024-03-29",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746091,
    "officialDate": "2024-03-29",
    "road": "Pirates",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746412,
    "officialDate": "2024-03-29",
    "road": "Yankees",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747223,
    "officialDate": "2024-03-29",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745682,
    "officialDate": "2024-03-29",
    "road": "Guardians",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745276,
    "officialDate": "2024-03-29",
    "road": "Red Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745435,
    "officialDate": "2024-03-29",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746167,
    "officialDate": "2024-03-29",
    "road": "Cardinals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745850,
    "officialDate": "2024-03-30",
    "road": "Brewers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746818,
    "officialDate": "2024-03-30",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747063,
    "officialDate": "2024-03-30",
    "road": "Angels",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745599,
    "officialDate": "2024-03-30",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745684,
    "officialDate": "2024-03-30",
    "road": "Guardians",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746736,
    "officialDate": "2024-03-30",
    "road": "Nationals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745119,
    "officialDate": "2024-03-30",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746333,
    "officialDate": "2024-03-30",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746087,
    "officialDate": "2024-03-30",
    "road": "Pirates",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745037,
    "officialDate": "2024-03-30",
    "road": "Cubs",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745436,
    "officialDate": "2024-03-30",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746410,
    "officialDate": "2024-03-30",
    "road": "Yankees",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747221,
    "officialDate": "2024-03-30",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746168,
    "officialDate": "2024-03-30",
    "road": "Cardinals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745278,
    "officialDate": "2024-03-30",
    "road": "Red Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747062,
    "officialDate": "2024-03-31",
    "road": "Angels",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745602,
    "officialDate": "2024-03-31",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746739,
    "officialDate": "2024-03-31",
    "road": "Nationals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745115,
    "officialDate": "2024-03-31",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746090,
    "officialDate": "2024-03-31",
    "road": "Pirates",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745845,
    "officialDate": "2024-03-31",
    "road": "Brewers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746332,
    "officialDate": "2024-03-31",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746815,
    "officialDate": "2024-03-31",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746413,
    "officialDate": "2024-03-31",
    "road": "Yankees",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745035,
    "officialDate": "2024-03-31",
    "road": "Cubs",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745683,
    "officialDate": "2024-03-31",
    "road": "Guardians",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747222,
    "officialDate": "2024-03-31",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745279,
    "officialDate": "2024-03-31",
    "road": "Red Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745438,
    "officialDate": "2024-03-31",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746166,
    "officialDate": "2024-03-31",
    "road": "Cardinals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746817,
    "officialDate": "2024-04-01",
    "road": "Braves",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746899,
    "officialDate": "2024-04-01",
    "road": "Rockies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744875,
    "officialDate": "2024-04-01",
    "road": "Pirates",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 747058,
    "officialDate": "2024-04-01",
    "road": "Royals",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745600,
    "officialDate": "2024-04-01",
    "road": "Reds",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746085,
    "officialDate": "2024-04-01",
    "road": "Angels",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745109,
    "officialDate": "2024-04-01",
    "road": "Rangers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745842,
    "officialDate": "2024-04-01",
    "road": "Tigers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746409,
    "officialDate": "2024-04-01",
    "road": "Blue Jays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745675,
    "officialDate": "2024-04-01",
    "road": "Red Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745277,
    "officialDate": "2024-04-01",
    "road": "Guardians",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745437,
    "officialDate": "2024-04-01",
    "road": "Cardinals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747218,
    "officialDate": "2024-04-01",
    "road": "Yankees",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746170,
    "officialDate": "2024-04-01",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746009,
    "officialDate": "2024-04-02",
    "road": "Twins",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747057,
    "officialDate": "2024-04-02",
    "road": "Royals",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745598,
    "officialDate": "2024-04-02",
    "road": "Reds",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746086,
    "officialDate": "2024-04-02",
    "road": "Angels",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745111,
    "officialDate": "2024-04-02",
    "road": "Rangers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746898,
    "officialDate": "2024-04-02",
    "road": "Rockies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746814,
    "officialDate": "2024-04-02",
    "road": "Braves",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746411,
    "officialDate": "2024-04-02",
    "road": "Blue Jays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745680,
    "officialDate": "2024-04-02",
    "road": "Red Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745273,
    "officialDate": "2024-04-02",
    "road": "Guardians",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745439,
    "officialDate": "2024-04-02",
    "road": "Cardinals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747220,
    "officialDate": "2024-04-02",
    "road": "Yankees",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746169,
    "officialDate": "2024-04-02",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745844,
    "officialDate": "2024-04-04",
    "road": "Tigers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747059,
    "officialDate": "2024-04-03",
    "road": "Royals",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745114,
    "officialDate": "2024-04-03",
    "road": "Rangers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746083,
    "officialDate": "2024-04-03",
    "road": "Angels",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746008,
    "officialDate": "2024-04-03",
    "road": "Twins",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745678,
    "officialDate": "2024-04-03",
    "road": "Red Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747219,
    "officialDate": "2024-04-03",
    "road": "Yankees",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745603,
    "officialDate": "2024-04-03",
    "road": "Reds",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745275,
    "officialDate": "2024-04-03",
    "road": "Guardians",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745440,
    "officialDate": "2024-04-03",
    "road": "Cardinals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 744869,
    "officialDate": "2024-04-03",
    "road": "Pirates",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746900,
    "officialDate": "2024-04-03",
    "road": "Rockies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746407,
    "officialDate": "2024-04-03",
    "road": "Blue Jays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746163,
    "officialDate": "2024-04-03",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746816,
    "officialDate": "2024-06-27",
    "road": "Braves",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745843,
    "officialDate": "2024-04-04",
    "road": "Tigers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 744870,
    "officialDate": "2024-04-04",
    "road": "Pirates",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745928,
    "officialDate": "2024-04-04",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745200,
    "officialDate": "2024-04-04",
    "road": "Marlins",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746327,
    "officialDate": "2024-04-04",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745764,
    "officialDate": "2024-04-05",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746497,
    "officialDate": "2024-04-05",
    "road": "Athletics",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746897,
    "officialDate": "2024-04-05",
    "road": "Dodgers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746576,
    "officialDate": "2024-04-05",
    "road": "Rays",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745524,
    "officialDate": "2024-04-05",
    "road": "Orioles",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745361,
    "officialDate": "2024-04-05",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746733,
    "officialDate": "2024-04-05",
    "road": "Mets",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744874,
    "officialDate": "2024-04-05",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 747143,
    "officialDate": "2024-04-05",
    "road": "D-backs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746328,
    "officialDate": "2024-04-05",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745033,
    "officialDate": "2024-04-05",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746007,
    "officialDate": "2024-04-05",
    "road": "Mariners",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746249,
    "officialDate": "2024-04-05",
    "road": "Red Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746498,
    "officialDate": "2024-04-06",
    "road": "Athletics",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745926,
    "officialDate": "2024-04-06",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745197,
    "officialDate": "2024-04-06",
    "road": "Marlins",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746896,
    "officialDate": "2024-04-06",
    "road": "Dodgers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745522,
    "officialDate": "2024-04-06",
    "road": "Orioles",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744873,
    "officialDate": "2024-04-06",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746731,
    "officialDate": "2024-04-06",
    "road": "Mets",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745031,
    "officialDate": "2024-04-06",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745766,
    "officialDate": "2024-04-06",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746329,
    "officialDate": "2024-04-06",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746006,
    "officialDate": "2024-04-06",
    "road": "Mariners",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747140,
    "officialDate": "2024-04-06",
    "road": "D-backs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746575,
    "officialDate": "2024-04-06",
    "road": "Rays",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745359,
    "officialDate": "2024-04-06",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746248,
    "officialDate": "2024-04-06",
    "road": "Red Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745523,
    "officialDate": "2024-04-07",
    "road": "Orioles",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744871,
    "officialDate": "2024-04-07",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 747141,
    "officialDate": "2024-04-07",
    "road": "D-backs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745765,
    "officialDate": "2024-04-07",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746734,
    "officialDate": "2024-04-07",
    "road": "Mets",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746493,
    "officialDate": "2024-04-07",
    "road": "Athletics",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746330,
    "officialDate": "2024-04-07",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746003,
    "officialDate": "2024-04-07",
    "road": "Mariners",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745198,
    "officialDate": "2024-04-07",
    "road": "Marlins",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746895,
    "officialDate": "2024-04-07",
    "road": "Dodgers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746574,
    "officialDate": "2024-04-07",
    "road": "Rays",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745362,
    "officialDate": "2024-04-07",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746251,
    "officialDate": "2024-04-07",
    "road": "Red Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745032,
    "officialDate": "2024-04-07",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745927,
    "officialDate": "2024-08-09",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746654,
    "officialDate": "2024-04-08",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745761,
    "officialDate": "2024-04-08",
    "road": "Marlins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745520,
    "officialDate": "2024-04-08",
    "road": "Tigers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746735,
    "officialDate": "2024-04-08",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744956,
    "officialDate": "2024-04-08",
    "road": "Mariners",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747142,
    "officialDate": "2024-04-08",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745925,
    "officialDate": "2024-04-08",
    "road": "Dodgers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745194,
    "officialDate": "2024-04-08",
    "road": "Phillies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745034,
    "officialDate": "2024-04-08",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746569,
    "officialDate": "2024-04-08",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746252,
    "officialDate": "2024-04-08",
    "road": "Rays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745432,
    "officialDate": "2024-04-08",
    "road": "Cubs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745363,
    "officialDate": "2024-04-08",
    "road": "Nationals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745517,
    "officialDate": "2024-04-09",
    "road": "Tigers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746981,
    "officialDate": "2024-04-09",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746653,
    "officialDate": "2024-04-09",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746732,
    "officialDate": "2024-04-09",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745762,
    "officialDate": "2024-04-09",
    "road": "Marlins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744957,
    "officialDate": "2024-04-09",
    "road": "Mariners",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747138,
    "officialDate": "2024-04-09",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746326,
    "officialDate": "2024-04-09",
    "road": "Astros",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745924,
    "officialDate": "2024-04-09",
    "road": "Dodgers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745195,
    "officialDate": "2024-04-09",
    "road": "Phillies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745030,
    "officialDate": "2024-04-09",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746571,
    "officialDate": "2024-04-09",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746250,
    "officialDate": "2024-04-09",
    "road": "Rays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745357,
    "officialDate": "2024-04-09",
    "road": "Nationals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745433,
    "officialDate": "2024-04-09",
    "road": "Cubs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745923,
    "officialDate": "2024-04-10",
    "road": "Dodgers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745196,
    "officialDate": "2024-04-10",
    "road": "Phillies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 744950,
    "officialDate": "2024-04-10",
    "road": "Mariners",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746573,
    "officialDate": "2024-04-10",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745355,
    "officialDate": "2024-04-10",
    "road": "Nationals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746247,
    "officialDate": "2024-04-10",
    "road": "Rays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746655,
    "officialDate": "2024-04-10",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745429,
    "officialDate": "2024-04-10",
    "road": "Cubs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746728,
    "officialDate": "2024-04-10",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745763,
    "officialDate": "2024-04-10",
    "road": "Marlins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746980,
    "officialDate": "2024-04-10",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746323,
    "officialDate": "2024-04-10",
    "road": "Astros",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745024,
    "officialDate": "2024-04-10",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 747139,
    "officialDate": "2024-09-26",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 747137,
    "officialDate": "2024-04-11",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746322,
    "officialDate": "2024-04-11",
    "road": "Astros",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745029,
    "officialDate": "2024-04-11",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745601,
    "officialDate": "2024-04-11",
    "road": "Pirates",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746977,
    "officialDate": "2024-04-11",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746490,
    "officialDate": "2024-04-13",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746730,
    "officialDate": "2024-08-30",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746491,
    "officialDate": "2024-04-12",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745596,
    "officialDate": "2024-04-12",
    "road": "Pirates",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745112,
    "officialDate": "2024-04-12",
    "road": "Giants",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747055,
    "officialDate": "2024-04-12",
    "road": "Brewers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744954,
    "officialDate": "2024-04-12",
    "road": "Rockies",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746978,
    "officialDate": "2024-04-12",
    "road": "Angels",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745838,
    "officialDate": "2024-04-12",
    "road": "Royals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746084,
    "officialDate": "2024-04-12",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746812,
    "officialDate": "2024-04-12",
    "road": "Reds",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746408,
    "officialDate": "2024-04-12",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745679,
    "officialDate": "2024-04-12",
    "road": "Nationals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745274,
    "officialDate": "2024-04-12",
    "road": "Cubs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747217,
    "officialDate": "2024-04-12",
    "road": "Cardinals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746162,
    "officialDate": "2024-04-12",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746656,
    "officialDate": "2024-04-13",
    "road": "Yankees",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746658,
    "officialDate": "2024-04-13",
    "road": "Yankees",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746489,
    "officialDate": "2024-04-13",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745839,
    "officialDate": "2024-04-13",
    "road": "Royals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746811,
    "officialDate": "2024-04-13",
    "road": "Reds",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744953,
    "officialDate": "2024-04-13",
    "road": "Rockies",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746405,
    "officialDate": "2024-04-13",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745594,
    "officialDate": "2024-04-13",
    "road": "Pirates",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747054,
    "officialDate": "2024-04-13",
    "road": "Brewers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745676,
    "officialDate": "2024-04-13",
    "road": "Nationals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746979,
    "officialDate": "2024-04-13",
    "road": "Angels",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745110,
    "officialDate": "2024-04-13",
    "road": "Giants",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746082,
    "officialDate": "2024-04-13",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747215,
    "officialDate": "2024-04-13",
    "road": "Cardinals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746161,
    "officialDate": "2024-04-13",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745272,
    "officialDate": "2024-04-13",
    "road": "Cubs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746975,
    "officialDate": "2024-04-14",
    "road": "Angels",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745595,
    "officialDate": "2024-04-14",
    "road": "Pirates",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747056,
    "officialDate": "2024-04-14",
    "road": "Brewers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744952,
    "officialDate": "2024-04-14",
    "road": "Rockies",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745841,
    "officialDate": "2024-04-14",
    "road": "Royals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745113,
    "officialDate": "2024-04-14",
    "road": "Giants",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746492,
    "officialDate": "2024-04-14",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746079,
    "officialDate": "2024-04-14",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746648,
    "officialDate": "2024-04-14",
    "road": "Yankees",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746404,
    "officialDate": "2024-04-14",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746810,
    "officialDate": "2024-04-14",
    "road": "Reds",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745681,
    "officialDate": "2024-04-14",
    "road": "Nationals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745271,
    "officialDate": "2024-04-14",
    "road": "Cubs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747216,
    "officialDate": "2024-04-14",
    "road": "Cardinals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746164,
    "officialDate": "2024-04-14",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746974,
    "officialDate": "2024-04-15",
    "road": "Guardians",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747053,
    "officialDate": "2024-04-15",
    "road": "Twins",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746488,
    "officialDate": "2024-04-15",
    "road": "Rangers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745597,
    "officialDate": "2024-04-15",
    "road": "Rockies",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746080,
    "officialDate": "2024-04-15",
    "road": "Giants",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745106,
    "officialDate": "2024-04-15",
    "road": "Angels",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 744951,
    "officialDate": "2024-04-15",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745840,
    "officialDate": "2024-04-15",
    "road": "Pirates",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746813,
    "officialDate": "2024-04-15",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746002,
    "officialDate": "2024-04-15",
    "road": "Padres",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746406,
    "officialDate": "2024-04-15",
    "road": "Braves",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747213,
    "officialDate": "2024-04-15",
    "road": "Cubs",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745677,
    "officialDate": "2024-04-15",
    "road": "Cardinals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745268,
    "officialDate": "2024-04-15",
    "road": "Reds",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746158,
    "officialDate": "2024-04-15",
    "road": "Nationals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746486,
    "officialDate": "2024-04-16",
    "road": "Rangers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 747051,
    "officialDate": "2024-04-16",
    "road": "Twins",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745593,
    "officialDate": "2024-04-16",
    "road": "Rockies",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746081,
    "officialDate": "2024-04-16",
    "road": "Giants",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745108,
    "officialDate": "2024-04-16",
    "road": "Angels",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 744944,
    "officialDate": "2024-04-16",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746976,
    "officialDate": "2024-04-16",
    "road": "Guardians",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745837,
    "officialDate": "2024-04-16",
    "road": "Pirates",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746004,
    "officialDate": "2024-04-16",
    "road": "Padres",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746400,
    "officialDate": "2024-04-16",
    "road": "Braves",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747214,
    "officialDate": "2024-04-16",
    "road": "Cubs",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745270,
    "officialDate": "2024-04-16",
    "road": "Reds",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745674,
    "officialDate": "2024-04-16",
    "road": "Cardinals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746157,
    "officialDate": "2024-04-16",
    "road": "Nationals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746809,
    "officialDate": "2024-04-17",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746076,
    "officialDate": "2024-04-17",
    "road": "Giants",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747049,
    "officialDate": "2024-04-17",
    "road": "Twins",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745836,
    "officialDate": "2024-04-17",
    "road": "Pirates",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746487,
    "officialDate": "2024-04-17",
    "road": "Rangers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746005,
    "officialDate": "2024-04-17",
    "road": "Padres",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746401,
    "officialDate": "2024-04-17",
    "road": "Braves",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746807,
    "officialDate": "2024-04-17",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744948,
    "officialDate": "2024-04-17",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746159,
    "officialDate": "2024-04-17",
    "road": "Nationals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745671,
    "officialDate": "2024-04-17",
    "road": "Cardinals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747212,
    "officialDate": "2024-04-17",
    "road": "Cubs",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745267,
    "officialDate": "2024-04-17",
    "road": "Reds",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745591,
    "officialDate": "2024-04-17",
    "road": "Rockies",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745105,
    "officialDate": "2024-04-17",
    "road": "Angels",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746973,
    "officialDate": "2024-04-17",
    "road": "Guardians",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745104,
    "officialDate": "2024-04-18",
    "road": "Angels",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746485,
    "officialDate": "2024-04-18",
    "road": "Rangers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746970,
    "officialDate": "2024-04-18",
    "road": "Guardians",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745356,
    "officialDate": "2024-04-18",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746891,
    "officialDate": "2024-04-20",
    "road": "Marlins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746892,
    "officialDate": "2024-04-19",
    "road": "Marlins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746729,
    "officialDate": "2024-04-19",
    "road": "Angels",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745518,
    "officialDate": "2024-04-19",
    "road": "Red Sox",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745592,
    "officialDate": "2024-04-19",
    "road": "White Sox",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744872,
    "officialDate": "2024-04-19",
    "road": "Astros",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745758,
    "officialDate": "2024-04-19",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746650,
    "officialDate": "2024-04-19",
    "road": "Athletics",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 747136,
    "officialDate": "2024-04-19",
    "road": "Rangers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746325,
    "officialDate": "2024-04-19",
    "road": "Orioles",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745922,
    "officialDate": "2024-04-19",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745189,
    "officialDate": "2024-04-19",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745430,
    "officialDate": "2024-04-19",
    "road": "Blue Jays",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746160,
    "officialDate": "2024-04-19",
    "road": "Mets",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745352,
    "officialDate": "2024-04-19",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746572,
    "officialDate": "2024-04-21",
    "road": "Mariners",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745760,
    "officialDate": "2024-04-20",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745921,
    "officialDate": "2024-04-20",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745190,
    "officialDate": "2024-04-20",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746893,
    "officialDate": "2024-04-20",
    "road": "Marlins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744865,
    "officialDate": "2024-04-20",
    "road": "Astros",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746156,
    "officialDate": "2024-04-20",
    "road": "Mets",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745515,
    "officialDate": "2024-04-20",
    "road": "Red Sox",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745354,
    "officialDate": "2024-04-20",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745590,
    "officialDate": "2024-04-20",
    "road": "White Sox",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746651,
    "officialDate": "2024-04-20",
    "road": "Athletics",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746726,
    "officialDate": "2024-04-20",
    "road": "Angels",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746324,
    "officialDate": "2024-04-20",
    "road": "Orioles",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 747135,
    "officialDate": "2024-04-20",
    "road": "Rangers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746570,
    "officialDate": "2024-04-20",
    "road": "Mariners",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745431,
    "officialDate": "2024-04-20",
    "road": "Blue Jays",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 744866,
    "officialDate": "2024-04-21",
    "road": "Astros",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745514,
    "officialDate": "2024-04-21",
    "road": "Red Sox",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745588,
    "officialDate": "2024-04-21",
    "road": "White Sox",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745759,
    "officialDate": "2024-04-21",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746727,
    "officialDate": "2024-04-21",
    "road": "Angels",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746652,
    "officialDate": "2024-04-21",
    "road": "Athletics",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746316,
    "officialDate": "2024-04-21",
    "road": "Orioles",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745920,
    "officialDate": "2024-04-21",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745192,
    "officialDate": "2024-04-21",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746894,
    "officialDate": "2024-04-21",
    "road": "Marlins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746568,
    "officialDate": "2024-04-21",
    "road": "Mariners",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745353,
    "officialDate": "2024-04-21",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746154,
    "officialDate": "2024-04-21",
    "road": "Mets",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745434,
    "officialDate": "2024-04-21",
    "road": "Blue Jays",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747133,
    "officialDate": "2024-04-21",
    "road": "Rangers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745757,
    "officialDate": "2024-04-22",
    "road": "Athletics",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746723,
    "officialDate": "2024-04-22",
    "road": "Phillies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745519,
    "officialDate": "2024-04-22",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745107,
    "officialDate": "2024-04-22",
    "road": "Tigers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747134,
    "officialDate": "2024-04-22",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746319,
    "officialDate": "2024-04-22",
    "road": "Blue Jays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745916,
    "officialDate": "2024-04-22",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745191,
    "officialDate": "2024-04-22",
    "road": "D-backs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746565,
    "officialDate": "2024-04-22",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746242,
    "officialDate": "2024-04-22",
    "road": "Orioles",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745351,
    "officialDate": "2024-04-22",
    "road": "Mets",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746647,
    "officialDate": "2024-04-23",
    "road": "Red Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746722,
    "officialDate": "2024-04-23",
    "road": "Phillies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745516,
    "officialDate": "2024-04-23",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744863,
    "officialDate": "2024-04-23",
    "road": "Dodgers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745102,
    "officialDate": "2024-04-23",
    "road": "Tigers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745754,
    "officialDate": "2024-04-23",
    "road": "Athletics",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 747130,
    "officialDate": "2024-04-23",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746888,
    "officialDate": "2024-04-23",
    "road": "Astros",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746321,
    "officialDate": "2024-04-23",
    "road": "Blue Jays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745917,
    "officialDate": "2024-04-23",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745193,
    "officialDate": "2024-04-23",
    "road": "D-backs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745026,
    "officialDate": "2024-04-23",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746566,
    "officialDate": "2024-04-23",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746246,
    "officialDate": "2024-04-23",
    "road": "Orioles",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745348,
    "officialDate": "2024-04-23",
    "road": "Mets",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745188,
    "officialDate": "2024-04-24",
    "road": "D-backs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745346,
    "officialDate": "2024-04-24",
    "road": "Mets",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746244,
    "officialDate": "2024-04-24",
    "road": "Orioles",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746649,
    "officialDate": "2024-04-24",
    "road": "Red Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746725,
    "officialDate": "2024-04-24",
    "road": "Phillies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745513,
    "officialDate": "2024-04-24",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744864,
    "officialDate": "2024-04-24",
    "road": "Dodgers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745099,
    "officialDate": "2024-04-24",
    "road": "Tigers",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745753,
    "officialDate": "2024-04-24",
    "road": "Athletics",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 747132,
    "officialDate": "2024-04-24",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746889,
    "officialDate": "2024-04-24",
    "road": "Astros",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746317,
    "officialDate": "2024-04-24",
    "road": "Blue Jays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745919,
    "officialDate": "2024-04-24",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745028,
    "officialDate": "2024-04-24",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746567,
    "officialDate": "2024-04-24",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745512,
    "officialDate": "2024-04-25",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746646,
    "officialDate": "2024-04-25",
    "road": "Red Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746724,
    "officialDate": "2024-04-25",
    "road": "Phillies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745918,
    "officialDate": "2024-04-25",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746320,
    "officialDate": "2024-04-25",
    "road": "Blue Jays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746887,
    "officialDate": "2024-04-25",
    "road": "Astros",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745027,
    "officialDate": "2024-04-25",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746564,
    "officialDate": "2024-04-25",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 744867,
    "officialDate": "2024-04-25",
    "road": "Dodgers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745755,
    "officialDate": "2024-04-25",
    "road": "Athletics",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746482,
    "officialDate": "2024-04-26",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 747050,
    "officialDate": "2024-04-26",
    "road": "Athletics",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744949,
    "officialDate": "2024-04-26",
    "road": "Dodgers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746972,
    "officialDate": "2024-04-26",
    "road": "Cubs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745835,
    "officialDate": "2024-04-26",
    "road": "Cardinals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746078,
    "officialDate": "2024-04-26",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747129,
    "officialDate": "2024-04-26",
    "road": "Guardians",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746808,
    "officialDate": "2024-04-26",
    "road": "Rays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745025,
    "officialDate": "2024-04-26",
    "road": "Reds",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746000,
    "officialDate": "2024-04-26",
    "road": "Yankees",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746243,
    "officialDate": "2024-04-26",
    "road": "Twins",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745269,
    "officialDate": "2024-04-26",
    "road": "D-backs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745424,
    "officialDate": "2024-04-26",
    "road": "Phillies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745347,
    "officialDate": "2024-04-26",
    "road": "Pirates",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744946,
    "officialDate": "2024-04-27",
    "road": "Dodgers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747052,
    "officialDate": "2024-04-27",
    "road": "Athletics",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745833,
    "officialDate": "2024-04-27",
    "road": "Cardinals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745020,
    "officialDate": "2024-04-27",
    "road": "Reds",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746971,
    "officialDate": "2024-04-27",
    "road": "Cubs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746075,
    "officialDate": "2024-04-27",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746560,
    "officialDate": "2024-04-27",
    "road": "Astros",
    "home": "Rockies",
    "venue": "Estadio Alfredo Harp Helu"
  },
  {
    "gamePk": 746484,
    "officialDate": "2024-04-27",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746803,
    "officialDate": "2024-04-27",
    "road": "Rays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745998,
    "officialDate": "2024-04-27",
    "road": "Yankees",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747131,
    "officialDate": "2024-04-27",
    "road": "Guardians",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745425,
    "officialDate": "2024-04-27",
    "road": "Phillies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745350,
    "officialDate": "2024-04-27",
    "road": "Pirates",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746245,
    "officialDate": "2024-04-27",
    "road": "Twins",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745266,
    "officialDate": "2024-04-27",
    "road": "D-backs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747045,
    "officialDate": "2024-04-28",
    "road": "Athletics",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 747125,
    "officialDate": "2024-04-28",
    "road": "Guardians",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744947,
    "officialDate": "2024-04-28",
    "road": "Dodgers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746483,
    "officialDate": "2024-04-28",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745834,
    "officialDate": "2024-04-28",
    "road": "Cardinals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746077,
    "officialDate": "2024-04-28",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746805,
    "officialDate": "2024-04-28",
    "road": "Rays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746001,
    "officialDate": "2024-04-28",
    "road": "Yankees",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745022,
    "officialDate": "2024-04-28",
    "road": "Reds",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746561,
    "officialDate": "2024-04-28",
    "road": "Astros",
    "home": "Rockies",
    "venue": "Estadio Alfredo Harp Helu"
  },
  {
    "gamePk": 745349,
    "officialDate": "2024-04-28",
    "road": "Pirates",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746237,
    "officialDate": "2024-04-28",
    "road": "Twins",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745265,
    "officialDate": "2024-04-28",
    "road": "D-backs",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745428,
    "officialDate": "2024-04-28",
    "road": "Phillies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746967,
    "officialDate": "2024-04-28",
    "road": "Cubs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747046,
    "officialDate": "2024-04-29",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746074,
    "officialDate": "2024-04-29",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744945,
    "officialDate": "2024-04-29",
    "road": "Royals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745832,
    "officialDate": "2024-04-29",
    "road": "Cubs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746804,
    "officialDate": "2024-04-29",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745999,
    "officialDate": "2024-04-29",
    "road": "Rays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746236,
    "officialDate": "2024-04-29",
    "road": "Phillies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747211,
    "officialDate": "2024-04-29",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745672,
    "officialDate": "2024-04-29",
    "road": "Pirates",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745427,
    "officialDate": "2024-04-29",
    "road": "Reds",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745263,
    "officialDate": "2024-04-29",
    "road": "Braves",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746481,
    "officialDate": "2024-04-30",
    "road": "Cardinals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746477,
    "officialDate": "2024-04-30",
    "road": "Cardinals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 747047,
    "officialDate": "2024-04-30",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746073,
    "officialDate": "2024-04-30",
    "road": "Rockies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744942,
    "officialDate": "2024-04-30",
    "road": "Royals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745831,
    "officialDate": "2024-04-30",
    "road": "Cubs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746968,
    "officialDate": "2024-04-30",
    "road": "Giants",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746806,
    "officialDate": "2024-04-30",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745997,
    "officialDate": "2024-04-30",
    "road": "Rays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745018,
    "officialDate": "2024-04-30",
    "road": "Nationals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746398,
    "officialDate": "2024-04-30",
    "road": "Guardians",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746239,
    "officialDate": "2024-04-30",
    "road": "Phillies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747210,
    "officialDate": "2024-04-30",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745673,
    "officialDate": "2024-04-30",
    "road": "Pirates",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745426,
    "officialDate": "2024-04-30",
    "road": "Reds",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745260,
    "officialDate": "2024-04-30",
    "road": "Braves",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746478,
    "officialDate": "2024-05-01",
    "road": "Cardinals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745996,
    "officialDate": "2024-05-01",
    "road": "Rays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746800,
    "officialDate": "2024-05-01",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744939,
    "officialDate": "2024-05-01",
    "road": "Royals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745670,
    "officialDate": "2024-05-01",
    "road": "Pirates",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745261,
    "officialDate": "2024-05-01",
    "road": "Braves",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746238,
    "officialDate": "2024-05-01",
    "road": "Phillies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745423,
    "officialDate": "2024-05-01",
    "road": "Reds",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747048,
    "officialDate": "2024-05-01",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746072,
    "officialDate": "2024-05-01",
    "road": "Rockies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745829,
    "officialDate": "2024-05-01",
    "road": "Cubs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746966,
    "officialDate": "2024-05-01",
    "road": "Giants",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745023,
    "officialDate": "2024-05-01",
    "road": "Nationals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746399,
    "officialDate": "2024-05-01",
    "road": "Guardians",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747207,
    "officialDate": "2024-05-01",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746070,
    "officialDate": "2024-05-02",
    "road": "Rockies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747044,
    "officialDate": "2024-05-02",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745830,
    "officialDate": "2024-05-02",
    "road": "Cubs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746969,
    "officialDate": "2024-05-02",
    "road": "Giants",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745021,
    "officialDate": "2024-05-02",
    "road": "Nationals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746403,
    "officialDate": "2024-05-02",
    "road": "Guardians",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746890,
    "officialDate": "2024-05-03",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746721,
    "officialDate": "2024-05-03",
    "road": "Orioles",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745510,
    "officialDate": "2024-05-03",
    "road": "Rockies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745589,
    "officialDate": "2024-05-03",
    "road": "Giants",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744868,
    "officialDate": "2024-05-03",
    "road": "Blue Jays",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745101,
    "officialDate": "2024-05-03",
    "road": "Mets",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745756,
    "officialDate": "2024-05-03",
    "road": "Tigers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746645,
    "officialDate": "2024-05-03",
    "road": "Angels",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746318,
    "officialDate": "2024-05-03",
    "road": "Rangers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746402,
    "officialDate": "2024-05-03",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745914,
    "officialDate": "2024-05-03",
    "road": "Red Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745187,
    "officialDate": "2024-05-03",
    "road": "White Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 747208,
    "officialDate": "2024-05-03",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745665,
    "officialDate": "2024-05-03",
    "road": "Marlins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746152,
    "officialDate": "2024-05-03",
    "road": "Braves",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745750,
    "officialDate": "2024-05-04",
    "road": "Tigers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745911,
    "officialDate": "2024-05-04",
    "road": "Red Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745183,
    "officialDate": "2024-05-04",
    "road": "White Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746884,
    "officialDate": "2024-05-04",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745511,
    "officialDate": "2024-05-04",
    "road": "Rockies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744862,
    "officialDate": "2024-05-04",
    "road": "Blue Jays",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745666,
    "officialDate": "2024-05-04",
    "road": "Marlins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745583,
    "officialDate": "2024-05-04",
    "road": "Giants",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746644,
    "officialDate": "2024-05-04",
    "road": "Angels",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746720,
    "officialDate": "2024-05-04",
    "road": "Orioles",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746311,
    "officialDate": "2024-05-04",
    "road": "Rangers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746394,
    "officialDate": "2024-05-04",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745100,
    "officialDate": "2024-05-04",
    "road": "Mets",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747209,
    "officialDate": "2024-05-04",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746155,
    "officialDate": "2024-05-04",
    "road": "Braves",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745504,
    "officialDate": "2024-05-05",
    "road": "Rockies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744861,
    "officialDate": "2024-05-05",
    "road": "Blue Jays",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745751,
    "officialDate": "2024-05-05",
    "road": "Tigers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746643,
    "officialDate": "2024-05-05",
    "road": "Angels",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745103,
    "officialDate": "2024-05-05",
    "road": "Mets",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746395,
    "officialDate": "2024-05-05",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746314,
    "officialDate": "2024-05-05",
    "road": "Rangers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745913,
    "officialDate": "2024-05-05",
    "road": "Red Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745185,
    "officialDate": "2024-05-05",
    "road": "White Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746883,
    "officialDate": "2024-05-05",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745667,
    "officialDate": "2024-05-05",
    "road": "Marlins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746719,
    "officialDate": "2024-05-05",
    "road": "Orioles",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 747206,
    "officialDate": "2024-05-05",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746153,
    "officialDate": "2024-05-05",
    "road": "Braves",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745587,
    "officialDate": "2024-05-05",
    "road": "Giants",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745585,
    "officialDate": "2024-05-06",
    "road": "Giants",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746639,
    "officialDate": "2024-05-06",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745509,
    "officialDate": "2024-05-06",
    "road": "Angels",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745098,
    "officialDate": "2024-05-06",
    "road": "White Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746313,
    "officialDate": "2024-05-06",
    "road": "Brewers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746886,
    "officialDate": "2024-05-06",
    "road": "Padres",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745912,
    "officialDate": "2024-05-06",
    "road": "Mariners",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745182,
    "officialDate": "2024-05-06",
    "road": "Mets",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745669,
    "officialDate": "2024-05-06",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746149,
    "officialDate": "2024-05-06",
    "road": "Marlins",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745668,
    "officialDate": "2024-05-07",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746638,
    "officialDate": "2024-05-07",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746718,
    "officialDate": "2024-05-07",
    "road": "D-backs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745508,
    "officialDate": "2024-05-07",
    "road": "Angels",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745586,
    "officialDate": "2024-05-07",
    "road": "Blue Jays",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744859,
    "officialDate": "2024-05-07",
    "road": "Orioles",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745095,
    "officialDate": "2024-05-07",
    "road": "White Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745752,
    "officialDate": "2024-05-07",
    "road": "Astros",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 747126,
    "officialDate": "2024-05-07",
    "road": "Red Sox",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746885,
    "officialDate": "2024-05-07",
    "road": "Padres",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745915,
    "officialDate": "2024-05-07",
    "road": "Mariners",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746315,
    "officialDate": "2024-05-07",
    "road": "Brewers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745186,
    "officialDate": "2024-05-07",
    "road": "Mets",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746559,
    "officialDate": "2024-05-07",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746147,
    "officialDate": "2024-05-07",
    "road": "Marlins",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745507,
    "officialDate": "2024-05-08",
    "road": "Angels",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745584,
    "officialDate": "2024-05-08",
    "road": "Blue Jays",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746640,
    "officialDate": "2024-05-08",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746312,
    "officialDate": "2024-05-08",
    "road": "Brewers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746879,
    "officialDate": "2024-05-08",
    "road": "Padres",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746151,
    "officialDate": "2024-05-08",
    "road": "Marlins",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745664,
    "officialDate": "2024-05-08",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745659,
    "officialDate": "2024-05-08",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746717,
    "officialDate": "2024-05-08",
    "road": "D-backs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744858,
    "officialDate": "2024-05-08",
    "road": "Orioles",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745097,
    "officialDate": "2024-05-08",
    "road": "White Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745749,
    "officialDate": "2024-05-08",
    "road": "Astros",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 747127,
    "officialDate": "2024-05-08",
    "road": "Red Sox",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745906,
    "officialDate": "2024-05-08",
    "road": "Mariners",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746562,
    "officialDate": "2024-05-08",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745184,
    "officialDate": "2024-08-05",
    "road": "Mets",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746715,
    "officialDate": "2024-05-09",
    "road": "D-backs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745910,
    "officialDate": "2024-05-09",
    "road": "Mariners",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746563,
    "officialDate": "2024-05-09",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745748,
    "officialDate": "2024-05-09",
    "road": "Astros",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746802,
    "officialDate": "2024-05-09",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745995,
    "officialDate": "2024-05-09",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746241,
    "officialDate": "2024-05-09",
    "road": "Royals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746479,
    "officialDate": "2024-05-10",
    "road": "Astros",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745506,
    "officialDate": "2024-05-10",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745094,
    "officialDate": "2024-05-10",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747043,
    "officialDate": "2024-05-10",
    "road": "D-backs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744940,
    "officialDate": "2024-05-10",
    "road": "Twins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746964,
    "officialDate": "2024-05-10",
    "road": "Nationals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745827,
    "officialDate": "2024-05-10",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746071,
    "officialDate": "2024-05-10",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746801,
    "officialDate": "2024-05-10",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745993,
    "officialDate": "2024-05-10",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746553,
    "officialDate": "2024-05-10",
    "road": "Rangers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746240,
    "officialDate": "2024-05-10",
    "road": "Royals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745421,
    "officialDate": "2024-05-10",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745264,
    "officialDate": "2024-05-10",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745340,
    "officialDate": "2024-05-10",
    "road": "Reds",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744943,
    "officialDate": "2024-05-11",
    "road": "Twins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747041,
    "officialDate": "2024-05-11",
    "road": "D-backs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745505,
    "officialDate": "2024-05-11",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746963,
    "officialDate": "2024-05-11",
    "road": "Nationals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745828,
    "officialDate": "2024-05-11",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746069,
    "officialDate": "2024-05-11",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745096,
    "officialDate": "2024-05-11",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746480,
    "officialDate": "2024-05-11",
    "road": "Astros",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746797,
    "officialDate": "2024-05-11",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745344,
    "officialDate": "2024-05-11",
    "road": "Reds",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745994,
    "officialDate": "2024-05-11",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746554,
    "officialDate": "2024-05-11",
    "road": "Rangers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745422,
    "officialDate": "2024-05-11",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746232,
    "officialDate": "2024-05-11",
    "road": "Royals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745262,
    "officialDate": "2024-05-11",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747042,
    "officialDate": "2024-05-12",
    "road": "D-backs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746965,
    "officialDate": "2024-05-12",
    "road": "Nationals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745499,
    "officialDate": "2024-05-12",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744941,
    "officialDate": "2024-05-12",
    "road": "Twins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746476,
    "officialDate": "2024-05-12",
    "road": "Astros",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746068,
    "officialDate": "2024-05-12",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745092,
    "officialDate": "2024-05-12",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746798,
    "officialDate": "2024-05-12",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745990,
    "officialDate": "2024-05-12",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746555,
    "officialDate": "2024-05-12",
    "road": "Rangers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745345,
    "officialDate": "2024-05-12",
    "road": "Reds",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746234,
    "officialDate": "2024-05-12",
    "road": "Royals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745419,
    "officialDate": "2024-05-12",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745255,
    "officialDate": "2024-05-12",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745825,
    "officialDate": "2024-05-12",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747040,
    "officialDate": "2024-05-13",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746471,
    "officialDate": "2024-05-13",
    "road": "Marlins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746961,
    "officialDate": "2024-05-13",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745826,
    "officialDate": "2024-05-13",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747128,
    "officialDate": "2024-05-13",
    "road": "Cubs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745991,
    "officialDate": "2024-05-13",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745019,
    "officialDate": "2024-05-13",
    "road": "Guardians",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746393,
    "officialDate": "2024-05-13",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746233,
    "officialDate": "2024-05-13",
    "road": "Cardinals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747204,
    "officialDate": "2024-05-13",
    "road": "Reds",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745420,
    "officialDate": "2024-05-13",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745256,
    "officialDate": "2024-05-13",
    "road": "Royals",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745343,
    "officialDate": "2024-05-13",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746799,
    "officialDate": "2024-05-14",
    "road": "Nationals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745821,
    "officialDate": "2024-05-14",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746796,
    "officialDate": "2024-05-14",
    "road": "Nationals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746473,
    "officialDate": "2024-05-14",
    "road": "Marlins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746962,
    "officialDate": "2024-05-14",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747124,
    "officialDate": "2024-05-14",
    "road": "Cubs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745909,
    "officialDate": "2024-05-14",
    "road": "Yankees",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745989,
    "officialDate": "2024-05-14",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745014,
    "officialDate": "2024-05-14",
    "road": "Guardians",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746396,
    "officialDate": "2024-05-14",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746235,
    "officialDate": "2024-05-14",
    "road": "Cardinals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747205,
    "officialDate": "2024-05-14",
    "road": "Reds",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745418,
    "officialDate": "2024-05-14",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745257,
    "officialDate": "2024-05-14",
    "road": "Royals",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745342,
    "officialDate": "2024-05-14",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747039,
    "officialDate": "2024-07-29",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 747038,
    "officialDate": "2024-05-15",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746472,
    "officialDate": "2024-05-15",
    "road": "Marlins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745992,
    "officialDate": "2024-05-15",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746795,
    "officialDate": "2024-05-15",
    "road": "Nationals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747203,
    "officialDate": "2024-05-15",
    "road": "Reds",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745417,
    "officialDate": "2024-05-15",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745259,
    "officialDate": "2024-05-15",
    "road": "Royals",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745582,
    "officialDate": "2024-05-15",
    "road": "Mets",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746960,
    "officialDate": "2024-05-15",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747123,
    "officialDate": "2024-05-15",
    "road": "Cubs",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745908,
    "officialDate": "2024-05-15",
    "road": "Yankees",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745015,
    "officialDate": "2024-05-15",
    "road": "Guardians",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746397,
    "officialDate": "2024-05-15",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746231,
    "officialDate": "2024-05-15",
    "road": "Cardinals",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745341,
    "officialDate": "2024-05-15",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745907,
    "officialDate": "2024-05-16",
    "road": "Yankees",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745580,
    "officialDate": "2024-05-16",
    "road": "Mets",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746959,
    "officialDate": "2024-05-16",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746881,
    "officialDate": "2024-05-16",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746391,
    "officialDate": "2024-05-16",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746150,
    "officialDate": "2024-05-16",
    "road": "Reds",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746878,
    "officialDate": "2024-05-17",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745579,
    "officialDate": "2024-05-17",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747037,
    "officialDate": "2024-05-17",
    "road": "Mariners",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745747,
    "officialDate": "2024-05-17",
    "road": "White Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744934,
    "officialDate": "2024-05-17",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746641,
    "officialDate": "2024-05-17",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746065,
    "officialDate": "2024-05-17",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747122,
    "officialDate": "2024-05-17",
    "road": "Padres",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746310,
    "officialDate": "2024-05-17",
    "road": "Athletics",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745016,
    "officialDate": "2024-05-17",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746388,
    "officialDate": "2024-05-17",
    "road": "Brewers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745178,
    "officialDate": "2024-05-17",
    "road": "Red Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 747201,
    "officialDate": "2024-05-17",
    "road": "Tigers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746148,
    "officialDate": "2024-05-17",
    "road": "Reds",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745335,
    "officialDate": "2024-05-17",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745744,
    "officialDate": "2024-05-18",
    "road": "White Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746882,
    "officialDate": "2024-05-18",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744938,
    "officialDate": "2024-05-18",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747036,
    "officialDate": "2024-05-18",
    "road": "Mariners",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745339,
    "officialDate": "2024-05-18",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746067,
    "officialDate": "2024-05-18",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745581,
    "officialDate": "2024-05-18",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746642,
    "officialDate": "2024-05-18",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746308,
    "officialDate": "2024-05-18",
    "road": "Athletics",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746389,
    "officialDate": "2024-05-18",
    "road": "Brewers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745177,
    "officialDate": "2024-05-18",
    "road": "Red Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745013,
    "officialDate": "2024-05-18",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 747202,
    "officialDate": "2024-05-18",
    "road": "Tigers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746142,
    "officialDate": "2024-05-18",
    "road": "Reds",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747121,
    "officialDate": "2024-05-20",
    "road": "Padres",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745179,
    "officialDate": "2024-05-19",
    "road": "Red Sox",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 747035,
    "officialDate": "2024-05-19",
    "road": "Mariners",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745577,
    "officialDate": "2024-05-19",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745745,
    "officialDate": "2024-05-19",
    "road": "White Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744937,
    "officialDate": "2024-05-19",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746636,
    "officialDate": "2024-05-19",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746064,
    "officialDate": "2024-05-19",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746306,
    "officialDate": "2024-05-19",
    "road": "Athletics",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746392,
    "officialDate": "2024-05-19",
    "road": "Brewers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746880,
    "officialDate": "2024-05-19",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745012,
    "officialDate": "2024-05-19",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745336,
    "officialDate": "2024-05-19",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747198,
    "officialDate": "2024-05-19",
    "road": "Tigers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746144,
    "officialDate": "2024-05-19",
    "road": "Reds",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747120,
    "officialDate": "2024-05-19",
    "road": "Padres",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 747119,
    "officialDate": "2024-05-20",
    "road": "Padres",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744935,
    "officialDate": "2024-05-20",
    "road": "White Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746637,
    "officialDate": "2024-05-20",
    "road": "Mets",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746066,
    "officialDate": "2024-05-20",
    "road": "Brewers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744857,
    "officialDate": "2024-05-20",
    "road": "Twins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745093,
    "officialDate": "2024-05-20",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745746,
    "officialDate": "2024-05-20",
    "road": "Mariners",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746307,
    "officialDate": "2024-05-20",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745181,
    "officialDate": "2024-05-20",
    "road": "Orioles",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746390,
    "officialDate": "2024-05-20",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746146,
    "officialDate": "2024-05-20",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746633,
    "officialDate": "2024-05-21",
    "road": "Mets",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746716,
    "officialDate": "2024-05-21",
    "road": "Padres",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745503,
    "officialDate": "2024-05-21",
    "road": "Giants",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745578,
    "officialDate": "2024-05-21",
    "road": "Rangers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746058,
    "officialDate": "2024-05-21",
    "road": "Brewers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744860,
    "officialDate": "2024-05-21",
    "road": "Twins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745090,
    "officialDate": "2024-05-21",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745742,
    "officialDate": "2024-05-21",
    "road": "Mariners",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744936,
    "officialDate": "2024-05-21",
    "road": "White Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746309,
    "officialDate": "2024-05-21",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746875,
    "officialDate": "2024-05-21",
    "road": "Braves",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745180,
    "officialDate": "2024-05-21",
    "road": "Orioles",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746385,
    "officialDate": "2024-05-21",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745662,
    "officialDate": "2024-05-21",
    "road": "Rockies",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746145,
    "officialDate": "2024-05-21",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 744856,
    "officialDate": "2024-05-22",
    "road": "Twins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746634,
    "officialDate": "2024-05-22",
    "road": "Mets",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745173,
    "officialDate": "2024-05-22",
    "road": "Orioles",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746386,
    "officialDate": "2024-05-22",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746304,
    "officialDate": "2024-05-22",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746712,
    "officialDate": "2024-05-22",
    "road": "Padres",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745502,
    "officialDate": "2024-05-22",
    "road": "Giants",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745576,
    "officialDate": "2024-05-22",
    "road": "Rangers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746063,
    "officialDate": "2024-05-22",
    "road": "Brewers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745089,
    "officialDate": "2024-05-22",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745743,
    "officialDate": "2024-05-22",
    "road": "Mariners",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744933,
    "officialDate": "2024-05-22",
    "road": "White Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746876,
    "officialDate": "2024-05-22",
    "road": "Braves",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745661,
    "officialDate": "2024-05-22",
    "road": "Rockies",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746143,
    "officialDate": "2024-05-22",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745500,
    "officialDate": "2024-05-23",
    "road": "Giants",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745741,
    "officialDate": "2024-05-23",
    "road": "Mariners",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745573,
    "officialDate": "2024-05-23",
    "road": "Rangers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746714,
    "officialDate": "2024-05-23",
    "road": "Padres",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746874,
    "officialDate": "2024-05-23",
    "road": "Braves",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745660,
    "officialDate": "2024-05-23",
    "road": "Rockies",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746474,
    "officialDate": "2024-05-23",
    "road": "Blue Jays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746792,
    "officialDate": "2024-05-23",
    "road": "Orioles",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746475,
    "officialDate": "2024-05-24",
    "road": "Blue Jays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745501,
    "officialDate": "2024-05-24",
    "road": "Braves",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744853,
    "officialDate": "2024-05-24",
    "road": "Mariners",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745087,
    "officialDate": "2024-05-24",
    "road": "Royals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746713,
    "officialDate": "2024-05-24",
    "road": "Dodgers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745822,
    "officialDate": "2024-05-24",
    "road": "Giants",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745905,
    "officialDate": "2024-05-24",
    "road": "Rangers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746956,
    "officialDate": "2024-05-24",
    "road": "Brewers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746793,
    "officialDate": "2024-05-24",
    "road": "Orioles",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746558,
    "officialDate": "2024-05-24",
    "road": "Phillies",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746227,
    "officialDate": "2024-05-24",
    "road": "Guardians",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745663,
    "officialDate": "2024-05-24",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747200,
    "officialDate": "2024-05-24",
    "road": "Marlins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745415,
    "officialDate": "2024-05-24",
    "road": "Yankees",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745175,
    "officialDate": "2024-07-13",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746470,
    "officialDate": "2024-05-25",
    "road": "Blue Jays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745823,
    "officialDate": "2024-05-25",
    "road": "Giants",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745901,
    "officialDate": "2024-05-25",
    "road": "Rangers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746794,
    "officialDate": "2024-05-25",
    "road": "Orioles",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744851,
    "officialDate": "2024-05-25",
    "road": "Mariners",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745493,
    "officialDate": "2024-05-25",
    "road": "Braves",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745658,
    "officialDate": "2024-05-25",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745086,
    "officialDate": "2024-05-25",
    "road": "Royals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746958,
    "officialDate": "2024-05-25",
    "road": "Brewers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746710,
    "officialDate": "2024-05-25",
    "road": "Dodgers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745176,
    "officialDate": "2024-05-25",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746556,
    "officialDate": "2024-05-25",
    "road": "Phillies",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746226,
    "officialDate": "2024-05-25",
    "road": "Guardians",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745411,
    "officialDate": "2024-05-25",
    "road": "Yankees",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747199,
    "officialDate": "2024-05-25",
    "road": "Marlins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746469,
    "officialDate": "2024-05-26",
    "road": "Blue Jays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746711,
    "officialDate": "2024-05-26",
    "road": "Dodgers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744855,
    "officialDate": "2024-05-26",
    "road": "Mariners",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745498,
    "officialDate": "2024-05-26",
    "road": "Braves",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746957,
    "officialDate": "2024-05-26",
    "road": "Brewers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745824,
    "officialDate": "2024-05-26",
    "road": "Giants",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745088,
    "officialDate": "2024-05-26",
    "road": "Royals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745902,
    "officialDate": "2024-05-26",
    "road": "Rangers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746789,
    "officialDate": "2024-05-26",
    "road": "Orioles",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746557,
    "officialDate": "2024-05-26",
    "road": "Phillies",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746230,
    "officialDate": "2024-05-26",
    "road": "Guardians",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745653,
    "officialDate": "2024-05-26",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747197,
    "officialDate": "2024-05-26",
    "road": "Marlins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745413,
    "officialDate": "2024-05-26",
    "road": "Yankees",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745172,
    "officialDate": "2024-05-26",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 747034,
    "officialDate": "2024-05-27",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745904,
    "officialDate": "2024-05-27",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746788,
    "officialDate": "2024-05-27",
    "road": "Blue Jays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746549,
    "officialDate": "2024-05-27",
    "road": "Guardians",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746708,
    "officialDate": "2024-05-27",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 747118,
    "officialDate": "2024-05-27",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745986,
    "officialDate": "2024-05-27",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745338,
    "officialDate": "2024-05-27",
    "road": "Phillies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745416,
    "officialDate": "2024-05-27",
    "road": "Marlins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745254,
    "officialDate": "2024-05-27",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745816,
    "officialDate": "2024-05-28",
    "road": "Dodgers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745818,
    "officialDate": "2024-05-28",
    "road": "Dodgers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747033,
    "officialDate": "2024-05-28",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746709,
    "officialDate": "2024-05-28",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745091,
    "officialDate": "2024-05-28",
    "road": "Athletics",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747115,
    "officialDate": "2024-05-28",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745903,
    "officialDate": "2024-05-28",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746791,
    "officialDate": "2024-05-28",
    "road": "Blue Jays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745987,
    "officialDate": "2024-05-28",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745017,
    "officialDate": "2024-05-28",
    "road": "D-backs",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746552,
    "officialDate": "2024-05-28",
    "road": "Guardians",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746229,
    "officialDate": "2024-05-28",
    "road": "Yankees",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745258,
    "officialDate": "2024-05-28",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745412,
    "officialDate": "2024-05-28",
    "road": "Marlins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745337,
    "officialDate": "2024-05-28",
    "road": "Phillies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746468,
    "officialDate": "2024-05-29",
    "road": "Pirates",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746467,
    "officialDate": "2024-05-29",
    "road": "Pirates",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746706,
    "officialDate": "2024-05-29",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745011,
    "officialDate": "2024-05-29",
    "road": "D-backs",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745333,
    "officialDate": "2024-05-29",
    "road": "Phillies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745817,
    "officialDate": "2024-05-29",
    "road": "Dodgers",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745414,
    "officialDate": "2024-05-29",
    "road": "Marlins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747031,
    "officialDate": "2024-05-29",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745084,
    "officialDate": "2024-05-29",
    "road": "Athletics",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747117,
    "officialDate": "2024-05-29",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745900,
    "officialDate": "2024-05-29",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746790,
    "officialDate": "2024-05-29",
    "road": "Blue Jays",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745988,
    "officialDate": "2024-05-29",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746551,
    "officialDate": "2024-05-29",
    "road": "Guardians",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746228,
    "officialDate": "2024-05-29",
    "road": "Yankees",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745250,
    "officialDate": "2024-05-29",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745081,
    "officialDate": "2024-05-30",
    "road": "Athletics",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745898,
    "officialDate": "2024-05-30",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745985,
    "officialDate": "2024-05-30",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745249,
    "officialDate": "2024-05-30",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746954,
    "officialDate": "2024-05-30",
    "road": "Tigers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745819,
    "officialDate": "2024-05-30",
    "road": "D-backs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747114,
    "officialDate": "2024-05-30",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746225,
    "officialDate": "2024-05-30",
    "road": "Yankees",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746877,
    "officialDate": "2024-05-31",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745574,
    "officialDate": "2024-05-31",
    "road": "Cardinals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747032,
    "officialDate": "2024-05-31",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744928,
    "officialDate": "2024-05-31",
    "road": "Pirates",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746955,
    "officialDate": "2024-05-31",
    "road": "Tigers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746635,
    "officialDate": "2024-05-31",
    "road": "Nationals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745820,
    "officialDate": "2024-05-31",
    "road": "D-backs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746059,
    "officialDate": "2024-05-31",
    "road": "Rangers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747116,
    "officialDate": "2024-05-31",
    "road": "Athletics",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746303,
    "officialDate": "2024-05-31",
    "road": "Padres",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746387,
    "officialDate": "2024-05-31",
    "road": "Twins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745983,
    "officialDate": "2024-05-31",
    "road": "White Sox",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746140,
    "officialDate": "2024-05-31",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745253,
    "officialDate": "2024-05-31",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745331,
    "officialDate": "2024-05-31",
    "road": "Yankees",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744932,
    "officialDate": "2024-06-01",
    "road": "Pirates",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747029,
    "officialDate": "2024-06-01",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746952,
    "officialDate": "2024-06-01",
    "road": "Tigers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746629,
    "officialDate": "2024-06-01",
    "road": "Nationals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745812,
    "officialDate": "2024-06-01",
    "road": "D-backs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746305,
    "officialDate": "2024-06-01",
    "road": "Padres",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746384,
    "officialDate": "2024-06-01",
    "road": "Twins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747111,
    "officialDate": "2024-06-01",
    "road": "Athletics",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746062,
    "officialDate": "2024-06-01",
    "road": "Rangers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745980,
    "officialDate": "2024-06-01",
    "road": "White Sox",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746870,
    "officialDate": "2024-06-01",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745251,
    "officialDate": "2024-06-01",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745575,
    "officialDate": "2024-06-01",
    "road": "Cardinals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745332,
    "officialDate": "2024-06-01",
    "road": "Yankees",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746138,
    "officialDate": "2024-06-01",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746383,
    "officialDate": "2024-06-02",
    "road": "Twins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746953,
    "officialDate": "2024-06-02",
    "road": "Tigers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747030,
    "officialDate": "2024-06-02",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 747110,
    "officialDate": "2024-06-02",
    "road": "Athletics",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744929,
    "officialDate": "2024-06-02",
    "road": "Pirates",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746632,
    "officialDate": "2024-06-02",
    "road": "Nationals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745813,
    "officialDate": "2024-06-02",
    "road": "D-backs",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746061,
    "officialDate": "2024-06-02",
    "road": "Rangers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746301,
    "officialDate": "2024-06-02",
    "road": "Padres",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745984,
    "officialDate": "2024-06-02",
    "road": "White Sox",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746871,
    "officialDate": "2024-06-02",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745330,
    "officialDate": "2024-06-02",
    "road": "Yankees",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746141,
    "officialDate": "2024-06-02",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745252,
    "officialDate": "2024-06-02",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745572,
    "officialDate": "2024-06-02",
    "road": "Cardinals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745569,
    "officialDate": "2024-06-03",
    "road": "Brewers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744854,
    "officialDate": "2024-06-03",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 744930,
    "officialDate": "2024-06-03",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745009,
    "officialDate": "2024-06-03",
    "road": "Tigers",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746382,
    "officialDate": "2024-06-03",
    "road": "Cardinals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746548,
    "officialDate": "2024-06-03",
    "road": "Reds",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746224,
    "officialDate": "2024-06-03",
    "road": "Padres",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747194,
    "officialDate": "2024-06-03",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746630,
    "officialDate": "2024-06-04",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745497,
    "officialDate": "2024-06-04",
    "road": "Dodgers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746060,
    "officialDate": "2024-06-04",
    "road": "Rays",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745568,
    "officialDate": "2024-06-04",
    "road": "Brewers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744850,
    "officialDate": "2024-06-04",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745739,
    "officialDate": "2024-06-04",
    "road": "Twins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744931,
    "officialDate": "2024-06-04",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746949,
    "officialDate": "2024-06-04",
    "road": "Braves",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745010,
    "officialDate": "2024-06-04",
    "road": "Tigers",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746872,
    "officialDate": "2024-06-04",
    "road": "White Sox",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746380,
    "officialDate": "2024-06-04",
    "road": "Cardinals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746550,
    "officialDate": "2024-06-04",
    "road": "Reds",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746222,
    "officialDate": "2024-06-04",
    "road": "Padres",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745656,
    "officialDate": "2024-06-04",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747196,
    "officialDate": "2024-06-04",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746950,
    "officialDate": "2024-06-05",
    "road": "Braves",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746379,
    "officialDate": "2024-06-05",
    "road": "Cardinals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746544,
    "officialDate": "2024-06-05",
    "road": "Reds",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747195,
    "officialDate": "2024-06-05",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 744852,
    "officialDate": "2024-06-05",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745570,
    "officialDate": "2024-06-05",
    "road": "Brewers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745494,
    "officialDate": "2024-06-05",
    "road": "Dodgers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746056,
    "officialDate": "2024-06-05",
    "road": "Rays",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745740,
    "officialDate": "2024-06-05",
    "road": "Twins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744927,
    "officialDate": "2024-06-05",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745007,
    "officialDate": "2024-06-05",
    "road": "Tigers",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746873,
    "officialDate": "2024-06-05",
    "road": "White Sox",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746221,
    "officialDate": "2024-06-05",
    "road": "Padres",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745654,
    "officialDate": "2024-06-05",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746628,
    "officialDate": "2024-08-26",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 744923,
    "officialDate": "2024-06-06",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746631,
    "officialDate": "2024-06-06",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745657,
    "officialDate": "2024-06-06",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745495,
    "officialDate": "2024-06-06",
    "road": "Dodgers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744844,
    "officialDate": "2024-06-06",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745738,
    "officialDate": "2024-06-06",
    "road": "Twins",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746707,
    "officialDate": "2024-06-06",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745174,
    "officialDate": "2024-06-06",
    "road": "Rockies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746784,
    "officialDate": "2024-06-06",
    "road": "Red Sox",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745408,
    "officialDate": "2024-06-06",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745496,
    "officialDate": "2024-06-07",
    "road": "Twins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746466,
    "officialDate": "2024-06-07",
    "road": "Brewers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 744845,
    "officialDate": "2024-06-07",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745083,
    "officialDate": "2024-06-07",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745737,
    "officialDate": "2024-06-07",
    "road": "Dodgers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746704,
    "officialDate": "2024-06-07",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746053,
    "officialDate": "2024-06-07",
    "road": "Guardians",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745008,
    "officialDate": "2024-06-07",
    "road": "Giants",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746302,
    "officialDate": "2024-06-07",
    "road": "Mariners",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746785,
    "officialDate": "2024-06-07",
    "road": "Red Sox",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745169,
    "officialDate": "2024-06-07",
    "road": "Rockies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746220,
    "officialDate": "2024-06-07",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745406,
    "officialDate": "2024-06-07",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745655,
    "officialDate": "2024-06-07",
    "road": "Blue Jays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745814,
    "officialDate": "2024-06-08",
    "road": "Phillies",
    "home": "Mets",
    "venue": "London Stadium"
  },
  {
    "gamePk": 745001,
    "officialDate": "2024-06-08",
    "road": "Giants",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745492,
    "officialDate": "2024-06-08",
    "road": "Twins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744848,
    "officialDate": "2024-06-08",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745652,
    "officialDate": "2024-06-08",
    "road": "Blue Jays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746703,
    "officialDate": "2024-06-08",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746300,
    "officialDate": "2024-06-08",
    "road": "Mariners",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745082,
    "officialDate": "2024-06-08",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746786,
    "officialDate": "2024-06-08",
    "road": "Red Sox",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746461,
    "officialDate": "2024-06-08",
    "road": "Brewers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745166,
    "officialDate": "2024-06-08",
    "road": "Rockies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746057,
    "officialDate": "2024-06-08",
    "road": "Guardians",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745735,
    "officialDate": "2024-06-08",
    "road": "Dodgers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745410,
    "officialDate": "2024-06-08",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746223,
    "officialDate": "2024-06-08",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745571,
    "officialDate": "2024-06-09",
    "road": "Mets",
    "home": "Phillies",
    "venue": "London Stadium"
  },
  {
    "gamePk": 745003,
    "officialDate": "2024-06-09",
    "road": "Giants",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745491,
    "officialDate": "2024-06-09",
    "road": "Twins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744849,
    "officialDate": "2024-06-09",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746705,
    "officialDate": "2024-06-09",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745085,
    "officialDate": "2024-06-09",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746054,
    "officialDate": "2024-06-09",
    "road": "Guardians",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746463,
    "officialDate": "2024-06-09",
    "road": "Brewers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746297,
    "officialDate": "2024-06-09",
    "road": "Mariners",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746787,
    "officialDate": "2024-06-09",
    "road": "Red Sox",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745167,
    "officialDate": "2024-06-09",
    "road": "Rockies",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746216,
    "officialDate": "2024-06-09",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745651,
    "officialDate": "2024-06-09",
    "road": "Blue Jays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745407,
    "officialDate": "2024-06-09",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745736,
    "officialDate": "2024-06-09",
    "road": "Dodgers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745080,
    "officialDate": "2024-06-10",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745897,
    "officialDate": "2024-06-10",
    "road": "Rockies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746295,
    "officialDate": "2024-06-10",
    "road": "Yankees",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745982,
    "officialDate": "2024-06-10",
    "road": "Blue Jays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745409,
    "officialDate": "2024-06-10",
    "road": "Athletics",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745248,
    "officialDate": "2024-06-10",
    "road": "White Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745334,
    "officialDate": "2024-06-10",
    "road": "Astros",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747027,
    "officialDate": "2024-06-11",
    "road": "Braves",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746464,
    "officialDate": "2024-06-11",
    "road": "Nationals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745077,
    "officialDate": "2024-06-11",
    "road": "Cubs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746702,
    "officialDate": "2024-06-11",
    "road": "Guardians",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746951,
    "officialDate": "2024-06-11",
    "road": "Phillies",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745815,
    "officialDate": "2024-06-11",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745899,
    "officialDate": "2024-06-11",
    "road": "Rockies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745170,
    "officialDate": "2024-06-11",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746296,
    "officialDate": "2024-06-11",
    "road": "Yankees",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745981,
    "officialDate": "2024-06-11",
    "road": "Blue Jays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747190,
    "officialDate": "2024-06-11",
    "road": "Angels",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745404,
    "officialDate": "2024-06-11",
    "road": "Athletics",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745244,
    "officialDate": "2024-06-11",
    "road": "White Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745327,
    "officialDate": "2024-06-11",
    "road": "Astros",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746139,
    "officialDate": "2024-06-11",
    "road": "Rangers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745896,
    "officialDate": "2024-06-12",
    "road": "Rockies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745978,
    "officialDate": "2024-06-12",
    "road": "Blue Jays",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745328,
    "officialDate": "2024-06-12",
    "road": "Astros",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745405,
    "officialDate": "2024-06-12",
    "road": "Athletics",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747028,
    "officialDate": "2024-06-12",
    "road": "Braves",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746462,
    "officialDate": "2024-06-12",
    "road": "Nationals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745079,
    "officialDate": "2024-06-12",
    "road": "Cubs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746701,
    "officialDate": "2024-06-12",
    "road": "Guardians",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746948,
    "officialDate": "2024-06-12",
    "road": "Phillies",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745811,
    "officialDate": "2024-06-12",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745171,
    "officialDate": "2024-06-12",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746294,
    "officialDate": "2024-06-12",
    "road": "Yankees",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 747193,
    "officialDate": "2024-06-12",
    "road": "Angels",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745246,
    "officialDate": "2024-06-12",
    "road": "White Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746137,
    "officialDate": "2024-06-12",
    "road": "Rangers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747026,
    "officialDate": "2024-06-13",
    "road": "Braves",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746465,
    "officialDate": "2024-06-13",
    "road": "Nationals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746299,
    "officialDate": "2024-06-13",
    "road": "Yankees",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745168,
    "officialDate": "2024-06-13",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745075,
    "officialDate": "2024-06-13",
    "road": "Cubs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746944,
    "officialDate": "2024-06-13",
    "road": "Phillies",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745809,
    "officialDate": "2024-06-13",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745894,
    "officialDate": "2024-06-13",
    "road": "Athletics",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 747192,
    "officialDate": "2024-06-13",
    "road": "Angels",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745245,
    "officialDate": "2024-06-13",
    "road": "White Sox",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746136,
    "officialDate": "2024-06-13",
    "road": "Rangers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746869,
    "officialDate": "2024-06-14",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746947,
    "officialDate": "2024-06-14",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 744847,
    "officialDate": "2024-06-14",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 747025,
    "officialDate": "2024-06-14",
    "road": "Phillies",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744924,
    "officialDate": "2024-06-14",
    "road": "Guardians",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745810,
    "officialDate": "2024-06-14",
    "road": "Padres",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747112,
    "officialDate": "2024-06-14",
    "road": "Rays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746378,
    "officialDate": "2024-06-14",
    "road": "Tigers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745892,
    "officialDate": "2024-06-14",
    "road": "Athletics",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745979,
    "officialDate": "2024-06-14",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746545,
    "officialDate": "2024-06-14",
    "road": "Pirates",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747191,
    "officialDate": "2024-06-14",
    "road": "White Sox",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746134,
    "officialDate": "2024-06-14",
    "road": "Royals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745247,
    "officialDate": "2024-06-14",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745326,
    "officialDate": "2024-06-14",
    "road": "Angels",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746865,
    "officialDate": "2024-06-15",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744925,
    "officialDate": "2024-06-15",
    "road": "Guardians",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745329,
    "officialDate": "2024-06-15",
    "road": "Angels",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747024,
    "officialDate": "2024-06-15",
    "road": "Phillies",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744846,
    "officialDate": "2024-06-15",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746381,
    "officialDate": "2024-06-15",
    "road": "Tigers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745805,
    "officialDate": "2024-06-15",
    "road": "Padres",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747113,
    "officialDate": "2024-06-15",
    "road": "Rays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745976,
    "officialDate": "2024-06-15",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745241,
    "officialDate": "2024-06-15",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746946,
    "officialDate": "2024-06-15",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746135,
    "officialDate": "2024-06-15",
    "road": "Royals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746547,
    "officialDate": "2024-06-15",
    "road": "Pirates",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747187,
    "officialDate": "2024-06-15",
    "road": "White Sox",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745891,
    "officialDate": "2024-06-16",
    "road": "Athletics",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746866,
    "officialDate": "2024-06-16",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 747023,
    "officialDate": "2024-06-16",
    "road": "Phillies",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 747109,
    "officialDate": "2024-06-16",
    "road": "Rays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744839,
    "officialDate": "2024-06-16",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 744926,
    "officialDate": "2024-06-16",
    "road": "Guardians",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745807,
    "officialDate": "2024-06-16",
    "road": "Padres",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746377,
    "officialDate": "2024-06-16",
    "road": "Tigers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745895,
    "officialDate": "2024-06-16",
    "road": "Athletics",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745977,
    "officialDate": "2024-06-16",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746546,
    "officialDate": "2024-06-16",
    "road": "Pirates",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745321,
    "officialDate": "2024-06-16",
    "road": "Angels",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746130,
    "officialDate": "2024-06-16",
    "road": "Royals",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745242,
    "officialDate": "2024-06-16",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747189,
    "officialDate": "2024-06-16",
    "road": "White Sox",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746945,
    "officialDate": "2024-06-16",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745490,
    "officialDate": "2024-06-17",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745567,
    "officialDate": "2024-06-17",
    "road": "Padres",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746055,
    "officialDate": "2024-06-17",
    "road": "Cardinals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744918,
    "officialDate": "2024-06-17",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747108,
    "officialDate": "2024-06-17",
    "road": "Tigers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746868,
    "officialDate": "2024-06-17",
    "road": "Giants",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745005,
    "officialDate": "2024-06-17",
    "road": "Mets",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746543,
    "officialDate": "2024-06-17",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746215,
    "officialDate": "2024-06-17",
    "road": "Brewers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746049,
    "officialDate": "2024-06-18",
    "road": "Cardinals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745488,
    "officialDate": "2024-06-18",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746627,
    "officialDate": "2024-06-18",
    "road": "Mariners",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745563,
    "officialDate": "2024-06-18",
    "road": "Padres",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744843,
    "officialDate": "2024-06-18",
    "road": "D-backs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745733,
    "officialDate": "2024-06-18",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744917,
    "officialDate": "2024-06-18",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747107,
    "officialDate": "2024-06-18",
    "road": "Tigers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745893,
    "officialDate": "2024-06-18",
    "road": "Rays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746867,
    "officialDate": "2024-06-18",
    "road": "Giants",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745004,
    "officialDate": "2024-06-18",
    "road": "Mets",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746783,
    "officialDate": "2024-06-18",
    "road": "Astros",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746542,
    "officialDate": "2024-06-18",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746217,
    "officialDate": "2024-06-18",
    "road": "Brewers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745650,
    "officialDate": "2024-06-18",
    "road": "Royals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 747106,
    "officialDate": "2024-06-19",
    "road": "Tigers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745489,
    "officialDate": "2024-06-19",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746050,
    "officialDate": "2024-06-19",
    "road": "Cardinals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745561,
    "officialDate": "2024-06-19",
    "road": "Padres",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746864,
    "officialDate": "2024-06-19",
    "road": "Giants",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744842,
    "officialDate": "2024-06-19",
    "road": "D-backs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746625,
    "officialDate": "2024-06-19",
    "road": "Mariners",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745732,
    "officialDate": "2024-06-19",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744920,
    "officialDate": "2024-06-19",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745887,
    "officialDate": "2024-06-19",
    "road": "Rays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745002,
    "officialDate": "2024-06-19",
    "road": "Mets",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746781,
    "officialDate": "2024-06-19",
    "road": "Astros",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746538,
    "officialDate": "2024-06-19",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746219,
    "officialDate": "2024-06-19",
    "road": "Brewers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745646,
    "officialDate": "2024-06-19",
    "road": "Royals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 744841,
    "officialDate": "2024-06-20",
    "road": "D-backs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746626,
    "officialDate": "2024-06-20",
    "road": "Mariners",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745889,
    "officialDate": "2024-06-20",
    "road": "Rays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746782,
    "officialDate": "2024-06-20",
    "road": "Astros",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746539,
    "officialDate": "2024-06-20",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745645,
    "officialDate": "2024-06-20",
    "road": "Royals",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745734,
    "officialDate": "2024-06-20",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745164,
    "officialDate": "2024-06-20",
    "road": "Giants",
    "home": "Cardinals",
    "venue": "Rickwood Field"
  },
  {
    "gamePk": 745401,
    "officialDate": "2024-06-20",
    "road": "Brewers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746861,
    "officialDate": "2024-06-21",
    "road": "Mets",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745483,
    "officialDate": "2024-06-21",
    "road": "Rays",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745562,
    "officialDate": "2024-06-21",
    "road": "D-backs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746460,
    "officialDate": "2024-06-21",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745729,
    "officialDate": "2024-06-21",
    "road": "Braves",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746698,
    "officialDate": "2024-06-21",
    "road": "Red Sox",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746624,
    "officialDate": "2024-06-21",
    "road": "Blue Jays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746052,
    "officialDate": "2024-06-21",
    "road": "Mariners",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745006,
    "officialDate": "2024-06-21",
    "road": "Royals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746375,
    "officialDate": "2024-06-21",
    "road": "Orioles",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746540,
    "officialDate": "2024-06-21",
    "road": "Nationals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745649,
    "officialDate": "2024-06-21",
    "road": "Twins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745403,
    "officialDate": "2024-06-21",
    "road": "Brewers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746131,
    "officialDate": "2024-06-21",
    "road": "Angels",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746459,
    "officialDate": "2024-06-22",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745163,
    "officialDate": "2024-06-22",
    "road": "Giants",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746863,
    "officialDate": "2024-06-22",
    "road": "Mets",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745486,
    "officialDate": "2024-06-22",
    "road": "Rays",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744997,
    "officialDate": "2024-06-22",
    "road": "Royals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745564,
    "officialDate": "2024-06-22",
    "road": "D-backs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745644,
    "officialDate": "2024-06-22",
    "road": "Twins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746700,
    "officialDate": "2024-06-22",
    "road": "Red Sox",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746376,
    "officialDate": "2024-06-22",
    "road": "Orioles",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746622,
    "officialDate": "2024-06-22",
    "road": "Blue Jays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746048,
    "officialDate": "2024-06-22",
    "road": "Mariners",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745731,
    "officialDate": "2024-06-22",
    "road": "Braves",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745402,
    "officialDate": "2024-06-22",
    "road": "Brewers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746541,
    "officialDate": "2024-06-22",
    "road": "Nationals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746132,
    "officialDate": "2024-06-22",
    "road": "Angels",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745566,
    "officialDate": "2024-06-23",
    "road": "D-backs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745485,
    "officialDate": "2024-06-23",
    "road": "Rays",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745727,
    "officialDate": "2024-06-23",
    "road": "Braves",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746699,
    "officialDate": "2024-06-23",
    "road": "Red Sox",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746621,
    "officialDate": "2024-06-23",
    "road": "Blue Jays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746457,
    "officialDate": "2024-06-23",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746051,
    "officialDate": "2024-06-23",
    "road": "Mariners",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746373,
    "officialDate": "2024-06-23",
    "road": "Orioles",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745165,
    "officialDate": "2024-06-23",
    "road": "Giants",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745000,
    "officialDate": "2024-06-23",
    "road": "Royals",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746536,
    "officialDate": "2024-06-23",
    "road": "Nationals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745648,
    "officialDate": "2024-06-23",
    "road": "Twins",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745396,
    "officialDate": "2024-06-23",
    "road": "Brewers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746862,
    "officialDate": "2024-06-23",
    "road": "Mets",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 747021,
    "officialDate": "2024-06-24",
    "road": "Guardians",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746458,
    "officialDate": "2024-06-24",
    "road": "Phillies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745078,
    "officialDate": "2024-06-24",
    "road": "Mariners",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746696,
    "officialDate": "2024-06-24",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746941,
    "officialDate": "2024-06-24",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745160,
    "officialDate": "2024-06-24",
    "road": "Braves",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746780,
    "officialDate": "2024-06-24",
    "road": "Dodgers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746298,
    "officialDate": "2024-06-24",
    "road": "Marlins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745974,
    "officialDate": "2024-06-24",
    "road": "Rangers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746218,
    "officialDate": "2024-06-24",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745397,
    "officialDate": "2024-06-24",
    "road": "Nationals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745323,
    "officialDate": "2024-06-24",
    "road": "Cubs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747022,
    "officialDate": "2024-06-25",
    "road": "Guardians",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746454,
    "officialDate": "2024-06-25",
    "road": "Phillies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745076,
    "officialDate": "2024-06-25",
    "road": "Mariners",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746697,
    "officialDate": "2024-06-25",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746943,
    "officialDate": "2024-06-25",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745806,
    "officialDate": "2024-06-25",
    "road": "Yankees",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746372,
    "officialDate": "2024-06-25",
    "road": "Rockies",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746775,
    "officialDate": "2024-06-25",
    "road": "Dodgers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746293,
    "officialDate": "2024-06-25",
    "road": "Marlins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745973,
    "officialDate": "2024-06-25",
    "road": "Rangers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746213,
    "officialDate": "2024-06-25",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745399,
    "officialDate": "2024-06-25",
    "road": "Nationals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747188,
    "officialDate": "2024-06-25",
    "road": "Twins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745322,
    "officialDate": "2024-06-25",
    "road": "Cubs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745157,
    "officialDate": "2024-06-26",
    "road": "Braves",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745073,
    "officialDate": "2024-06-26",
    "road": "Mariners",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746695,
    "officialDate": "2024-06-26",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746456,
    "officialDate": "2024-06-26",
    "road": "Phillies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745158,
    "officialDate": "2024-06-26",
    "road": "Braves",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746374,
    "officialDate": "2024-06-26",
    "road": "Rockies",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746291,
    "officialDate": "2024-06-26",
    "road": "Marlins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745975,
    "officialDate": "2024-06-26",
    "road": "Rangers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746212,
    "officialDate": "2024-06-26",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745400,
    "officialDate": "2024-06-26",
    "road": "Nationals",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747019,
    "officialDate": "2024-06-26",
    "road": "Guardians",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746942,
    "officialDate": "2024-06-26",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745808,
    "officialDate": "2024-06-26",
    "road": "Yankees",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746777,
    "officialDate": "2024-06-26",
    "road": "Dodgers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747184,
    "officialDate": "2024-06-26",
    "road": "Twins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745325,
    "officialDate": "2024-06-26",
    "road": "Cubs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747185,
    "officialDate": "2024-06-27",
    "road": "Twins",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745324,
    "officialDate": "2024-06-27",
    "road": "Cubs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745565,
    "officialDate": "2024-06-27",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747020,
    "officialDate": "2024-06-27",
    "road": "Rangers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744919,
    "officialDate": "2024-06-27",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745162,
    "officialDate": "2024-06-27",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746288,
    "officialDate": "2024-06-27",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746210,
    "officialDate": "2024-06-27",
    "road": "Tigers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745560,
    "officialDate": "2024-06-28",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745070,
    "officialDate": "2024-06-28",
    "road": "Nationals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747017,
    "officialDate": "2024-06-28",
    "road": "Rangers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744922,
    "officialDate": "2024-06-28",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745804,
    "officialDate": "2024-06-28",
    "road": "Astros",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746939,
    "officialDate": "2024-06-28",
    "road": "Padres",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746776,
    "officialDate": "2024-06-28",
    "road": "Rockies",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747105,
    "officialDate": "2024-06-28",
    "road": "Pirates",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746292,
    "officialDate": "2024-06-28",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745970,
    "officialDate": "2024-06-28",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745161,
    "officialDate": "2024-06-28",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746214,
    "officialDate": "2024-06-28",
    "road": "Tigers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747183,
    "officialDate": "2024-06-28",
    "road": "Athletics",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745238,
    "officialDate": "2024-06-28",
    "road": "Twins",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745319,
    "officialDate": "2024-06-28",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746778,
    "officialDate": "2024-06-29",
    "road": "Rockies",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745159,
    "officialDate": "2024-06-29",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 744921,
    "officialDate": "2024-06-29",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745559,
    "officialDate": "2024-06-29",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746289,
    "officialDate": "2024-06-29",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745801,
    "officialDate": "2024-06-29",
    "road": "Astros",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747186,
    "officialDate": "2024-06-29",
    "road": "Athletics",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746940,
    "officialDate": "2024-06-29",
    "road": "Padres",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745071,
    "officialDate": "2024-06-29",
    "road": "Nationals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747104,
    "officialDate": "2024-06-29",
    "road": "Pirates",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745972,
    "officialDate": "2024-06-29",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745317,
    "officialDate": "2024-06-29",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747018,
    "officialDate": "2024-06-29",
    "road": "Rangers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746211,
    "officialDate": "2024-06-29",
    "road": "Tigers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745239,
    "officialDate": "2024-06-29",
    "road": "Twins",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747101,
    "officialDate": "2024-06-30",
    "road": "Pirates",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746938,
    "officialDate": "2024-06-30",
    "road": "Padres",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745555,
    "officialDate": "2024-06-30",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744916,
    "officialDate": "2024-06-30",
    "road": "Yankees",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745802,
    "officialDate": "2024-06-30",
    "road": "Astros",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745072,
    "officialDate": "2024-06-30",
    "road": "Nationals",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746290,
    "officialDate": "2024-06-30",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746779,
    "officialDate": "2024-06-30",
    "road": "Rockies",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745971,
    "officialDate": "2024-06-30",
    "road": "Cubs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745154,
    "officialDate": "2024-06-30",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745320,
    "officialDate": "2024-06-30",
    "road": "Dodgers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746209,
    "officialDate": "2024-06-30",
    "road": "Tigers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747182,
    "officialDate": "2024-06-30",
    "road": "Athletics",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745243,
    "officialDate": "2024-06-30",
    "road": "Twins",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747016,
    "officialDate": "2024-06-30",
    "road": "Rangers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744914,
    "officialDate": "2024-07-01",
    "road": "Astros",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 744840,
    "officialDate": "2024-07-01",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746535,
    "officialDate": "2024-07-01",
    "road": "Brewers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745482,
    "officialDate": "2024-07-02",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746623,
    "officialDate": "2024-07-02",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746047,
    "officialDate": "2024-07-02",
    "road": "Red Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744838,
    "officialDate": "2024-07-02",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745730,
    "officialDate": "2024-07-02",
    "road": "Reds",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744913,
    "officialDate": "2024-07-02",
    "road": "Astros",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747102,
    "officialDate": "2024-07-02",
    "road": "Giants",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745886,
    "officialDate": "2024-07-02",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744999,
    "officialDate": "2024-07-02",
    "road": "Padres",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746860,
    "officialDate": "2024-07-02",
    "road": "Phillies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746282,
    "officialDate": "2024-07-02",
    "road": "Rays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746537,
    "officialDate": "2024-07-02",
    "road": "Brewers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745647,
    "officialDate": "2024-07-02",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745240,
    "officialDate": "2024-07-02",
    "road": "Orioles",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746133,
    "officialDate": "2024-07-02",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745487,
    "officialDate": "2024-07-03",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746617,
    "officialDate": "2024-07-03",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746045,
    "officialDate": "2024-07-03",
    "road": "Red Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744837,
    "officialDate": "2024-07-03",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745728,
    "officialDate": "2024-07-03",
    "road": "Reds",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744915,
    "officialDate": "2024-07-03",
    "road": "Astros",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747100,
    "officialDate": "2024-07-03",
    "road": "Giants",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744998,
    "officialDate": "2024-07-03",
    "road": "Padres",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746858,
    "officialDate": "2024-07-03",
    "road": "Phillies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746283,
    "officialDate": "2024-07-03",
    "road": "Rays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745888,
    "officialDate": "2024-07-03",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746534,
    "officialDate": "2024-07-03",
    "road": "Brewers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745643,
    "officialDate": "2024-07-03",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746128,
    "officialDate": "2024-07-03",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745234,
    "officialDate": "2024-07-03",
    "road": "Orioles",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 744834,
    "officialDate": "2024-07-04",
    "road": "Mets",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745484,
    "officialDate": "2024-07-04",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745726,
    "officialDate": "2024-07-04",
    "road": "Reds",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744912,
    "officialDate": "2024-07-04",
    "road": "Astros",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745890,
    "officialDate": "2024-07-04",
    "road": "Tigers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746619,
    "officialDate": "2024-07-04",
    "road": "White Sox",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746043,
    "officialDate": "2024-07-04",
    "road": "Red Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746857,
    "officialDate": "2024-07-04",
    "road": "Phillies",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744996,
    "officialDate": "2024-07-04",
    "road": "Padres",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745641,
    "officialDate": "2024-07-04",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745236,
    "officialDate": "2024-07-04",
    "road": "Orioles",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747103,
    "officialDate": "2024-07-04",
    "road": "Giants",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746285,
    "officialDate": "2024-07-04",
    "road": "Rays",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746532,
    "officialDate": "2024-07-04",
    "road": "Brewers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746126,
    "officialDate": "2024-07-04",
    "road": "D-backs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746859,
    "officialDate": "2024-07-05",
    "road": "Angels",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745479,
    "officialDate": "2024-07-05",
    "road": "Mets",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744836,
    "officialDate": "2024-07-05",
    "road": "Cardinals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745725,
    "officialDate": "2024-07-05",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746693,
    "officialDate": "2024-07-05",
    "road": "Tigers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746620,
    "officialDate": "2024-07-05",
    "road": "Giants",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746046,
    "officialDate": "2024-07-05",
    "road": "White Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747097,
    "officialDate": "2024-07-05",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744992,
    "officialDate": "2024-07-05",
    "road": "Rays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746533,
    "officialDate": "2024-07-05",
    "road": "Royals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745884,
    "officialDate": "2024-07-05",
    "road": "Astros",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745639,
    "officialDate": "2024-07-05",
    "road": "Orioles",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745398,
    "officialDate": "2024-07-05",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745237,
    "officialDate": "2024-07-05",
    "road": "Blue Jays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746127,
    "officialDate": "2024-07-05",
    "road": "Brewers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745724,
    "officialDate": "2024-07-06",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745885,
    "officialDate": "2024-07-06",
    "road": "Astros",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746856,
    "officialDate": "2024-07-06",
    "road": "Angels",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745476,
    "officialDate": "2024-07-06",
    "road": "Mets",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744835,
    "officialDate": "2024-07-06",
    "road": "Cardinals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 744995,
    "officialDate": "2024-07-06",
    "road": "Rays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745642,
    "officialDate": "2024-07-06",
    "road": "Orioles",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746694,
    "officialDate": "2024-07-06",
    "road": "Tigers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746615,
    "officialDate": "2024-07-06",
    "road": "Giants",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745235,
    "officialDate": "2024-07-06",
    "road": "Blue Jays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746044,
    "officialDate": "2024-07-06",
    "road": "White Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747099,
    "officialDate": "2024-07-06",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746129,
    "officialDate": "2024-07-06",
    "road": "Brewers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746529,
    "officialDate": "2024-07-06",
    "road": "Royals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745395,
    "officialDate": "2024-07-06",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745477,
    "officialDate": "2024-07-07",
    "road": "Mets",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744832,
    "officialDate": "2024-07-07",
    "road": "Cardinals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 747098,
    "officialDate": "2024-07-07",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746691,
    "officialDate": "2024-07-07",
    "road": "Tigers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746616,
    "officialDate": "2024-07-07",
    "road": "Giants",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746039,
    "officialDate": "2024-07-07",
    "road": "White Sox",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745883,
    "officialDate": "2024-07-07",
    "road": "Astros",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746855,
    "officialDate": "2024-07-07",
    "road": "Angels",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744993,
    "officialDate": "2024-07-07",
    "road": "Rays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746530,
    "officialDate": "2024-07-07",
    "road": "Royals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745637,
    "officialDate": "2024-07-07",
    "road": "Orioles",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745391,
    "officialDate": "2024-07-07",
    "road": "D-backs",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745233,
    "officialDate": "2024-07-07",
    "road": "Blue Jays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746122,
    "officialDate": "2024-07-07",
    "road": "Brewers",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745723,
    "officialDate": "2024-07-07",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745480,
    "officialDate": "2024-07-08",
    "road": "Mets",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744833,
    "officialDate": "2024-07-08",
    "road": "Cardinals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746455,
    "officialDate": "2024-07-08",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746692,
    "officialDate": "2024-07-08",
    "road": "Rockies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746771,
    "officialDate": "2024-07-08",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746208,
    "officialDate": "2024-07-08",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747181,
    "officialDate": "2024-07-08",
    "road": "Braves",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 747014,
    "officialDate": "2024-07-09",
    "road": "Cubs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746451,
    "officialDate": "2024-07-09",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745557,
    "officialDate": "2024-07-09",
    "road": "Dodgers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745074,
    "officialDate": "2024-07-09",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746690,
    "officialDate": "2024-07-09",
    "road": "Rockies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745803,
    "officialDate": "2024-07-09",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746937,
    "officialDate": "2024-07-09",
    "road": "Athletics",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746368,
    "officialDate": "2024-07-09",
    "road": "Marlins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745968,
    "officialDate": "2024-07-09",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746206,
    "officialDate": "2024-07-09",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745393,
    "officialDate": "2024-07-09",
    "road": "Mariners",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 747180,
    "officialDate": "2024-07-09",
    "road": "Braves",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745316,
    "officialDate": "2024-07-09",
    "road": "Blue Jays",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745155,
    "officialDate": "2024-07-10",
    "road": "Royals",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746773,
    "officialDate": "2024-07-10",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745156,
    "officialDate": "2024-07-10",
    "road": "Royals",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746772,
    "officialDate": "2024-07-10",
    "road": "Twins",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747015,
    "officialDate": "2024-07-10",
    "road": "Cubs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746453,
    "officialDate": "2024-07-10",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745394,
    "officialDate": "2024-07-10",
    "road": "Mariners",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745069,
    "officialDate": "2024-07-10",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745556,
    "officialDate": "2024-07-10",
    "road": "Dodgers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746689,
    "officialDate": "2024-07-10",
    "road": "Rockies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745796,
    "officialDate": "2024-07-10",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746934,
    "officialDate": "2024-07-10",
    "road": "Athletics",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746366,
    "officialDate": "2024-07-10",
    "road": "Marlins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745969,
    "officialDate": "2024-07-10",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746205,
    "officialDate": "2024-07-10",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747179,
    "officialDate": "2024-07-10",
    "road": "Braves",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745318,
    "officialDate": "2024-07-10",
    "road": "Blue Jays",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746688,
    "officialDate": "2024-07-11",
    "road": "Rockies",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746452,
    "officialDate": "2024-07-11",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745799,
    "officialDate": "2024-07-11",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745967,
    "officialDate": "2024-07-11",
    "road": "Pirates",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745313,
    "officialDate": "2024-07-11",
    "road": "Blue Jays",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745558,
    "officialDate": "2024-07-11",
    "road": "Dodgers",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747011,
    "officialDate": "2024-07-11",
    "road": "Cubs",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745065,
    "officialDate": "2024-07-11",
    "road": "Yankees",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746935,
    "officialDate": "2024-07-11",
    "road": "Athletics",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746367,
    "officialDate": "2024-07-11",
    "road": "Marlins",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746204,
    "officialDate": "2024-07-11",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747178,
    "officialDate": "2024-07-11",
    "road": "Braves",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746450,
    "officialDate": "2024-07-12",
    "road": "Dodgers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745552,
    "officialDate": "2024-07-12",
    "road": "Athletics",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745064,
    "officialDate": "2024-07-12",
    "road": "Guardians",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747012,
    "officialDate": "2024-07-12",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746936,
    "officialDate": "2024-07-12",
    "road": "Royals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745800,
    "officialDate": "2024-07-12",
    "road": "Rockies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746685,
    "officialDate": "2024-07-12",
    "road": "Marlins",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746371,
    "officialDate": "2024-07-12",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746774,
    "officialDate": "2024-07-12",
    "road": "Pirates",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745965,
    "officialDate": "2024-07-12",
    "road": "Nationals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745153,
    "officialDate": "2024-07-12",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746207,
    "officialDate": "2024-07-12",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747175,
    "officialDate": "2024-07-12",
    "road": "Blue Jays",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745390,
    "officialDate": "2024-07-12",
    "road": "Braves",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745312,
    "officialDate": "2024-07-12",
    "road": "Twins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746447,
    "officialDate": "2024-07-13",
    "road": "Dodgers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746766,
    "officialDate": "2024-07-13",
    "road": "Pirates",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745152,
    "officialDate": "2024-07-13",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745549,
    "officialDate": "2024-07-13",
    "road": "Athletics",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747013,
    "officialDate": "2024-07-13",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746930,
    "officialDate": "2024-07-13",
    "road": "Royals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745798,
    "officialDate": "2024-07-13",
    "road": "Rockies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745067,
    "officialDate": "2024-07-13",
    "road": "Guardians",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746369,
    "officialDate": "2024-07-13",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746687,
    "officialDate": "2024-07-13",
    "road": "Marlins",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745963,
    "officialDate": "2024-07-13",
    "road": "Nationals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745311,
    "officialDate": "2024-07-13",
    "road": "Twins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745392,
    "officialDate": "2024-07-13",
    "road": "Braves",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746202,
    "officialDate": "2024-07-13",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747177,
    "officialDate": "2024-07-13",
    "road": "Blue Jays",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 747009,
    "officialDate": "2024-07-14",
    "road": "Yankees",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746932,
    "officialDate": "2024-07-14",
    "road": "Royals",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745551,
    "officialDate": "2024-07-14",
    "road": "Athletics",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746449,
    "officialDate": "2024-07-14",
    "road": "Dodgers",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745797,
    "officialDate": "2024-07-14",
    "road": "Rockies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745066,
    "officialDate": "2024-07-14",
    "road": "Guardians",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746686,
    "officialDate": "2024-07-14",
    "road": "Marlins",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746370,
    "officialDate": "2024-07-14",
    "road": "Rangers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746769,
    "officialDate": "2024-07-14",
    "road": "Pirates",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745962,
    "officialDate": "2024-07-14",
    "road": "Nationals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745151,
    "officialDate": "2024-07-14",
    "road": "Cubs",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745314,
    "officialDate": "2024-07-14",
    "road": "Twins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746201,
    "officialDate": "2024-07-14",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747176,
    "officialDate": "2024-07-14",
    "road": "Blue Jays",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745385,
    "officialDate": "2024-07-14",
    "road": "Braves",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746854,
    "officialDate": "2024-07-19",
    "road": "D-backs",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745481,
    "officialDate": "2024-07-19",
    "road": "Phillies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744829,
    "officialDate": "2024-07-19",
    "road": "Reds",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745721,
    "officialDate": "2024-07-19",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744911,
    "officialDate": "2024-07-19",
    "road": "Tigers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746618,
    "officialDate": "2024-07-19",
    "road": "Padres",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746040,
    "officialDate": "2024-07-19",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744990,
    "officialDate": "2024-07-19",
    "road": "Orioles",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746284,
    "officialDate": "2024-07-19",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746531,
    "officialDate": "2024-07-19",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745640,
    "officialDate": "2024-07-19",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746123,
    "officialDate": "2024-07-19",
    "road": "Red Sox",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745228,
    "officialDate": "2024-07-19",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747093,
    "officialDate": "2024-07-20",
    "road": "Cardinals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745720,
    "officialDate": "2024-07-20",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 747096,
    "officialDate": "2024-07-20",
    "road": "Cardinals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744910,
    "officialDate": "2024-07-20",
    "road": "Tigers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745638,
    "officialDate": "2024-07-20",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746041,
    "officialDate": "2024-07-20",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745478,
    "officialDate": "2024-07-20",
    "road": "Phillies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744830,
    "officialDate": "2024-07-20",
    "road": "Reds",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 744994,
    "officialDate": "2024-07-20",
    "road": "Orioles",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746613,
    "officialDate": "2024-07-20",
    "road": "Padres",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746286,
    "officialDate": "2024-07-20",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745880,
    "officialDate": "2024-07-20",
    "road": "Brewers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746852,
    "officialDate": "2024-07-20",
    "road": "D-backs",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746121,
    "officialDate": "2024-07-20",
    "road": "Red Sox",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746527,
    "officialDate": "2024-07-20",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745229,
    "officialDate": "2024-07-20",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745882,
    "officialDate": "2024-07-21",
    "road": "Brewers",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744831,
    "officialDate": "2024-07-21",
    "road": "Reds",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745470,
    "officialDate": "2024-07-21",
    "road": "Phillies",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 747094,
    "officialDate": "2024-07-21",
    "road": "Cardinals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745722,
    "officialDate": "2024-07-21",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744909,
    "officialDate": "2024-07-21",
    "road": "Tigers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746610,
    "officialDate": "2024-07-21",
    "road": "Padres",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746042,
    "officialDate": "2024-07-21",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746287,
    "officialDate": "2024-07-21",
    "road": "White Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746853,
    "officialDate": "2024-07-21",
    "road": "D-backs",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744991,
    "officialDate": "2024-07-21",
    "road": "Orioles",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746528,
    "officialDate": "2024-07-21",
    "road": "Giants",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745633,
    "officialDate": "2024-07-21",
    "road": "Angels",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745230,
    "officialDate": "2024-07-21",
    "road": "Astros",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746125,
    "officialDate": "2024-07-21",
    "road": "Red Sox",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745717,
    "officialDate": "2024-07-22",
    "road": "Rays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746612,
    "officialDate": "2024-07-22",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745473,
    "officialDate": "2024-07-22",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746034,
    "officialDate": "2024-07-22",
    "road": "Mets",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747095,
    "officialDate": "2024-07-22",
    "road": "Reds",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745881,
    "officialDate": "2024-07-22",
    "road": "Phillies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744988,
    "officialDate": "2024-07-22",
    "road": "White Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746850,
    "officialDate": "2024-07-22",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746280,
    "officialDate": "2024-07-22",
    "road": "D-backs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746526,
    "officialDate": "2024-07-22",
    "road": "Red Sox",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745635,
    "officialDate": "2024-07-22",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745232,
    "officialDate": "2024-07-22",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746124,
    "officialDate": "2024-07-22",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746614,
    "officialDate": "2024-07-23",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745475,
    "officialDate": "2024-07-23",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746036,
    "officialDate": "2024-07-23",
    "road": "Orioles",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744828,
    "officialDate": "2024-07-23",
    "road": "Padres",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745715,
    "officialDate": "2024-07-23",
    "road": "Mets",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744904,
    "officialDate": "2024-07-23",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745878,
    "officialDate": "2024-07-23",
    "road": "Phillies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744985,
    "officialDate": "2024-07-23",
    "road": "White Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746848,
    "officialDate": "2024-07-23",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746281,
    "officialDate": "2024-07-23",
    "road": "D-backs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746524,
    "officialDate": "2024-07-23",
    "road": "Red Sox",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745632,
    "officialDate": "2024-07-23",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745227,
    "officialDate": "2024-07-23",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746118,
    "officialDate": "2024-07-23",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747090,
    "officialDate": "2024-09-09",
    "road": "Reds",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 747091,
    "officialDate": "2024-07-24",
    "road": "Reds",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745472,
    "officialDate": "2024-07-24",
    "road": "Cardinals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745877,
    "officialDate": "2024-07-24",
    "road": "Phillies",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746851,
    "officialDate": "2024-07-24",
    "road": "Brewers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746525,
    "officialDate": "2024-07-24",
    "road": "Red Sox",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745634,
    "officialDate": "2024-07-24",
    "road": "Astros",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745231,
    "officialDate": "2024-07-24",
    "road": "Angels",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746611,
    "officialDate": "2024-07-24",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746035,
    "officialDate": "2024-07-24",
    "road": "Orioles",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744824,
    "officialDate": "2024-07-24",
    "road": "Padres",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745716,
    "officialDate": "2024-07-24",
    "road": "Mets",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744905,
    "officialDate": "2024-07-24",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 744989,
    "officialDate": "2024-07-24",
    "road": "White Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746279,
    "officialDate": "2024-07-24",
    "road": "D-backs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746119,
    "officialDate": "2024-07-24",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 744827,
    "officialDate": "2024-07-25",
    "road": "Padres",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746037,
    "officialDate": "2024-07-25",
    "road": "Orioles",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746609,
    "officialDate": "2024-07-25",
    "road": "Tigers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 744984,
    "officialDate": "2024-07-25",
    "road": "White Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 744907,
    "officialDate": "2024-07-25",
    "road": "Rays",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746117,
    "officialDate": "2024-07-25",
    "road": "Giants",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745794,
    "officialDate": "2024-07-25",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746199,
    "officialDate": "2024-07-25",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746448,
    "officialDate": "2024-07-26",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745554,
    "officialDate": "2024-07-26",
    "road": "Guardians",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745068,
    "officialDate": "2024-07-26",
    "road": "Reds",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747010,
    "officialDate": "2024-07-26",
    "road": "Padres",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744906,
    "officialDate": "2024-07-26",
    "road": "Rangers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745792,
    "officialDate": "2024-07-26",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746933,
    "officialDate": "2024-07-26",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746277,
    "officialDate": "2024-07-26",
    "road": "Cubs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746361,
    "officialDate": "2024-07-26",
    "road": "Dodgers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746767,
    "officialDate": "2024-07-26",
    "road": "Mariners",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745964,
    "officialDate": "2024-07-26",
    "road": "Marlins",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745146,
    "officialDate": "2024-07-26",
    "road": "Nationals",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746200,
    "officialDate": "2024-07-26",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747174,
    "officialDate": "2024-07-26",
    "road": "Pirates",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745315,
    "officialDate": "2024-07-26",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744908,
    "officialDate": "2024-07-27",
    "road": "Rangers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747006,
    "officialDate": "2024-07-27",
    "road": "Padres",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745059,
    "officialDate": "2024-07-27",
    "road": "Reds",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745793,
    "officialDate": "2024-07-27",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745553,
    "officialDate": "2024-07-27",
    "road": "Guardians",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746446,
    "officialDate": "2024-07-27",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745307,
    "officialDate": "2024-07-27",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745310,
    "officialDate": "2024-07-27",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746278,
    "officialDate": "2024-07-27",
    "road": "Cubs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746362,
    "officialDate": "2024-07-27",
    "road": "Dodgers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745966,
    "officialDate": "2024-07-27",
    "road": "Marlins",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745150,
    "officialDate": "2024-07-27",
    "road": "Nationals",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746768,
    "officialDate": "2024-07-27",
    "road": "Mariners",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746931,
    "officialDate": "2024-07-27",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747171,
    "officialDate": "2024-07-27",
    "road": "Pirates",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746203,
    "officialDate": "2024-07-27",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745063,
    "officialDate": "2024-07-28",
    "road": "Reds",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747008,
    "officialDate": "2024-07-28",
    "road": "Padres",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745550,
    "officialDate": "2024-07-28",
    "road": "Guardians",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744902,
    "officialDate": "2024-07-28",
    "road": "Rangers",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746445,
    "officialDate": "2024-07-28",
    "road": "Twins",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745795,
    "officialDate": "2024-07-28",
    "road": "Braves",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746274,
    "officialDate": "2024-07-28",
    "road": "Cubs",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746364,
    "officialDate": "2024-07-28",
    "road": "Dodgers",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746770,
    "officialDate": "2024-07-28",
    "road": "Mariners",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745961,
    "officialDate": "2024-07-28",
    "road": "Marlins",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745145,
    "officialDate": "2024-07-28",
    "road": "Nationals",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745305,
    "officialDate": "2024-07-28",
    "road": "Rockies",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746195,
    "officialDate": "2024-07-28",
    "road": "Athletics",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747173,
    "officialDate": "2024-07-28",
    "road": "Pirates",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746929,
    "officialDate": "2024-07-28",
    "road": "Yankees",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747007,
    "officialDate": "2024-07-29",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746444,
    "officialDate": "2024-07-29",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745547,
    "officialDate": "2024-07-29",
    "road": "Yankees",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746684,
    "officialDate": "2024-07-29",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746928,
    "officialDate": "2024-07-29",
    "road": "Mariners",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745791,
    "officialDate": "2024-07-29",
    "road": "Twins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745147,
    "officialDate": "2024-07-29",
    "road": "Rangers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746360,
    "officialDate": "2024-07-29",
    "road": "Pirates",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746765,
    "officialDate": "2024-07-29",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745959,
    "officialDate": "2024-07-29",
    "road": "Braves",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747172,
    "officialDate": "2024-07-29",
    "road": "Nationals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746441,
    "officialDate": "2024-07-30",
    "road": "Guardians",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 747005,
    "officialDate": "2024-07-30",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745546,
    "officialDate": "2024-07-30",
    "road": "Yankees",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745060,
    "officialDate": "2024-07-30",
    "road": "Marlins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746683,
    "officialDate": "2024-07-30",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746926,
    "officialDate": "2024-07-30",
    "road": "Mariners",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745787,
    "officialDate": "2024-07-30",
    "road": "Twins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745149,
    "officialDate": "2024-07-30",
    "road": "Rangers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746365,
    "officialDate": "2024-07-30",
    "road": "Pirates",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746763,
    "officialDate": "2024-07-30",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745958,
    "officialDate": "2024-07-30",
    "road": "Braves",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746197,
    "officialDate": "2024-07-30",
    "road": "Rockies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747167,
    "officialDate": "2024-07-30",
    "road": "Nationals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745389,
    "officialDate": "2024-07-30",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745309,
    "officialDate": "2024-07-30",
    "road": "Athletics",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745061,
    "officialDate": "2024-07-31",
    "road": "Marlins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747003,
    "officialDate": "2024-07-31",
    "road": "Blue Jays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745543,
    "officialDate": "2024-07-31",
    "road": "Yankees",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745789,
    "officialDate": "2024-07-31",
    "road": "Twins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746764,
    "officialDate": "2024-07-31",
    "road": "Royals",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745960,
    "officialDate": "2024-07-31",
    "road": "Braves",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745148,
    "officialDate": "2024-07-31",
    "road": "Rangers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 747170,
    "officialDate": "2024-07-31",
    "road": "Nationals",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746925,
    "officialDate": "2024-07-31",
    "road": "Mariners",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746678,
    "officialDate": "2024-07-31",
    "road": "Cubs",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746363,
    "officialDate": "2024-07-31",
    "road": "Pirates",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745386,
    "officialDate": "2024-07-31",
    "road": "Dodgers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746198,
    "officialDate": "2024-07-31",
    "road": "Rockies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745306,
    "officialDate": "2024-07-31",
    "road": "Athletics",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746607,
    "officialDate": "2024-08-01",
    "road": "Orioles",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746442,
    "officialDate": "2024-08-01",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 747092,
    "officialDate": "2024-08-01",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746849,
    "officialDate": "2024-08-01",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746196,
    "officialDate": "2024-08-01",
    "road": "Rockies",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746845,
    "officialDate": "2024-08-02",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746443,
    "officialDate": "2024-08-02",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745471,
    "officialDate": "2024-08-02",
    "road": "D-backs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744825,
    "officialDate": "2024-08-02",
    "road": "Brewers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745719,
    "officialDate": "2024-08-02",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746605,
    "officialDate": "2024-08-02",
    "road": "Orioles",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746679,
    "officialDate": "2024-08-02",
    "road": "Giants",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 747089,
    "officialDate": "2024-08-02",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744986,
    "officialDate": "2024-08-02",
    "road": "Red Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746354,
    "officialDate": "2024-08-02",
    "road": "Rays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745875,
    "officialDate": "2024-08-02",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746193,
    "officialDate": "2024-08-02",
    "road": "Mets",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745631,
    "officialDate": "2024-08-02",
    "road": "Dodgers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745387,
    "officialDate": "2024-08-02",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745224,
    "officialDate": "2024-08-02",
    "road": "Phillies",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745714,
    "officialDate": "2024-08-03",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746846,
    "officialDate": "2024-08-03",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744823,
    "officialDate": "2024-08-03",
    "road": "Brewers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746440,
    "officialDate": "2024-08-03",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745474,
    "officialDate": "2024-08-03",
    "road": "D-backs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744987,
    "officialDate": "2024-08-03",
    "road": "Red Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745876,
    "officialDate": "2024-08-03",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746608,
    "officialDate": "2024-08-03",
    "road": "Orioles",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746681,
    "officialDate": "2024-08-03",
    "road": "Giants",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746358,
    "officialDate": "2024-08-03",
    "road": "Rays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747087,
    "officialDate": "2024-08-03",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745388,
    "officialDate": "2024-08-03",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745636,
    "officialDate": "2024-08-03",
    "road": "Dodgers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746194,
    "officialDate": "2024-08-03",
    "road": "Mets",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745225,
    "officialDate": "2024-08-03",
    "road": "Phillies",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746680,
    "officialDate": "2024-08-04",
    "road": "Giants",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745468,
    "officialDate": "2024-08-04",
    "road": "D-backs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 747088,
    "officialDate": "2024-08-04",
    "road": "Marlins",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745718,
    "officialDate": "2024-08-04",
    "road": "Blue Jays",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744826,
    "officialDate": "2024-08-04",
    "road": "Brewers",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746606,
    "officialDate": "2024-08-04",
    "road": "Orioles",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746439,
    "officialDate": "2024-08-04",
    "road": "Royals",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746356,
    "officialDate": "2024-08-04",
    "road": "Rays",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745879,
    "officialDate": "2024-08-04",
    "road": "White Sox",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744979,
    "officialDate": "2024-08-04",
    "road": "Red Sox",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746191,
    "officialDate": "2024-08-04",
    "road": "Mets",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745627,
    "officialDate": "2024-08-04",
    "road": "Dodgers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745384,
    "officialDate": "2024-08-04",
    "road": "Rockies",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745222,
    "officialDate": "2024-08-04",
    "road": "Phillies",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746844,
    "officialDate": "2024-08-04",
    "road": "Cardinals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746600,
    "officialDate": "2024-08-05",
    "road": "D-backs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746038,
    "officialDate": "2024-08-05",
    "road": "Reds",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744821,
    "officialDate": "2024-08-05",
    "road": "Giants",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 744982,
    "officialDate": "2024-08-05",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746847,
    "officialDate": "2024-08-05",
    "road": "Twins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746276,
    "officialDate": "2024-08-05",
    "road": "Red Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745628,
    "officialDate": "2024-08-05",
    "road": "White Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746116,
    "officialDate": "2024-08-05",
    "road": "Phillies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746602,
    "officialDate": "2024-08-06",
    "road": "D-backs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745467,
    "officialDate": "2024-08-06",
    "road": "Padres",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746033,
    "officialDate": "2024-08-06",
    "road": "Reds",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744817,
    "officialDate": "2024-08-06",
    "road": "Giants",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745713,
    "officialDate": "2024-08-06",
    "road": "Angels",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744901,
    "officialDate": "2024-08-06",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747086,
    "officialDate": "2024-08-06",
    "road": "Brewers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745141,
    "officialDate": "2024-08-06",
    "road": "Rays",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 744983,
    "officialDate": "2024-08-06",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746840,
    "officialDate": "2024-08-06",
    "road": "Twins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746273,
    "officialDate": "2024-08-06",
    "road": "Red Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746519,
    "officialDate": "2024-08-06",
    "road": "Mets",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745221,
    "officialDate": "2024-08-06",
    "road": "Tigers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745629,
    "officialDate": "2024-08-06",
    "road": "White Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746120,
    "officialDate": "2024-08-06",
    "road": "Phillies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746604,
    "officialDate": "2024-08-07",
    "road": "D-backs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746842,
    "officialDate": "2024-08-07",
    "road": "Twins",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744981,
    "officialDate": "2024-08-07",
    "road": "Astros",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745630,
    "officialDate": "2024-08-07",
    "road": "White Sox",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745469,
    "officialDate": "2024-08-07",
    "road": "Padres",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746031,
    "officialDate": "2024-08-07",
    "road": "Reds",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744822,
    "officialDate": "2024-08-07",
    "road": "Giants",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745709,
    "officialDate": "2024-08-07",
    "road": "Angels",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744903,
    "officialDate": "2024-08-07",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747085,
    "officialDate": "2024-08-07",
    "road": "Brewers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745142,
    "officialDate": "2024-08-07",
    "road": "Rays",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746272,
    "officialDate": "2024-08-07",
    "road": "Red Sox",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746521,
    "officialDate": "2024-08-07",
    "road": "Mets",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745223,
    "officialDate": "2024-08-07",
    "road": "Tigers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746115,
    "officialDate": "2024-08-07",
    "road": "Phillies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747081,
    "officialDate": "2024-08-08",
    "road": "Brewers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745466,
    "officialDate": "2024-08-08",
    "road": "Padres",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746522,
    "officialDate": "2024-08-08",
    "road": "Mets",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 744819,
    "officialDate": "2024-08-08",
    "road": "Giants",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746030,
    "officialDate": "2024-08-08",
    "road": "Reds",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745710,
    "officialDate": "2024-08-08",
    "road": "Angels",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744899,
    "officialDate": "2024-08-08",
    "road": "Orioles",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745143,
    "officialDate": "2024-08-08",
    "road": "Rays",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745226,
    "officialDate": "2024-08-08",
    "road": "Tigers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747169,
    "officialDate": "2024-08-08",
    "road": "Phillies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745871,
    "officialDate": "2024-08-09",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 744818,
    "officialDate": "2024-08-09",
    "road": "Angels",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745062,
    "officialDate": "2024-08-09",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745708,
    "officialDate": "2024-08-09",
    "road": "Rangers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744900,
    "officialDate": "2024-08-09",
    "road": "Athletics",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746927,
    "officialDate": "2024-08-09",
    "road": "Astros",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746032,
    "officialDate": "2024-08-09",
    "road": "Padres",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746275,
    "officialDate": "2024-08-09",
    "road": "Cardinals",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746760,
    "officialDate": "2024-08-09",
    "road": "Cubs",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745957,
    "officialDate": "2024-08-09",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746523,
    "officialDate": "2024-08-09",
    "road": "Braves",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747168,
    "officialDate": "2024-08-09",
    "road": "Phillies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746113,
    "officialDate": "2024-08-09",
    "road": "Pirates",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745220,
    "officialDate": "2024-08-09",
    "road": "Mets",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745308,
    "officialDate": "2024-08-09",
    "road": "Tigers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745712,
    "officialDate": "2024-08-10",
    "road": "Rangers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744897,
    "officialDate": "2024-08-10",
    "road": "Athletics",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745304,
    "officialDate": "2024-08-10",
    "road": "Tigers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746922,
    "officialDate": "2024-08-10",
    "road": "Astros",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746026,
    "officialDate": "2024-08-10",
    "road": "Padres",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744820,
    "officialDate": "2024-08-10",
    "road": "Angels",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746269,
    "officialDate": "2024-08-10",
    "road": "Cardinals",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745873,
    "officialDate": "2024-08-10",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745955,
    "officialDate": "2024-08-10",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745056,
    "officialDate": "2024-08-10",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746761,
    "officialDate": "2024-08-10",
    "road": "Cubs",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747164,
    "officialDate": "2024-08-10",
    "road": "Phillies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746520,
    "officialDate": "2024-08-10",
    "road": "Braves",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746112,
    "officialDate": "2024-08-10",
    "road": "Pirates",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745219,
    "officialDate": "2024-08-10",
    "road": "Mets",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 744816,
    "officialDate": "2024-08-11",
    "road": "Angels",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746923,
    "officialDate": "2024-08-11",
    "road": "Astros",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745711,
    "officialDate": "2024-08-11",
    "road": "Rangers",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744895,
    "officialDate": "2024-08-11",
    "road": "Athletics",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745057,
    "officialDate": "2024-08-11",
    "road": "Orioles",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746025,
    "officialDate": "2024-08-11",
    "road": "Padres",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745872,
    "officialDate": "2024-08-11",
    "road": "Guardians",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745956,
    "officialDate": "2024-08-11",
    "road": "Reds",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746517,
    "officialDate": "2024-08-11",
    "road": "Braves",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745303,
    "officialDate": "2024-08-11",
    "road": "Tigers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746114,
    "officialDate": "2024-08-11",
    "road": "Pirates",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745216,
    "officialDate": "2024-08-11",
    "road": "Mets",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747166,
    "officialDate": "2024-08-11",
    "road": "Phillies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746603,
    "officialDate": "2024-08-12",
    "road": "Cubs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746682,
    "officialDate": "2024-08-12",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745058,
    "officialDate": "2024-08-12",
    "road": "Astros",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746921,
    "officialDate": "2024-08-12",
    "road": "Rangers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745874,
    "officialDate": "2024-08-12",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746762,
    "officialDate": "2024-08-12",
    "road": "Yankees",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745953,
    "officialDate": "2024-08-12",
    "road": "Dodgers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746192,
    "officialDate": "2024-08-12",
    "road": "Blue Jays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747165,
    "officialDate": "2024-08-12",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745383,
    "officialDate": "2024-08-12",
    "road": "Pirates",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745300,
    "officialDate": "2024-08-12",
    "road": "Braves",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747004,
    "officialDate": "2024-08-13",
    "road": "Nationals",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746601,
    "officialDate": "2024-08-13",
    "road": "Cubs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746435,
    "officialDate": "2024-08-13",
    "road": "Mariners",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746673,
    "officialDate": "2024-08-13",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745548,
    "officialDate": "2024-08-13",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745055,
    "officialDate": "2024-08-13",
    "road": "Astros",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745788,
    "officialDate": "2024-08-13",
    "road": "Athletics",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746924,
    "officialDate": "2024-08-13",
    "road": "Rangers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745867,
    "officialDate": "2024-08-13",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746757,
    "officialDate": "2024-08-13",
    "road": "Yankees",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745954,
    "officialDate": "2024-08-13",
    "road": "Dodgers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746187,
    "officialDate": "2024-08-13",
    "road": "Blue Jays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747160,
    "officialDate": "2024-08-13",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745382,
    "officialDate": "2024-08-13",
    "road": "Pirates",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745302,
    "officialDate": "2024-08-13",
    "road": "Braves",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745869,
    "officialDate": "2024-08-14",
    "road": "Royals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 747163,
    "officialDate": "2024-08-14",
    "road": "Rockies",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745381,
    "officialDate": "2024-08-14",
    "road": "Pirates",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746919,
    "officialDate": "2024-08-14",
    "road": "Rangers",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747000,
    "officialDate": "2024-08-14",
    "road": "Nationals",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746598,
    "officialDate": "2024-08-14",
    "road": "Cubs",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746436,
    "officialDate": "2024-08-14",
    "road": "Mariners",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746677,
    "officialDate": "2024-08-14",
    "road": "Cardinals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745544,
    "officialDate": "2024-08-14",
    "road": "Marlins",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745053,
    "officialDate": "2024-08-14",
    "road": "Astros",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745790,
    "officialDate": "2024-08-14",
    "road": "Athletics",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746759,
    "officialDate": "2024-08-14",
    "road": "Yankees",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745951,
    "officialDate": "2024-08-14",
    "road": "Dodgers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746188,
    "officialDate": "2024-08-14",
    "road": "Blue Jays",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745301,
    "officialDate": "2024-08-14",
    "road": "Braves",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745783,
    "officialDate": "2024-08-15",
    "road": "Athletics",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746437,
    "officialDate": "2024-08-15",
    "road": "Mariners",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745950,
    "officialDate": "2024-08-15",
    "road": "Dodgers",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745298,
    "officialDate": "2024-08-15",
    "road": "Braves",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 747002,
    "officialDate": "2024-08-15",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745545,
    "officialDate": "2024-08-15",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744980,
    "officialDate": "2024-08-15",
    "road": "Twins",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746843,
    "officialDate": "2024-08-16",
    "road": "Blue Jays",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746674,
    "officialDate": "2024-08-16",
    "road": "Royals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745462,
    "officialDate": "2024-08-16",
    "road": "Mariners",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745542,
    "officialDate": "2024-08-16",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746438,
    "officialDate": "2024-08-16",
    "road": "Yankees",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745054,
    "officialDate": "2024-08-16",
    "road": "D-backs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 747001,
    "officialDate": "2024-08-16",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745784,
    "officialDate": "2024-08-16",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 744974,
    "officialDate": "2024-08-16",
    "road": "Twins",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746357,
    "officialDate": "2024-08-16",
    "road": "White Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745949,
    "officialDate": "2024-08-16",
    "road": "Guardians",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745144,
    "officialDate": "2024-08-16",
    "road": "Dodgers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746518,
    "officialDate": "2024-08-16",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746189,
    "officialDate": "2024-08-16",
    "road": "Braves",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745463,
    "officialDate": "2024-08-17",
    "road": "Mariners",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746434,
    "officialDate": "2024-08-17",
    "road": "Yankees",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746841,
    "officialDate": "2024-08-17",
    "road": "Blue Jays",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745049,
    "officialDate": "2024-08-17",
    "road": "D-backs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745785,
    "officialDate": "2024-08-17",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745537,
    "officialDate": "2024-08-17",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746675,
    "officialDate": "2024-08-17",
    "road": "Royals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746997,
    "officialDate": "2024-08-17",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 744977,
    "officialDate": "2024-08-17",
    "road": "Twins",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745626,
    "officialDate": "2024-08-17",
    "road": "Giants",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746355,
    "officialDate": "2024-08-17",
    "road": "White Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745140,
    "officialDate": "2024-08-17",
    "road": "Dodgers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745952,
    "officialDate": "2024-08-17",
    "road": "Guardians",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746515,
    "officialDate": "2024-08-17",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746190,
    "officialDate": "2024-08-17",
    "road": "Braves",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745786,
    "officialDate": "2024-08-18",
    "road": "Marlins",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746999,
    "officialDate": "2024-08-18",
    "road": "Red Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745464,
    "officialDate": "2024-08-18",
    "road": "Mariners",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745539,
    "officialDate": "2024-08-18",
    "road": "Nationals",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746676,
    "officialDate": "2024-08-18",
    "road": "Royals",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745051,
    "officialDate": "2024-08-18",
    "road": "D-backs",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746359,
    "officialDate": "2024-08-18",
    "road": "White Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745948,
    "officialDate": "2024-08-18",
    "road": "Guardians",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745139,
    "officialDate": "2024-08-18",
    "road": "Dodgers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746838,
    "officialDate": "2024-08-18",
    "road": "Blue Jays",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744975,
    "officialDate": "2024-08-18",
    "road": "Twins",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746516,
    "officialDate": "2024-08-18",
    "road": "Padres",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745621,
    "officialDate": "2024-08-18",
    "road": "Giants",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746186,
    "officialDate": "2024-08-18",
    "road": "Braves",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746431,
    "officialDate": "2024-08-18",
    "road": "Yankees",
    "home": "Tigers",
    "venue": "Journey Bank Ballpark"
  },
  {
    "gamePk": 746027,
    "officialDate": "2024-08-19",
    "road": "D-backs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744898,
    "officialDate": "2024-08-19",
    "road": "Reds",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745780,
    "officialDate": "2024-08-19",
    "road": "Orioles",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 744976,
    "officialDate": "2024-08-19",
    "road": "Pirates",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746351,
    "officialDate": "2024-08-19",
    "road": "Red Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746270,
    "officialDate": "2024-08-19",
    "road": "Angels",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745620,
    "officialDate": "2024-08-19",
    "road": "Rays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745380,
    "officialDate": "2024-08-19",
    "road": "Twins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745294,
    "officialDate": "2024-08-19",
    "road": "White Sox",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746109,
    "officialDate": "2024-08-19",
    "road": "Mariners",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746029,
    "officialDate": "2024-08-20",
    "road": "D-backs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744814,
    "officialDate": "2024-08-20",
    "road": "Rockies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745707,
    "officialDate": "2024-08-20",
    "road": "Guardians",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744896,
    "officialDate": "2024-08-20",
    "road": "Reds",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745782,
    "officialDate": "2024-08-20",
    "road": "Orioles",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747083,
    "officialDate": "2024-08-20",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745136,
    "officialDate": "2024-08-20",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746839,
    "officialDate": "2024-08-20",
    "road": "Tigers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744978,
    "officialDate": "2024-08-20",
    "road": "Pirates",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746349,
    "officialDate": "2024-08-20",
    "road": "Red Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746266,
    "officialDate": "2024-08-20",
    "road": "Angels",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745624,
    "officialDate": "2024-08-20",
    "road": "Rays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745374,
    "officialDate": "2024-08-20",
    "road": "Twins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745295,
    "officialDate": "2024-08-20",
    "road": "White Sox",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746107,
    "officialDate": "2024-08-20",
    "road": "Mariners",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745781,
    "officialDate": "2024-08-21",
    "road": "Orioles",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746350,
    "officialDate": "2024-08-21",
    "road": "Red Sox",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 744973,
    "officialDate": "2024-08-21",
    "road": "Pirates",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745297,
    "officialDate": "2024-08-21",
    "road": "White Sox",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745375,
    "officialDate": "2024-08-21",
    "road": "Twins",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746028,
    "officialDate": "2024-08-21",
    "road": "D-backs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744812,
    "officialDate": "2024-08-21",
    "road": "Rockies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745704,
    "officialDate": "2024-08-21",
    "road": "Guardians",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744893,
    "officialDate": "2024-08-21",
    "road": "Reds",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747084,
    "officialDate": "2024-08-21",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745138,
    "officialDate": "2024-08-21",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746837,
    "officialDate": "2024-08-21",
    "road": "Tigers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746267,
    "officialDate": "2024-08-21",
    "road": "Angels",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745622,
    "officialDate": "2024-08-21",
    "road": "Rays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746110,
    "officialDate": "2024-08-21",
    "road": "Mariners",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 744815,
    "officialDate": "2024-08-22",
    "road": "Rockies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745705,
    "officialDate": "2024-08-22",
    "road": "Guardians",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745137,
    "officialDate": "2024-08-22",
    "road": "Brewers",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746836,
    "officialDate": "2024-08-22",
    "road": "Tigers",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745623,
    "officialDate": "2024-08-22",
    "road": "Rays",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745465,
    "officialDate": "2024-08-22",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744894,
    "officialDate": "2024-08-22",
    "road": "Angels",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746998,
    "officialDate": "2024-08-22",
    "road": "Astros",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 747082,
    "officialDate": "2024-08-22",
    "road": "Phillies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745379,
    "officialDate": "2024-08-22",
    "road": "Mets",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745460,
    "officialDate": "2024-08-23",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746995,
    "officialDate": "2024-08-23",
    "road": "Astros",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745702,
    "officialDate": "2024-08-23",
    "road": "Rockies",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744889,
    "officialDate": "2024-08-23",
    "road": "Angels",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746920,
    "officialDate": "2024-08-23",
    "road": "D-backs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746597,
    "officialDate": "2024-08-23",
    "road": "Rangers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746024,
    "officialDate": "2024-08-23",
    "road": "Cubs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747080,
    "officialDate": "2024-08-23",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745870,
    "officialDate": "2024-08-23",
    "road": "Cardinals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746268,
    "officialDate": "2024-08-23",
    "road": "Phillies",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746758,
    "officialDate": "2024-08-23",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745378,
    "officialDate": "2024-08-23",
    "road": "Mets",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745625,
    "officialDate": "2024-08-23",
    "road": "Brewers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745217,
    "officialDate": "2024-08-23",
    "road": "Giants",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746111,
    "officialDate": "2024-08-23",
    "road": "Rays",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745703,
    "officialDate": "2024-08-24",
    "road": "Rockies",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744890,
    "officialDate": "2024-08-24",
    "road": "Angels",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746996,
    "officialDate": "2024-08-24",
    "road": "Astros",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745617,
    "officialDate": "2024-08-24",
    "road": "Brewers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746917,
    "officialDate": "2024-08-24",
    "road": "D-backs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745218,
    "officialDate": "2024-08-24",
    "road": "Giants",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746022,
    "officialDate": "2024-08-24",
    "road": "Cubs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745457,
    "officialDate": "2024-08-24",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746599,
    "officialDate": "2024-08-24",
    "road": "Rangers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745868,
    "officialDate": "2024-08-24",
    "road": "Cardinals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746271,
    "officialDate": "2024-08-24",
    "road": "Phillies",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746756,
    "officialDate": "2024-08-24",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747077,
    "officialDate": "2024-08-24",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745377,
    "officialDate": "2024-08-24",
    "road": "Mets",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746108,
    "officialDate": "2024-08-24",
    "road": "Rays",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 747078,
    "officialDate": "2024-08-25",
    "road": "Nationals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746918,
    "officialDate": "2024-08-25",
    "road": "D-backs",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746994,
    "officialDate": "2024-08-25",
    "road": "Astros",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745459,
    "officialDate": "2024-08-25",
    "road": "Reds",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745706,
    "officialDate": "2024-08-25",
    "road": "Rockies",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744892,
    "officialDate": "2024-08-25",
    "road": "Angels",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746595,
    "officialDate": "2024-08-25",
    "road": "Rangers",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746023,
    "officialDate": "2024-08-25",
    "road": "Cubs",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745863,
    "officialDate": "2024-08-25",
    "road": "Cardinals",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746263,
    "officialDate": "2024-08-25",
    "road": "Phillies",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746754,
    "officialDate": "2024-08-25",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745618,
    "officialDate": "2024-08-25",
    "road": "Brewers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745376,
    "officialDate": "2024-08-25",
    "road": "Mets",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745212,
    "officialDate": "2024-08-25",
    "road": "Giants",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746106,
    "officialDate": "2024-08-25",
    "road": "Rays",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746596,
    "officialDate": "2024-08-26",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745458,
    "officialDate": "2024-08-26",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745538,
    "officialDate": "2024-08-26",
    "road": "Astros",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744813,
    "officialDate": "2024-08-26",
    "road": "Yankees",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746915,
    "officialDate": "2024-08-26",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745865,
    "officialDate": "2024-08-26",
    "road": "Braves",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745133,
    "officialDate": "2024-08-26",
    "road": "Padres",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746753,
    "officialDate": "2024-08-26",
    "road": "Tigers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746513,
    "officialDate": "2024-08-26",
    "road": "Marlins",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745215,
    "officialDate": "2024-08-26",
    "road": "Rays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746429,
    "officialDate": "2024-08-27",
    "road": "Angels",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746594,
    "officialDate": "2024-08-27",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746671,
    "officialDate": "2024-08-27",
    "road": "Athletics",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745461,
    "officialDate": "2024-08-27",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745540,
    "officialDate": "2024-08-27",
    "road": "Astros",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744811,
    "officialDate": "2024-08-27",
    "road": "Yankees",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746916,
    "officialDate": "2024-08-27",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745864,
    "officialDate": "2024-08-27",
    "road": "Braves",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745132,
    "officialDate": "2024-08-27",
    "road": "Padres",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746755,
    "officialDate": "2024-08-27",
    "road": "Rangers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745946,
    "officialDate": "2024-08-27",
    "road": "Giants",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746510,
    "officialDate": "2024-08-27",
    "road": "Marlins",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747162,
    "officialDate": "2024-08-27",
    "road": "Mets",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745213,
    "officialDate": "2024-08-27",
    "road": "Rays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746105,
    "officialDate": "2024-08-27",
    "road": "Orioles",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745452,
    "officialDate": "2024-08-28",
    "road": "Cubs",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746589,
    "officialDate": "2024-08-28",
    "road": "Royals",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745541,
    "officialDate": "2024-08-28",
    "road": "Astros",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745211,
    "officialDate": "2024-08-28",
    "road": "Rays",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746430,
    "officialDate": "2024-08-28",
    "road": "Angels",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746672,
    "officialDate": "2024-08-28",
    "road": "Athletics",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744809,
    "officialDate": "2024-08-28",
    "road": "Yankees",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746913,
    "officialDate": "2024-08-28",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745866,
    "officialDate": "2024-08-28",
    "road": "Braves",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745134,
    "officialDate": "2024-08-28",
    "road": "Padres",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746752,
    "officialDate": "2024-08-28",
    "road": "Rangers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745943,
    "officialDate": "2024-08-28",
    "road": "Giants",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746512,
    "officialDate": "2024-08-28",
    "road": "Marlins",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747161,
    "officialDate": "2024-08-28",
    "road": "Mets",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746103,
    "officialDate": "2024-08-28",
    "road": "Orioles",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746432,
    "officialDate": "2024-08-29",
    "road": "Angels",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746748,
    "officialDate": "2024-08-29",
    "road": "Rangers",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745945,
    "officialDate": "2024-08-29",
    "road": "Giants",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745135,
    "officialDate": "2024-08-29",
    "road": "Padres",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746514,
    "officialDate": "2024-08-29",
    "road": "Marlins",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747159,
    "officialDate": "2024-08-29",
    "road": "Mets",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746670,
    "officialDate": "2024-08-29",
    "road": "Athletics",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745531,
    "officialDate": "2024-08-29",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746914,
    "officialDate": "2024-08-29",
    "road": "Blue Jays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746352,
    "officialDate": "2024-08-29",
    "road": "Royals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746102,
    "officialDate": "2024-08-29",
    "road": "Orioles",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746665,
    "officialDate": "2024-08-30",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746433,
    "officialDate": "2024-08-30",
    "road": "Red Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745533,
    "officialDate": "2024-08-30",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744810,
    "officialDate": "2024-08-30",
    "road": "Cubs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745052,
    "officialDate": "2024-08-30",
    "road": "Padres",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745700,
    "officialDate": "2024-08-30",
    "road": "Cardinals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746593,
    "officialDate": "2024-08-30",
    "road": "Pirates",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 744969,
    "officialDate": "2024-08-30",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746353,
    "officialDate": "2024-08-30",
    "road": "Royals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745862,
    "officialDate": "2024-08-30",
    "road": "Blue Jays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746749,
    "officialDate": "2024-08-30",
    "road": "Mets",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746511,
    "officialDate": "2024-08-30",
    "road": "Orioles",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746184,
    "officialDate": "2024-08-30",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747156,
    "officialDate": "2024-08-30",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745299,
    "officialDate": "2024-08-30",
    "road": "Marlins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745699,
    "officialDate": "2024-08-31",
    "road": "Cardinals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744808,
    "officialDate": "2024-08-31",
    "road": "Cubs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745050,
    "officialDate": "2024-08-31",
    "road": "Padres",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746424,
    "officialDate": "2024-08-31",
    "road": "Red Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746590,
    "officialDate": "2024-08-31",
    "road": "Pirates",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 744971,
    "officialDate": "2024-08-31",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746348,
    "officialDate": "2024-08-31",
    "road": "Royals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745859,
    "officialDate": "2024-08-31",
    "road": "Blue Jays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746751,
    "officialDate": "2024-08-31",
    "road": "Mets",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745532,
    "officialDate": "2024-08-31",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746667,
    "officialDate": "2024-08-31",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746507,
    "officialDate": "2024-08-31",
    "road": "Orioles",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747158,
    "officialDate": "2024-08-31",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745296,
    "officialDate": "2024-08-31",
    "road": "Marlins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746182,
    "officialDate": "2024-08-31",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746669,
    "officialDate": "2024-09-01",
    "road": "Brewers",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744806,
    "officialDate": "2024-09-01",
    "road": "Cubs",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745701,
    "officialDate": "2024-09-01",
    "road": "Cardinals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746426,
    "officialDate": "2024-09-01",
    "road": "Red Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745048,
    "officialDate": "2024-09-01",
    "road": "Padres",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746347,
    "officialDate": "2024-09-01",
    "road": "Royals",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745861,
    "officialDate": "2024-09-01",
    "road": "Blue Jays",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746750,
    "officialDate": "2024-09-01",
    "road": "Mets",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744970,
    "officialDate": "2024-09-01",
    "road": "Athletics",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746592,
    "officialDate": "2024-09-01",
    "road": "Pirates",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746505,
    "officialDate": "2024-09-01",
    "road": "Orioles",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745292,
    "officialDate": "2024-09-01",
    "road": "Marlins",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746183,
    "officialDate": "2024-09-01",
    "road": "Mariners",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747157,
    "officialDate": "2024-09-01",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745536,
    "officialDate": "2024-09-01",
    "road": "Braves",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745947,
    "officialDate": "2024-09-02",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746992,
    "officialDate": "2024-09-02",
    "road": "White Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746668,
    "officialDate": "2024-09-02",
    "road": "Astros",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746265,
    "officialDate": "2024-09-02",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 747155,
    "officialDate": "2024-09-02",
    "road": "Dodgers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745373,
    "officialDate": "2024-09-02",
    "road": "Tigers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745046,
    "officialDate": "2024-09-02",
    "road": "Twins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745619,
    "officialDate": "2024-09-02",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745779,
    "officialDate": "2024-09-02",
    "road": "Red Sox",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746833,
    "officialDate": "2024-09-02",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744972,
    "officialDate": "2024-09-02",
    "road": "Yankees",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746991,
    "officialDate": "2024-09-03",
    "road": "White Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746020,
    "officialDate": "2024-09-03",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745047,
    "officialDate": "2024-09-03",
    "road": "Twins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 744891,
    "officialDate": "2024-09-03",
    "road": "Phillies",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745778,
    "officialDate": "2024-09-03",
    "road": "Red Sox",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747079,
    "officialDate": "2024-09-03",
    "road": "Rockies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746264,
    "officialDate": "2024-09-03",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746834,
    "officialDate": "2024-09-03",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745944,
    "officialDate": "2024-09-03",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 744968,
    "officialDate": "2024-09-03",
    "road": "Yankees",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746185,
    "officialDate": "2024-09-03",
    "road": "Dodgers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745615,
    "officialDate": "2024-09-03",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745293,
    "officialDate": "2024-09-03",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744887,
    "officialDate": "2024-09-04",
    "road": "Phillies",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746990,
    "officialDate": "2024-09-04",
    "road": "White Sox",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746666,
    "officialDate": "2024-09-04",
    "road": "Astros",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746019,
    "officialDate": "2024-09-04",
    "road": "Nationals",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745045,
    "officialDate": "2024-09-04",
    "road": "Twins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745776,
    "officialDate": "2024-09-04",
    "road": "Red Sox",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747075,
    "officialDate": "2024-09-04",
    "road": "Rockies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746262,
    "officialDate": "2024-09-04",
    "road": "Guardians",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746835,
    "officialDate": "2024-09-04",
    "road": "Pirates",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745938,
    "officialDate": "2024-09-04",
    "road": "Cardinals",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 744964,
    "officialDate": "2024-09-04",
    "road": "Yankees",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746178,
    "officialDate": "2024-09-04",
    "road": "Dodgers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745370,
    "officialDate": "2024-09-04",
    "road": "Tigers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745614,
    "officialDate": "2024-09-04",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745290,
    "officialDate": "2024-09-04",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746664,
    "officialDate": "2024-09-05",
    "road": "Astros",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745042,
    "officialDate": "2024-09-05",
    "road": "Twins",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745612,
    "officialDate": "2024-09-05",
    "road": "Mariners",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745289,
    "officialDate": "2024-09-05",
    "road": "D-backs",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745451,
    "officialDate": "2024-09-05",
    "road": "Nationals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746021,
    "officialDate": "2024-09-05",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747073,
    "officialDate": "2024-09-05",
    "road": "Rockies",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744966,
    "officialDate": "2024-09-05",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745369,
    "officialDate": "2024-09-05",
    "road": "Tigers",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746832,
    "officialDate": "2024-09-06",
    "road": "Yankees",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745941,
    "officialDate": "2024-09-06",
    "road": "Rockies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745455,
    "officialDate": "2024-09-06",
    "road": "Nationals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746993,
    "officialDate": "2024-09-06",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745777,
    "officialDate": "2024-09-06",
    "road": "Reds",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746912,
    "officialDate": "2024-09-06",
    "road": "White Sox",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746016,
    "officialDate": "2024-09-06",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 747074,
    "officialDate": "2024-09-06",
    "road": "Blue Jays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744967,
    "officialDate": "2024-09-06",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746343,
    "officialDate": "2024-09-06",
    "road": "D-backs",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746257,
    "officialDate": "2024-09-06",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745131,
    "officialDate": "2024-09-06",
    "road": "Mariners",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745611,
    "officialDate": "2024-09-06",
    "road": "Tigers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745371,
    "officialDate": "2024-09-06",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746104,
    "officialDate": "2024-09-06",
    "road": "Guardians",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746829,
    "officialDate": "2024-09-07",
    "road": "Yankees",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746986,
    "officialDate": "2024-09-07",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745613,
    "officialDate": "2024-09-07",
    "road": "Tigers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746344,
    "officialDate": "2024-09-07",
    "road": "D-backs",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745775,
    "officialDate": "2024-09-07",
    "road": "Reds",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746018,
    "officialDate": "2024-09-07",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745456,
    "officialDate": "2024-09-07",
    "road": "Nationals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744963,
    "officialDate": "2024-09-07",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745942,
    "officialDate": "2024-09-07",
    "road": "Rockies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745125,
    "officialDate": "2024-09-07",
    "road": "Mariners",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746259,
    "officialDate": "2024-09-07",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746911,
    "officialDate": "2024-09-07",
    "road": "White Sox",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747076,
    "officialDate": "2024-09-07",
    "road": "Blue Jays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 745372,
    "officialDate": "2024-09-07",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746099,
    "officialDate": "2024-09-07",
    "road": "Guardians",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746989,
    "officialDate": "2024-09-08",
    "road": "Rays",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745453,
    "officialDate": "2024-09-08",
    "road": "Nationals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 747072,
    "officialDate": "2024-09-08",
    "road": "Blue Jays",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746910,
    "officialDate": "2024-09-08",
    "road": "White Sox",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745774,
    "officialDate": "2024-09-08",
    "road": "Reds",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746017,
    "officialDate": "2024-09-08",
    "road": "Phillies",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746345,
    "officialDate": "2024-09-08",
    "road": "D-backs",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746258,
    "officialDate": "2024-09-08",
    "road": "Twins",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745940,
    "officialDate": "2024-09-08",
    "road": "Rockies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745128,
    "officialDate": "2024-09-08",
    "road": "Mariners",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746827,
    "officialDate": "2024-09-08",
    "road": "Yankees",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744965,
    "officialDate": "2024-09-08",
    "road": "Angels",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745616,
    "officialDate": "2024-09-08",
    "road": "Tigers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746098,
    "officialDate": "2024-09-08",
    "road": "Guardians",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745368,
    "officialDate": "2024-09-08",
    "road": "Giants",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745534,
    "officialDate": "2024-09-09",
    "road": "Rays",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745454,
    "officialDate": "2024-09-09",
    "road": "Marlins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745698,
    "officialDate": "2024-09-09",
    "road": "Royals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744888,
    "officialDate": "2024-09-09",
    "road": "Mets",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746909,
    "officialDate": "2024-09-09",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745860,
    "officialDate": "2024-09-09",
    "road": "Angels",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746746,
    "officialDate": "2024-09-09",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746101,
    "officialDate": "2024-09-09",
    "road": "Cubs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746428,
    "officialDate": "2024-09-10",
    "road": "Rockies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745535,
    "officialDate": "2024-09-10",
    "road": "Rays",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745446,
    "officialDate": "2024-09-10",
    "road": "Marlins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744807,
    "officialDate": "2024-09-10",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745694,
    "officialDate": "2024-09-10",
    "road": "Royals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744886,
    "officialDate": "2024-09-10",
    "road": "Mets",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746907,
    "officialDate": "2024-09-10",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745856,
    "officialDate": "2024-09-10",
    "road": "Angels",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746747,
    "officialDate": "2024-09-10",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745126,
    "officialDate": "2024-09-10",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746346,
    "officialDate": "2024-09-10",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745210,
    "officialDate": "2024-09-10",
    "road": "Padres",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747152,
    "officialDate": "2024-09-10",
    "road": "Rangers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745291,
    "officialDate": "2024-09-10",
    "road": "Brewers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746097,
    "officialDate": "2024-09-10",
    "road": "Cubs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745450,
    "officialDate": "2024-09-11",
    "road": "Marlins",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 746745,
    "officialDate": "2024-09-11",
    "road": "Guardians",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 744881,
    "officialDate": "2024-09-11",
    "road": "Mets",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747154,
    "officialDate": "2024-09-11",
    "road": "Rangers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746425,
    "officialDate": "2024-09-11",
    "road": "Rockies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745525,
    "officialDate": "2024-09-11",
    "road": "Rays",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744804,
    "officialDate": "2024-09-11",
    "road": "Braves",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745697,
    "officialDate": "2024-09-11",
    "road": "Royals",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746908,
    "officialDate": "2024-09-11",
    "road": "Orioles",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745857,
    "officialDate": "2024-09-11",
    "road": "Angels",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745127,
    "officialDate": "2024-09-11",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746342,
    "officialDate": "2024-09-11",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745214,
    "officialDate": "2024-09-11",
    "road": "Padres",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745285,
    "officialDate": "2024-09-11",
    "road": "Brewers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746100,
    "officialDate": "2024-09-11",
    "road": "Cubs",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746427,
    "officialDate": "2024-09-12",
    "road": "Rockies",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745129,
    "officialDate": "2024-09-12",
    "road": "Reds",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746337,
    "officialDate": "2024-09-12",
    "road": "Athletics",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746591,
    "officialDate": "2024-09-12",
    "road": "Rays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 744805,
    "officialDate": "2024-09-12",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745695,
    "officialDate": "2024-09-12",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745208,
    "officialDate": "2024-09-12",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745288,
    "officialDate": "2024-09-12",
    "road": "Brewers",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746423,
    "officialDate": "2024-09-13",
    "road": "Orioles",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745447,
    "officialDate": "2024-09-13",
    "road": "Royals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745529,
    "officialDate": "2024-09-13",
    "road": "Mets",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744800,
    "officialDate": "2024-09-13",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745696,
    "officialDate": "2024-09-13",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744882,
    "officialDate": "2024-09-13",
    "road": "Cardinals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746586,
    "officialDate": "2024-09-13",
    "road": "Rays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 747069,
    "officialDate": "2024-09-13",
    "road": "Dodgers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746744,
    "officialDate": "2024-09-13",
    "road": "Athletics",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745855,
    "officialDate": "2024-09-13",
    "road": "Reds",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746509,
    "officialDate": "2024-09-13",
    "road": "Cubs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746181,
    "officialDate": "2024-09-13",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747153,
    "officialDate": "2024-09-13",
    "road": "Brewers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745207,
    "officialDate": "2024-09-13",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745286,
    "officialDate": "2024-09-13",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745448,
    "officialDate": "2024-09-14",
    "road": "Royals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745689,
    "officialDate": "2024-09-14",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744884,
    "officialDate": "2024-09-14",
    "road": "Cardinals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745528,
    "officialDate": "2024-09-14",
    "road": "Mets",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744803,
    "officialDate": "2024-09-14",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746422,
    "officialDate": "2024-09-14",
    "road": "Orioles",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746584,
    "officialDate": "2024-09-14",
    "road": "Rays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745858,
    "officialDate": "2024-09-14",
    "road": "Reds",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746740,
    "officialDate": "2024-09-14",
    "road": "Athletics",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 747070,
    "officialDate": "2024-09-14",
    "road": "Dodgers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746508,
    "officialDate": "2024-09-14",
    "road": "Cubs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747148,
    "officialDate": "2024-09-14",
    "road": "Brewers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745284,
    "officialDate": "2024-09-14",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746177,
    "officialDate": "2024-09-14",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745209,
    "officialDate": "2024-09-14",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746419,
    "officialDate": "2024-09-15",
    "road": "Orioles",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745852,
    "officialDate": "2024-09-15",
    "road": "Reds",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745449,
    "officialDate": "2024-09-15",
    "road": "Royals",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 745530,
    "officialDate": "2024-09-15",
    "road": "Mets",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 747071,
    "officialDate": "2024-09-15",
    "road": "Dodgers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 744801,
    "officialDate": "2024-09-15",
    "road": "Marlins",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745693,
    "officialDate": "2024-09-15",
    "road": "Red Sox",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744883,
    "officialDate": "2024-09-15",
    "road": "Cardinals",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746585,
    "officialDate": "2024-09-15",
    "road": "Rays",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746741,
    "officialDate": "2024-09-15",
    "road": "Athletics",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746506,
    "officialDate": "2024-09-15",
    "road": "Cubs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745287,
    "officialDate": "2024-09-15",
    "road": "Padres",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746180,
    "officialDate": "2024-09-15",
    "road": "Astros",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745206,
    "officialDate": "2024-09-15",
    "road": "Rangers",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 747151,
    "officialDate": "2024-09-15",
    "road": "Brewers",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746588,
    "officialDate": "2024-09-16",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745773,
    "officialDate": "2024-09-16",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 747067,
    "officialDate": "2024-09-16",
    "road": "Dodgers",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746260,
    "officialDate": "2024-09-16",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746828,
    "officialDate": "2024-09-16",
    "road": "Athletics",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745939,
    "officialDate": "2024-09-16",
    "road": "Phillies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745130,
    "officialDate": "2024-09-16",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746502,
    "officialDate": "2024-09-16",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746179,
    "officialDate": "2024-09-16",
    "road": "White Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745367,
    "officialDate": "2024-09-16",
    "road": "Astros",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746987,
    "officialDate": "2024-09-17",
    "road": "Giants",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746587,
    "officialDate": "2024-09-17",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746659,
    "officialDate": "2024-09-17",
    "road": "Braves",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746015,
    "officialDate": "2024-09-17",
    "road": "Dodgers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745044,
    "officialDate": "2024-09-17",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745772,
    "officialDate": "2024-09-17",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746261,
    "officialDate": "2024-09-17",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 746830,
    "officialDate": "2024-09-17",
    "road": "Athletics",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745935,
    "officialDate": "2024-09-17",
    "road": "Phillies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745122,
    "officialDate": "2024-09-17",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 744961,
    "officialDate": "2024-09-17",
    "road": "Blue Jays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746503,
    "officialDate": "2024-09-17",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746176,
    "officialDate": "2024-09-17",
    "road": "White Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745366,
    "officialDate": "2024-09-17",
    "road": "Astros",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745205,
    "officialDate": "2024-09-17",
    "road": "Yankees",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746831,
    "officialDate": "2024-09-18",
    "road": "Athletics",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746500,
    "officialDate": "2024-09-18",
    "road": "D-backs",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 746172,
    "officialDate": "2024-09-18",
    "road": "White Sox",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 746988,
    "officialDate": "2024-09-18",
    "road": "Giants",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745365,
    "officialDate": "2024-09-18",
    "road": "Astros",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 746582,
    "officialDate": "2024-09-18",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746662,
    "officialDate": "2024-09-18",
    "road": "Braves",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746014,
    "officialDate": "2024-09-18",
    "road": "Dodgers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745040,
    "officialDate": "2024-09-18",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745771,
    "officialDate": "2024-09-18",
    "road": "Nationals",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746254,
    "officialDate": "2024-09-18",
    "road": "Tigers",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745933,
    "officialDate": "2024-09-18",
    "road": "Phillies",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745121,
    "officialDate": "2024-09-18",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 744959,
    "officialDate": "2024-09-18",
    "road": "Blue Jays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745199,
    "officialDate": "2024-09-18",
    "road": "Yankees",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746985,
    "officialDate": "2024-09-19",
    "road": "Giants",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746579,
    "officialDate": "2024-09-19",
    "road": "Twins",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746663,
    "officialDate": "2024-09-19",
    "road": "Braves",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 744962,
    "officialDate": "2024-09-19",
    "road": "Blue Jays",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745204,
    "officialDate": "2024-09-19",
    "road": "Yankees",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 746011,
    "officialDate": "2024-09-19",
    "road": "Dodgers",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 745041,
    "officialDate": "2024-09-19",
    "road": "Red Sox",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745769,
    "officialDate": "2024-09-19",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 745120,
    "officialDate": "2024-09-19",
    "road": "Pirates",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746823,
    "officialDate": "2024-09-19",
    "road": "Nationals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 745937,
    "officialDate": "2024-09-19",
    "road": "D-backs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746341,
    "officialDate": "2024-09-19",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746824,
    "officialDate": "2024-09-20",
    "road": "Nationals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746661,
    "officialDate": "2024-09-20",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 745043,
    "officialDate": "2024-09-20",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746984,
    "officialDate": "2024-09-20",
    "road": "Tigers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746905,
    "officialDate": "2024-09-20",
    "road": "Twins",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745770,
    "officialDate": "2024-09-20",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746013,
    "officialDate": "2024-09-20",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744960,
    "officialDate": "2024-09-20",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746340,
    "officialDate": "2024-09-20",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746256,
    "officialDate": "2024-09-20",
    "road": "Giants",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745934,
    "officialDate": "2024-09-20",
    "road": "D-backs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745123,
    "officialDate": "2024-09-20",
    "road": "Guardians",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745364,
    "officialDate": "2024-09-20",
    "road": "White Sox",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745606,
    "officialDate": "2024-09-20",
    "road": "Yankees",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746094,
    "officialDate": "2024-09-20",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746660,
    "officialDate": "2024-09-21",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746826,
    "officialDate": "2024-09-21",
    "road": "Nationals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746983,
    "officialDate": "2024-09-21",
    "road": "Tigers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 745038,
    "officialDate": "2024-09-21",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 746906,
    "officialDate": "2024-09-21",
    "road": "Twins",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745768,
    "officialDate": "2024-09-21",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746012,
    "officialDate": "2024-09-21",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 744958,
    "officialDate": "2024-09-21",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 746338,
    "officialDate": "2024-09-21",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746255,
    "officialDate": "2024-09-21",
    "road": "Giants",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745936,
    "officialDate": "2024-09-21",
    "road": "D-backs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745124,
    "officialDate": "2024-09-21",
    "road": "Guardians",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 745360,
    "officialDate": "2024-09-21",
    "road": "White Sox",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745610,
    "officialDate": "2024-09-21",
    "road": "Yankees",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746096,
    "officialDate": "2024-09-21",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746657,
    "officialDate": "2024-09-22",
    "road": "Pirates",
    "home": "Reds",
    "venue": "Great American Ball Park"
  },
  {
    "gamePk": 746982,
    "officialDate": "2024-09-22",
    "road": "Tigers",
    "home": "Orioles",
    "venue": "Oriole Park at Camden Yards"
  },
  {
    "gamePk": 746903,
    "officialDate": "2024-09-22",
    "road": "Twins",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 745036,
    "officialDate": "2024-09-22",
    "road": "Blue Jays",
    "home": "Rays",
    "venue": "Tropicana Field"
  },
  {
    "gamePk": 745767,
    "officialDate": "2024-09-22",
    "road": "Phillies",
    "home": "Mets",
    "venue": "Citi Field"
  },
  {
    "gamePk": 746010,
    "officialDate": "2024-09-22",
    "road": "Braves",
    "home": "Marlins",
    "venue": "loanDepot park"
  },
  {
    "gamePk": 746339,
    "officialDate": "2024-09-22",
    "road": "Angels",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746253,
    "officialDate": "2024-09-22",
    "road": "Giants",
    "home": "Royals",
    "venue": "Kauffman Stadium"
  },
  {
    "gamePk": 745929,
    "officialDate": "2024-09-22",
    "road": "D-backs",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 745118,
    "officialDate": "2024-09-22",
    "road": "Guardians",
    "home": "Cardinals",
    "venue": "Busch Stadium"
  },
  {
    "gamePk": 746825,
    "officialDate": "2024-09-22",
    "road": "Nationals",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744955,
    "officialDate": "2024-09-22",
    "road": "Mariners",
    "home": "Rangers",
    "venue": "Globe Life Field"
  },
  {
    "gamePk": 745608,
    "officialDate": "2024-09-22",
    "road": "Yankees",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746092,
    "officialDate": "2024-09-22",
    "road": "Rockies",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745358,
    "officialDate": "2024-09-22",
    "road": "White Sox",
    "home": "Padres",
    "venue": "Petco Park"
  },
  {
    "gamePk": 745527,
    "officialDate": "2024-09-23",
    "road": "Cubs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 744885,
    "officialDate": "2024-09-23",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746334,
    "officialDate": "2024-09-23",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 747150,
    "officialDate": "2024-09-23",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746581,
    "officialDate": "2024-09-24",
    "road": "Reds",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746421,
    "officialDate": "2024-09-24",
    "road": "Rays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745526,
    "officialDate": "2024-09-24",
    "road": "Cubs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 745441,
    "officialDate": "2024-09-24",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744802,
    "officialDate": "2024-09-24",
    "road": "Royals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745688,
    "officialDate": "2024-09-24",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744876,
    "officialDate": "2024-09-24",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747068,
    "officialDate": "2024-09-24",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746743,
    "officialDate": "2024-09-24",
    "road": "Angels",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745851,
    "officialDate": "2024-09-24",
    "road": "Marlins",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746336,
    "officialDate": "2024-09-24",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 746504,
    "officialDate": "2024-09-24",
    "road": "Cardinals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747149,
    "officialDate": "2024-09-24",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745605,
    "officialDate": "2024-09-24",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746093,
    "officialDate": "2024-09-24",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746331,
    "officialDate": "2024-09-25",
    "road": "Mariners",
    "home": "Astros",
    "venue": "Minute Maid Park"
  },
  {
    "gamePk": 745521,
    "officialDate": "2024-09-25",
    "road": "Cubs",
    "home": "Phillies",
    "venue": "Citizens Bank Park"
  },
  {
    "gamePk": 746583,
    "officialDate": "2024-09-25",
    "road": "Reds",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746420,
    "officialDate": "2024-09-25",
    "road": "Rays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745442,
    "officialDate": "2024-09-25",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744795,
    "officialDate": "2024-09-25",
    "road": "Royals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745690,
    "officialDate": "2024-09-25",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744877,
    "officialDate": "2024-09-25",
    "road": "Red Sox",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 747064,
    "officialDate": "2024-09-25",
    "road": "Mets",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746742,
    "officialDate": "2024-09-25",
    "road": "Angels",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 745854,
    "officialDate": "2024-09-25",
    "road": "Marlins",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746501,
    "officialDate": "2024-09-25",
    "road": "Cardinals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747144,
    "officialDate": "2024-09-25",
    "road": "Giants",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745607,
    "officialDate": "2024-09-25",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 746095,
    "officialDate": "2024-09-25",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 745443,
    "officialDate": "2024-09-26",
    "road": "Brewers",
    "home": "Pirates",
    "venue": "PNC Park"
  },
  {
    "gamePk": 744796,
    "officialDate": "2024-09-26",
    "road": "Royals",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746415,
    "officialDate": "2024-09-26",
    "road": "Rays",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 746738,
    "officialDate": "2024-09-26",
    "road": "Angels",
    "home": "White Sox",
    "venue": "Guaranteed Rate Field"
  },
  {
    "gamePk": 746495,
    "officialDate": "2024-09-26",
    "road": "Cardinals",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745609,
    "officialDate": "2024-09-26",
    "road": "Rangers",
    "home": "Athletics",
    "venue": "Oakland Coliseum"
  },
  {
    "gamePk": 745691,
    "officialDate": "2024-09-26",
    "road": "Orioles",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 745853,
    "officialDate": "2024-09-26",
    "road": "Marlins",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746088,
    "officialDate": "2024-09-26",
    "road": "Padres",
    "home": "Dodgers",
    "venue": "Dodger Stadium"
  },
  {
    "gamePk": 746822,
    "officialDate": "2024-09-27",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 746417,
    "officialDate": "2024-09-27",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 744797,
    "officialDate": "2024-09-27",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745692,
    "officialDate": "2024-09-27",
    "road": "Pirates",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 744879,
    "officialDate": "2024-09-27",
    "road": "Marlins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746580,
    "officialDate": "2024-09-27",
    "road": "Astros",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746904,
    "officialDate": "2024-09-27",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 747065,
    "officialDate": "2024-09-27",
    "road": "Royals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746494,
    "officialDate": "2024-09-27",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 745847,
    "officialDate": "2024-09-27",
    "road": "Orioles",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 745930,
    "officialDate": "2024-09-27",
    "road": "Mets",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746173,
    "officialDate": "2024-09-27",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 747145,
    "officialDate": "2024-09-27",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745202,
    "officialDate": "2024-09-27",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745280,
    "officialDate": "2024-09-27",
    "road": "Cardinals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 745685,
    "officialDate": "2024-09-28",
    "road": "Pirates",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746414,
    "officialDate": "2024-09-28",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745849,
    "officialDate": "2024-09-28",
    "road": "Orioles",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746819,
    "officialDate": "2024-09-28",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 744878,
    "officialDate": "2024-09-28",
    "road": "Marlins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 745281,
    "officialDate": "2024-09-28",
    "road": "Cardinals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 744799,
    "officialDate": "2024-09-28",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 746902,
    "officialDate": "2024-09-28",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 746578,
    "officialDate": "2024-09-28",
    "road": "Astros",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 745931,
    "officialDate": "2024-09-28",
    "road": "Mets",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 747066,
    "officialDate": "2024-09-28",
    "road": "Royals",
    "home": "Braves",
    "venue": "Truist Park"
  },
  {
    "gamePk": 746499,
    "officialDate": "2024-09-28",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747146,
    "officialDate": "2024-09-28",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 746171,
    "officialDate": "2024-09-28",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 745203,
    "officialDate": "2024-09-28",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745282,
    "officialDate": "2024-09-29",
    "road": "Cardinals",
    "home": "Giants",
    "venue": "Oracle Park"
  },
  {
    "gamePk": 746901,
    "officialDate": "2024-09-29",
    "road": "Rays",
    "home": "Red Sox",
    "venue": "Fenway Park"
  },
  {
    "gamePk": 744798,
    "officialDate": "2024-09-29",
    "road": "Phillies",
    "home": "Nationals",
    "venue": "Nationals Park"
  },
  {
    "gamePk": 745686,
    "officialDate": "2024-09-29",
    "road": "Pirates",
    "home": "Yankees",
    "venue": "Yankee Stadium"
  },
  {
    "gamePk": 746174,
    "officialDate": "2024-09-29",
    "road": "Rangers",
    "home": "Angels",
    "venue": "Angel Stadium"
  },
  {
    "gamePk": 744880,
    "officialDate": "2024-09-29",
    "road": "Marlins",
    "home": "Blue Jays",
    "venue": "Rogers Centre"
  },
  {
    "gamePk": 746577,
    "officialDate": "2024-09-29",
    "road": "Astros",
    "home": "Guardians",
    "venue": "Progressive Field"
  },
  {
    "gamePk": 746496,
    "officialDate": "2024-09-29",
    "road": "Dodgers",
    "home": "Rockies",
    "venue": "Coors Field"
  },
  {
    "gamePk": 747147,
    "officialDate": "2024-09-29",
    "road": "Padres",
    "home": "D-backs",
    "venue": "Chase Field"
  },
  {
    "gamePk": 745201,
    "officialDate": "2024-09-29",
    "road": "Athletics",
    "home": "Mariners",
    "venue": "T-Mobile Park"
  },
  {
    "gamePk": 745846,
    "officialDate": "2024-09-29",
    "road": "Orioles",
    "home": "Twins",
    "venue": "Target Field"
  },
  {
    "gamePk": 746416,
    "officialDate": "2024-09-29",
    "road": "White Sox",
    "home": "Tigers",
    "venue": "Comerica Park"
  },
  {
    "gamePk": 745932,
    "officialDate": "2024-09-29",
    "road": "Mets",
    "home": "Brewers",
    "venue": "American Family Field"
  },
  {
    "gamePk": 746820,
    "officialDate": "2024-09-29",
    "road": "Reds",
    "home": "Cubs",
    "venue": "Wrigley Field"
  },
  {
    "gamePk": 747061,
    "officialDate": "2024-09-29",
    "road": "Royals",
    "home": "Braves",
    "venue": "Truist Park"
  }
]
`;

const scheduledGames = JSON.parse(json.replace(/D-backs/g, "Diamondbacks"));

export { scheduledGames };
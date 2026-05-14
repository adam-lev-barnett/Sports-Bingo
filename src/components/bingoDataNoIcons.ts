import { Sport } from '../App';

export interface BingoItem {
  name: string;
  description: string;
}

const soccerItems: BingoItem[] = [
  { name: 'Goal', description: 'A player scores a goal into the net!' },
  { name: 'Corner Kick', description: 'The ball goes out of bounds near the goal, resulting in a corner kick.' },
  { name: 'Yellow Card', description: 'A player receives a yellow card warning from the referee.' },
  { name: 'Offside', description: 'A player is caught in an offside position.' },
  { name: 'Penalty', description: 'A penalty kick is awarded for a foul in the box.' },
  { name: 'Substitution', description: 'A player is substituted off the field.' },
  { name: 'Header', description: 'A player heads the ball with their head.' },
  { name: 'Tackle', description: 'A defensive tackle to win the ball back.' },
  { name: 'Throw-In', description: 'The ball is thrown back into play from the sideline.' },
  { name: 'Assist', description: 'A player makes an assist leading to a goal.' },
  { name: 'Save', description: 'The goalkeeper makes a crucial save.' },
  { name: 'Red Card', description: 'A player is sent off with a red card.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Free Kick', description: 'A free kick is awarded for a foul.' },
  { name: 'Cross', description: 'A player crosses the ball into the box.' },
  { name: 'Dribble', description: 'A player dribbles past defenders.' },
  { name: 'Whistle', description: 'The referee blows the whistle for a call.' },
  { name: 'Chant', description: 'The crowd erupts in a team chant.' },
  { name: 'Injury', description: 'A player goes down with an injury.' },
  { name: 'Hat Trick', description: 'A player scores three goals in one game!' },
  { name: 'Volley', description: 'A player strikes the ball before it hits the ground.' },
  { name: 'Nutmeg', description: "The ball is passed between an opponent's legs." },
  { name: 'Clean Sheet', description: "The team doesn't concede any goals." },
  { name: 'Own Goal', description: 'A player accidentally scores on their own goal.' },
  { name: 'VAR Check', description: 'Video Assistant Referee reviews a decision.' },
];

const baseballItems: BingoItem[] = [
  { name: 'Home Run', description: 'The batter hits the ball out of the park!' },
  { name: 'Strikeout', description: 'The batter strikes out with three strikes.' },
  { name: 'Double Play', description: 'Two outs are recorded on one play.' },
  { name: 'Walk', description: 'The batter reaches base on four balls.' },
  { name: 'Stolen Base', description: 'A runner steals a base successfully.' },
  { name: 'Fly Out', description: 'The ball is caught in the air for an out.' },
  { name: 'Ground Out', description: 'The batter hits a ground ball and is thrown out.' },
  { name: 'Hit by Pitch', description: 'The batter is hit by a pitched ball.' },
  { name: 'Bunt', description: 'The batter bunts the ball.' },
  { name: 'Error', description: 'A fielding error allows a runner to advance.' },
  { name: 'Triple', description: 'The batter reaches third base on a hit.' },
  { name: 'Sacrifice Fly', description: 'A fly ball allows a runner to score.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Foul Ball', description: 'The ball is hit into foul territory.' },
  { name: 'Pitching Change', description: 'A new pitcher enters the game.' },
  { name: 'Pop Up', description: 'A high fly ball in the infield.' },
  { name: 'Wild Pitch', description: 'The pitched ball gets past the catcher.' },
  { name: 'Grand Slam', description: 'A home run with the bases loaded!' },
  { name: 'Caught Stealing', description: 'A runner is caught trying to steal a base.' },
  { name: 'Infield Hit', description: 'A hit that stays in the infield.' },
  { name: 'Perfect Game', description: 'No batter reaches base throughout the game.' },
  { name: 'Balk', description: 'The pitcher makes an illegal motion.' },
  { name: 'Diving Catch', description: 'A spectacular diving catch in the outfield.' },
  { name: 'RBI', description: 'A run is batted in by the hitter.' },
  { name: 'Called Strike', description: 'The umpire calls a strike without a swing.' },
];

const basketballItems: BingoItem[] = [
  { name: '3-Pointer', description: 'A shot made from beyond the three-point line!' },
  { name: 'Dunk', description: 'A player slams the ball through the hoop.' },
  { name: 'Block', description: 'A defensive player blocks a shot.' },
  { name: 'Steal', description: 'The ball is stolen from the opposing team.' },
  { name: 'Assist', description: 'A pass that leads directly to a basket.' },
  { name: 'Rebound', description: 'A player grabs a missed shot.' },
  { name: 'Free Throw', description: 'An uncontested shot from the free throw line.' },
  { name: 'Foul', description: 'A player commits a foul.' },
  { name: 'Timeout', description: 'A team calls a timeout.' },
  { name: 'Turnover', description: 'The ball is lost to the opposing team.' },
  { name: 'Alley-Oop', description: 'A pass thrown near the basket for a slam dunk.' },
  { name: 'Layup', description: 'A close-range shot near the basket.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Double-Double', description: 'A player reaches double digits in two stats.' },
  { name: 'Fast Break', description: 'A quick offensive play after gaining possession.' },
  { name: 'Jump Ball', description: 'Two players jump for the ball at center court.' },
  { name: 'Technical Foul', description: 'A foul for unsportsmanlike conduct.' },
  { name: 'Buzzer Beater', description: 'A shot made just as time expires!' },
  { name: 'Crossover', description: 'A dribbling move to get past a defender.' },
  { name: 'And-One', description: 'A made basket while being fouled.' },
  { name: 'Triple-Double', description: 'Double digits in three statistical categories!' },
  { name: 'Traveling', description: 'A violation for moving without dribbling.' },
  { name: 'Charge', description: 'An offensive foul for running into a defender.' },
  { name: 'Substitution', description: 'A player substitution is made.' },
  { name: 'Bank Shot', description: 'The ball bounces off the backboard into the hoop.' },
];

const rugbyItems: BingoItem[] = [
  { name: 'Try', description: 'A player grounds the ball over the try line for 5 points!' },
  { name: 'Conversion', description: 'A kick at goal after a try, worth 2 points.' },
  { name: 'Penalty Kick', description: 'A kick at goal from a penalty, worth 3 points.' },
  { name: 'Drop Goal', description: 'A drop-kick through the uprights during open play, worth 3 points.' },
  { name: 'Scrum', description: 'A set piece where forwards bind together and contest for the ball.' },
  { name: 'Lineout', description: 'The ball is thrown in from the sideline after going out of play.' },
  { name: 'Ruck', description: 'Players contest for the ball on the ground after a tackle.' },
  { name: 'Maul', description: 'A standing battle for possession where players bind together.' },
  { name: 'Tackle', description: 'A ball carrier is brought to the ground by an opponent.' },
  { name: 'Turnover', description: 'Possession changes hands at the breakdown.' },
  { name: 'Yellow Card', description: 'A player is sin-binned for 10 minutes.' },
  { name: 'Red Card', description: 'A player is sent off for the rest of the match.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Sin Bin', description: 'A player serves time off the field for foul play.' },
  { name: 'High Tackle', description: 'A dangerous tackle above the shoulders.' },
  { name: 'Offside', description: 'A player is penalized for being in an offside position.' },
  { name: 'Knock-On', description: "The ball is knocked forward by a player's hand or arm." },
  { name: 'Forward Pass', description: "An illegal pass thrown toward the opponent's goal line." },
  { name: 'Substitution', description: 'A player is replaced by a substitute.' },
  { name: 'Garryowen', description: 'A high up-and-under kick allowing forwards to charge the catcher.' },
  { name: 'Grubber Kick', description: 'A low kick along the ground through the defence.' },
  { name: 'Penalty Try', description: 'A try awarded when foul play prevented a certain score.' },
  { name: 'TMO Review', description: 'The Television Match Official reviews a decision on the big screen.' },
  { name: 'Hat Trick', description: 'A player scores three tries in one match!' },
  { name: 'Injury', description: 'A player goes down requiring medical attention.' },
];

const hockeyItems: BingoItem[] = [
  { name: 'Goal', description: 'The puck enters the net for a score!' },
  { name: 'Save', description: 'The goalie stops a shot on goal.' },
  { name: 'Penalty', description: 'A player is sent to the penalty box.' },
  { name: 'Power Play', description: 'One team has more players due to a penalty.' },
  { name: 'Hat Trick', description: 'A player scores three goals in one game!' },
  { name: 'Assist', description: 'A pass that leads to a goal.' },
  { name: 'Face-Off', description: 'The puck is dropped to start play.' },
  { name: 'Icing', description: 'The puck is shot from behind center across the goal line.' },
  { name: 'Offside', description: 'A player enters the offensive zone too early.' },
  { name: 'Breakaway', description: 'A player breaks free for a one-on-one with the goalie.' },
  { name: 'Slapshot', description: 'A powerful shot using a full backswing.' },
  { name: 'Body Check', description: 'A player uses their body to stop an opponent.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Short-Handed', description: 'Playing with fewer players than the opponent.' },
  { name: 'Overtime', description: 'Extra time to break a tie.' },
  { name: 'Empty Net', description: 'The goalie is pulled for an extra attacker.' },
  { name: 'Wrist Shot', description: 'A quick shot using wrist movement.' },
  { name: 'Deke', description: 'A fake move to get past a defender or goalie.' },
  { name: 'Rebound', description: 'A shot attempt following a saved shot.' },
  { name: 'High Stick', description: 'A penalty for hitting with a raised stick.' },
  { name: 'Wraparound', description: 'Skating behind the net and trying to score.' },
  { name: 'Glove Save', description: 'The goalie catches the puck with their glove.' },
  { name: 'Scramble', description: 'A chaotic play with many players around the puck.' },
  { name: 'Shutout', description: "The goalie doesn't allow any goals!" },
  { name: 'Fight', description: 'Players engage in a physical altercation.' },
];

const americanFootballItems: BingoItem[] = [
  { name: 'Touchdown', description: 'A player crosses the goal line to score 6 points!' },
  { name: 'Field Goal', description: 'The kicker splits the uprights for 3 points.' },
  { name: 'Interception', description: 'A defender catches a pass intended for the offense.' },
  { name: 'Fumble', description: 'A ball carrier loses possession of the football.' },
  { name: 'Sack', description: 'The quarterback is tackled behind the line of scrimmage.' },
  { name: 'Penalty Flag', description: 'A penalty flag is thrown for a rule violation.' },
  { name: 'First Down', description: 'The offense gains 10 yards and earns a new set of downs.' },
  { name: 'Extra Point', description: 'The offense kicks or runs in for 1 or 2 points after a TD.' },
  { name: 'Punt', description: 'The offense punts the ball away on fourth down.' },
  { name: 'Safety', description: 'The defense tackles the ball carrier in their own end zone for 2 points.' },
  { name: 'Two-Point Conv.', description: 'The offense runs or passes into the end zone for 2 points after a TD.' },
  { name: 'Onside Kick', description: 'A short kickoff attempt to recover the ball.' },
  { name: 'Free Space', description: 'Free space - automatically marked!' },
  { name: 'Hail Mary', description: 'A desperation long pass attempt near the end of the half or game.' },
  { name: 'Blitz', description: 'Extra defenders rush the quarterback.' },
  { name: 'Red Zone', description: "The offense has the ball inside the opponent's 20-yard line." },
  { name: 'Challenge Flag', description: 'A coach challenges an on-field ruling.' },
  { name: 'Kickoff Return', description: 'A player returns the kickoff for big yards or a touchdown.' },
  { name: 'Fake Punt', description: 'The punting team fakes the kick and runs or passes.' },
  { name: 'Screen Pass', description: 'A short pass to a receiver behind blockers.' },
  { name: 'Coin Toss', description: 'The coin toss determines who receives the opening kickoff.' },
  { name: 'Overtime', description: 'The game is tied after regulation and goes to overtime.' },
  { name: 'Snap', description: 'The center snaps the ball to begin a play.' },
  { name: 'Chant', description: 'The crowd erupts in a team chant.' },
  { name: 'Injury', description: 'A player goes down with an injury.' },
];

export function getBingoItems(sport: Sport): BingoItem[] {
  switch (sport) {
    case 'soccer':
      return soccerItems;
    case 'americanFootball':
      return americanFootballItems;
    case 'baseball':
      return baseballItems;
    case 'basketball':
      return basketballItems;
    case 'rugby':
      return rugbyItems;
    case 'hockey':
      return hockeyItems;
    default:
      return soccerItems;
  }
}

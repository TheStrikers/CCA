import Organizer from "./Organizer.modal.js";
import Tournament from "./Tournament.modal.js";
import Player from './Player.modal.js'
import Team from "./Team.modal.js";
import TournamentTeam from "./TournamentTeam.modal.js";
import TeamRequest from "./TeamRequest.modal.js";
import SelectedPlayer from "./SelectedPlayer.model.js";
import Category from "./Category.modal.js";
import SubCategory from "./SubCategory.modal.js";

// ~~~~~~~~~~~~~~Tournament Model~~~~~~~~~~~~~~~~~~~~~~
Organizer.hasMany(Tournament, { onDelete: 'CASCADE', onUpdate:'CASCADE', foreignKey: 'organizer_id' }); // One to Many
Tournament.belongsTo(Organizer, { foreignKey: 'organizer_id', targetKey: 'organizer_id' });

// ~~~~~~~~~~~~~~TournamentTeam Model~~~~~~~~~~~~~~~~~~~~~~
TournamentTeam.belongsTo(Tournament, { onDelete: 'CASCADE',onUpdate:'CASCADE', foreignKey: 'tournament_id' }); // Many Teams belong to one Tournament
Team.hasMany(TournamentTeam, { foreignKey: 'team_id' });

// ~~~~~~~~~~~~~~TeamRequest Model~~~~~~~~~~~~~~~~~~~~~~
Player.belongsToMany(Team, { through: TeamRequest, onDelete: 'CASCADE',onUpdate:'CASCADE', foreignKey: 'player_id', otherKey: 'team_id' });
Team.belongsToMany(Player, { through: TeamRequest, foreignKey: 'team_id', otherKey: 'player_id' });

// ~~~~~~~~~~~~~~SelectedPlayer Model~~~~~~~~~~~~~~~~~~~~~~
SelectedPlayer.belongsTo(Player, { onDelete: 'CASCADE',onUpdate:'CASCADE', foreignKey: 'player_id' }); // Many Teams belong to one Tournament
Team.hasMany(SelectedPlayer, { foreignKey: 'team_id' });

// ~~~~~~~~~~~~~~SubCategory Model~~~~~~~~~~~~~~~~~~~~~~
Category.hasMany(SubCategory, { onDelete: 'CASCADE',onUpdate:'CASCADE', foreignKey: 'category_id' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'category_id' });

// ~~~~~~~~~~~~~~Player Model~~~~~~~~~~~~~~~~~~~~~~
SubCategory.hasMany(Player, {onDelete: 'CASCADE',onUpdate:'CASCADE', foreignKey: 'subCategory_id'});
Player.belongsTo(SubCategory, {foreignKey: 'subCategory_id'})

export { Team, Tournament, TournamentTeam, Player, Organizer }
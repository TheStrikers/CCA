import { DataTypes } from 'sequelize';
import sequelize from '../Database/db.configue.js';

const Team = sequelize.define('Teams', {
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
    , team_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    , total_player: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    , no_of_batsman: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_bowler: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_allrounder: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_wicket_keeper: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , contact: {
        type: DataTypes.STRING(10)
        , allowNull: false
    }
    , captain_name: {
        type: DataTypes.STRING
        , allowNull: false
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(res => {
        console.log('Team table created successfully');
    })
    .catch(err => {
        console.log(err, 'Something wrong in Team Table');
    });

export default Team;
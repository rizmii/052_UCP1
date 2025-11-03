

module.exports= (sequelize, DataTypes)=>{
    const Music = sequelize.define("music",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    author:{
        type:DataTypes.STRING,
    },
    tahun_terbit:{
        type: DataTypes.INTEGER,
    },
    genre:{
type:DataTypes.INTEGER,
    }

});
return Music;
}
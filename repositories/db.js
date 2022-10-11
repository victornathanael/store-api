import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_CONN_STRING, {
    dialect: 'postgres',
    define: {
        timestamps: false,
    },
});

export default sequelize;

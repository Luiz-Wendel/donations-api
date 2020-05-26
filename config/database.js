module.exports = {
  host: "localhost",
  dialect: "mysql",
  username: "root",
  port: 3306,
  password: "",
  database: "donations-api",
  define: {
    timestamps: true, // set timestamps (created_at and updated_at) for all db tables
    underscored: true, // set snake case isntead of native sequelize pascal/camel case
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

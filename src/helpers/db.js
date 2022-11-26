import Sequelize from 'sequelize'
import defineUsers from './../models/Users.js'

import { cwd } from 'process'
import { resolve } from 'path'

import chalk from 'chalk'

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: resolve(cwd(), 'database.sqlite'),
});

console.log(chalk.green('[!]'), 'Database connected!');

const Users = defineUsers(sequelize, Sequelize.DataTypes);

export { Users };
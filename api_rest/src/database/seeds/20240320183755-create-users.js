const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Luiz',
          email: 'luiz1@email.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cleber',
          email: 'cleber@email.com',
          password_hash: await bcryptjs.hash('87654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Karla',
          email: 'karla@email.com',
          password_hash: await bcryptjs.hash('12345789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down() {},
};

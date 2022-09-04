const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Maria Souza',
          email: 'maria@email.com',
          password_hash: await bcryptjs.hash('56789', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'willy',
          email: 'willy@email.com',
          password_hash: await bcryptjs.hash('2468', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],

      {},
    );
  },

  down() {},
};

const db = require('../models');

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    console.error('❌ Error en getUsers:', error.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const postUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;
    const newUser = await db.User.create({ name, email, age, comments });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('❌ Error en postUser:', error.message);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await db.User.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error('❌ Error en deleteUser:', error.message);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

module.exports = {
  getUsers,
  postUser,
  deleteUser
};

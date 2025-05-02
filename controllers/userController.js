const db = require('../models');

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error en getUsers:', error.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const postUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;
    const newUser = await db.User.create({ name, email, age, comments });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error en postUser:', error.message);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age, comments } = req.body;

    const [updated] = await db.User.update(
      { name, email, age, comments },
      { where: { id } }
    );

    if (updated) {
      const updatedUser = await db.User.findByPk(id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (

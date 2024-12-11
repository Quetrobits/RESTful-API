const users = [];

const getAllUsers = (req, res) => {
    res.status(200).json({ success: true, data: users });
  };

  const getUserById = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  };

  const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
  };

  const updateUser = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const { name, email } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    res.status(200).json({ success: true, data: user });
  };

  const deleteUser = (req, res) => {
    const index = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    users.splice(index, 1);
    res.status(200).json({ success: true, message: 'User deleted' });
  };

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
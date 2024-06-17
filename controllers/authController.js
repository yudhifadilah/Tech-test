const db = require('../config/dbConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'User registered successfully!' });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: 'User not found!' });

    const user = result[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) return res.status(401).json({ message: 'Invalid Password!' });

    const token = jwt.sign({ id: user.id, role: 'user' }, 'your_jwt_secret', { expiresIn: 86400 }); // expires in 24 hours

    res.status(200).json({ auth: true, token });
  });
};

const registerDriver = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query('INSERT INTO drivers (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Driver registered successfully!' });
  });
};

const loginDriver = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM drivers WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: 'Driver not found!' });

    const driver = result[0];
    const passwordIsValid = bcrypt.compareSync(password, driver.password);

    if (!passwordIsValid) return res.status(401).json({ message: 'Invalid Password!' });

    const token = jwt.sign({ id: driver.id, role: 'driver' }, 'your_jwt_secret', { expiresIn: 86400 }); // expires in 24 hours

    res.status(200).json({ auth: true, token });
  });
};

module.exports = { registerUser, loginUser, registerDriver, loginDriver };

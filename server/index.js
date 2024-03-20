const express = require("express");
const cors = require("cors");
const app = express();
const db=require('./database/index')
const morgan = require('morgan');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blogs');
const commentRoutes = require('./routes/comments');
// const authRoutes = require('./routes/auth'); 

app.use('/api/user', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);
// app.use('/api/auth', authRoutes); 

const port = 5000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});


//   const jwt = require('jsonwebtoken');
// const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
// const decodedToken = jwt.verify(token, 'your_secret_key');


// const bcrypt = require('bcryptjs');
// const hashedPassword = await bcrypt.hash(userPassword, 12);
// const isPasswordCorrect = await bcrypt.compare(userPassword, storedHashedPassword);

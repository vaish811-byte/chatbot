const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
];

// GET: Retrieve all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET: Retrieve a post by ID
app.get('/posts/:id', ((req, res) => {
  const post = posts.find(p => p.id == req.params.id)
  if (post) res.json(post)
  else res.status(404).json({ message: 'Post not found' })
}));

// POST: Create a new post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(3000, () => {
  console.log('API is running on http://localhost:3000');
});

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The necessity of studying",
    content: "Studying is a fundamental aspect of education, serving as the cornerstone of academic growth and intellectual development. It encompasses a diverse range of activities aimed at acquiring knowledge, understanding concepts, and mastering skills across various subjects and disciplines. Beyond memorization and rote learning, effective studying involves active engagement, critical thinking, and problem-solving. It requires discipline, persistence, and a growth mindset to navigate through challenges and setbacks. Studying not only equips individuals with factual information but also cultivates analytical abilities, creativity, and a thirst for lifelong learning. It is a dynamic process that adapts to different learning styles and preferences, encompassing methods such as reading, note-taking, research, discussion, and practical application. Ultimately, studying is a journey of exploration and discovery, empowering individuals to expand their horizons, pursue their passions, and contribute meaningfully to society.",
    author: "Mr. teacher",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Coders",
    content: "The impact of Artificial Intelligence (AI) on coders is profound and multifaceted. While some fear that AI will replace human programmers, the reality is more nuanced. AI tools and technologies are increasingly augmenting the work of coders, streamlining repetitive tasks, and enhancing productivity. For example, AI-powered code generators can assist in writing boilerplate code, debugging, and optimizing algorithms. Moreover, AI-based code analysis tools can provide valuable insights into code quality, performance, and security vulnerabilities. These advancements not only accelerate development cycles but also enable coders to focus on higher-level tasks requiring creativity, problem-solving, and domain expertise. However, as AI continues to evolve, coders must adapt by acquiring new skills and embracing interdisciplinary collaboration with AI systems. Overall, the integration of AI into the coding process holds the potential to revolutionize software development, empowering coders to build more innovative and efficient solutions.",
    author: "An analyst",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "How to live healthy ?",
    content: "Living a healthy lifestyle encompasses various aspects of physical, mental, and emotional well-being. It involves adopting habits that nourish the body, mind, and spirit. Prioritizing regular exercise, balanced nutrition, and adequate sleep forms the foundation of physical health. Incorporating a diverse range of whole foods, fruits, vegetables, lean proteins, and healthy fats into the diet promotes optimal nutrition. Additionally, staying hydrated, minimizing processed foods, and moderating alcohol and caffeine intake contribute to overall wellness. Mental health is equally important, and practices such as mindfulness, meditation, and stress management techniques help cultivate emotional resilience and inner peace. Building strong social connections, pursuing hobbies, and seeking professional support when needed foster a supportive environment for mental and emotional well-being. Ultimately, living healthy involves finding a sustainable balance that nourishes the body, nurtures the mind, and enriches the spirit, leading to a fulfilling and vibrant life.",
    author: "Dr. Mashoor Gulati",
    date: "2023-08-10T09:15:00Z",
  },
  {
    id: 4,
    title: "Increasing productivity",
    content: "Increasing productivity involves implementing strategies and adopting habits that optimize the use of time and resources to accomplish tasks more efficiently. Setting clear goals and prioritizing tasks based on their importance and urgency is essential. Effective time management techniques, such as creating schedules, setting deadlines, and breaking tasks into smaller, manageable steps, can help improve focus and productivity. Additionally, minimizing distractions, whether they are digital notifications, multitasking, or interruptions, can significantly enhance concentration and workflow. Taking regular breaks, staying organized, and delegating tasks when possible are also integral to maintaining productivity levels. Moreover, prioritizing self-care, including adequate sleep, healthy nutrition, and physical activity, is crucial for sustaining energy and mental clarity. By incorporating these practices into daily routines and continuously seeking opportunities for improvement, individuals can optimize their productivity and achieve their goals more effectively.",
    author: "Mr. Bean",
    date: "2023-08-10T09:18:00Z",
  },
  {
    id: 5,
    title: "Space Exploration",
    content: "The exploration of outer space has long captured the imagination of humanity, fueling a quest to uncover the mysteries of the cosmos and expand our understanding of the universe. From the pioneering efforts of early astronomers to the groundbreaking achievements of space agencies and private companies today, humanity's journey beyond Earth's atmosphere continues to inspire awe and wonder. Advancements in space exploration technologies have led to remarkable milestones, including the first human steps on the Moon, the launch of robotic probes to distant planets, and the establishment of space stations orbiting the Earth. Beyond scientific discovery, space exploration offers profound insights into our own planet and the delicate balance of life within the vast expanse of the cosmos. Moreover, the pursuit of space exploration fosters international collaboration, innovation, and technological advancements that benefit society as a whole, driving progress in fields such as medicine, communications, and environmental sustainability. As we look to the future, the exploration of space holds the promise of unlocking new frontiers, inspiring future generations, and reaffirming our shared humanity as inhabitants of a small, interconnected planet amidst the vastness of the universe.",
    author: "Mr. Bean",
    date: "2023-08-10T09:21:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

// GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const aPost = posts.find((post) => post.id === reqId);
  res.json(aPost);
  console.log(aPost);
});

// POST a new post
app.post("/posts", (req, res) => {
  const aPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  posts.push(aPost);
  res.json(aPost);
});

// PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const aPost = posts.find((post) => post.id === reqId);
  if(!post) return res.json( {message: "Post not found"});
  aPost.title = req.body.title;
  aPost.content = req.body.content;
  aPost.author = req.body.author;
  res.json(post);
})

//DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id ===reqId);
  if(postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.json({message: "Succesfully deleted"});
  } else {
    res.statusCode(404).json({message: "post not found"});
  }
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
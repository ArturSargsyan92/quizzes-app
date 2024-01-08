import React from "react";
import Container from "../components/Container";
import MainBackground from "../media/9344177.jpg";

export default function Home(): React.ReactElement {
  return (
    <Container className="homepage">
      <div className="app-description">
        <p>
          Welcome to
          <span>Quiz Master</span>
          , your go-to destination for creating and exploring a world of knowledge through engaging quizzes! Our React app empowers users to unleash their creativity by designing custom quizzes that cover a wide array of fascinating topics.
        </p>

        <ul>
          <li>
            <span>Create Custom Quizzes: </span>
            Dive into the realm of personalized learning by crafting quizzes tailored to your interests. Whether you&#39;re passionate about science, history, or pop culture, Quiz Master provides a versatile platform for your imagination.
          </li>
          <li>
            <span>Diverse Question Fields: </span>
            Shake up your quizzes by incorporating various question formats. From multiple-choice and true/false to open-ended questions, our app supports an array of question types, ensuring a dynamic and enriching quiz-taking experience.
          </li>
          <li>
            <span>Flexible Answer Options: </span>
            Encourage critical thinking and knowledge retention by experimenting with different answer formats. Whether it&#39;s a single correct option, multiple choices, or even a combination of both, Quiz Master accommodates your preferences.
          </li>
          <li>
            <span>User-Friendly Interface: </span>
            Our intuitive and user-friendly interface makes quiz creation a breeze. Navigate through the app effortlessly, allowing you to focus on the content and design of your quizzes without any technical hassle.
          </li>
          <li>
            <span>Learn and Share: </span>
            Quiz Master is not just a creation tool; it&#39;s a hub for knowledge sharing. Explore quizzes crafted by other users, expanding your horizons and gaining insights into diverse subjects. Share your quizzes with the community and contribute to a collective pool of educational resources.
          </li>
          <li>
            <span>Track Your Progress: </span>
            Stay informed about your quiz performance and track your progress over time. Receive detailed feedback on your quiz results, helping you identify areas for improvement and honing your knowledge in a fun and interactive way.
          </li>
          <li>
            <span>Community Engagement: </span>
            Connect with like-minded individuals who share your passion for learning. Join discussions, exchange quiz recommendations, and embark on a journey of continuous education with our vibrant Quiz Master community.
          </li>
        </ul>
      </div>
      <div className="app-main-image">
        <img src={MainBackground} alt="Quiz Maker Background" />
      </div>
    </Container>
  );
}

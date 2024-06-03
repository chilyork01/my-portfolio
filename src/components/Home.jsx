import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117233.jpg')" }}>
      <div className="container mx-auto py-10 text-center bg-white bg-opacity-50 rounded-lg p-10">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to my portfolio!</h1>
        <p className="text-white">I’m Leonardo Vergara Ibañez, a passionate computer engineering professional with a solid background and experience in various technological fields. Here, you’ll find a showcase of my courses and training sessions, designed to share my knowledge and skills in programming, software development, networking, and more. Explore my work, discover my projects, and join me on this exciting journey of innovation and continuous learning. Thank you for visiting, and feel free to contact me for any inquiries or collaborations!</p>
      </div>
    </div>
  );
};

export default Home;

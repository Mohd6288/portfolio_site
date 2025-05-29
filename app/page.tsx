import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Mohammed Alkhalifa</h1>
        <p className="text-lg mt-2 text-gray-600">
          Creative Technologist • Front-End Developer • AI & Physical Computing
        </p>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        {/* Creative Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src="/images/image_1.jpg" alt="Creative Work 1" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/images/image_2.jpg" alt="Creative Work 2" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/images/image_3.jpg" alt="Creative Work 3" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          <img src="/images/image_4.jpg" alt="Creative Work 4" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
        </div>

        <p className="text-gray-700">
          I'm a passionate Creative Computing graduate from Goldsmiths, University of London. I specialize in blending technology and design to create immersive and meaningful digital experiences. With a strong background in front-end development, AI, and physical computing, I enjoy building interactive projects that educate, engage, and inspire.
        </p>
        <p className="text-gray-700 mt-4">
          I'm particularly enthusiastic about educational technology, having led workshops for kids and developed data-driven applications. I'm always open to exciting collaborations and roles that bridge creativity with technology.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold">AI Body Tracking Installation</h2>
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/RLE4yknweZk"
              title="AI Body Tracking Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-2 text-gray-600">
            A real-time interactive art installation using MediaPipe and TouchDesigner to create immersive AI-driven experiences.
            <br />
            <a href="https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold">Arduino Pomodoro Project</h2>
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/VT0XQL8e6lo"
              title="Arduino Pomodoro Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-2 text-gray-600">
            A physical Pomodoro timer using Arduino and interactive LEDs, designed to support focused study sessions.
            <br />
            <a href="https://github.com/Mohd6288/pomodoro.git" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold">C++ DJ App</h2>
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/fomGKOAOfXk"
              title="DJ App Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-2 text-gray-600">
            A desktop DJ application developed in C++ with real-time mixing capabilities and custom UI controls.
            <br />
            <a href="https://github.com/Mohd6288/DJ_app.git" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold">Travel App Prototype (Figma UX/UI)</h2>
          <img src="/images/image_5.png" alt="Travel App Preview" className="w-full rounded mt-4" />
          <p className="mt-2 text-gray-600">
            A mobile travel companion app designed in Figma with an emphasis on intuitive UX and clean UI. The prototype guides users through trip planning, booking, and local discovery.
            <br />
            <a href="https://www.figma.com/file/your-figma-link" target="_blank" className="text-blue-600 underline">View Prototype on Figma</a>
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold">Knowledge Sharing Forum (SQL Web App)</h2>
          <img src="/images/image_6.png" alt="Knowledge Sharing App" className="w-full rounded mt-4" />
          <p className="mt-2 text-gray-600">
            A dynamic web application built with SQL and server-side scripting to help users share coding tips, ask questions, and grow a supportive learning community.
            <br />
            <a href="http://doc.gold.ac.uk/usr/700/" target="_blank" className="text-blue-600 underline">Visit Live Site</a>
          </p>
        </div>
      </section>

      {/* CV Download & Contact */}
      <section className="text-center">
        <a
          href="/Mohammed_Alkhalifa_CV_2025.pdf"
          className="text-blue-600 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My CV
        </a>

        <div className="flex justify-center gap-6 mt-4 text-gray-700">
          <a href="mailto:M.alkhalifah@hotmail.com" aria-label="Email" className="hover:text-blue-600"><Mail /></a>
          <a href="https://github.com/Mohd6288" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600"><Github /></a>
          <a href="https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600"><Linkedin /></a>
        </div>
      </section>
    </main>
  );
}

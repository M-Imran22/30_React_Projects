import { useState } from "react";

interface Tab {
  title: string;
  content: string;
}

const tabsData: Tab[] = [
  {
    title: "Home",
    content:
      "Welcome to my personal portfolio. I am a passionate developer specializing in front-end technologies and aspiring to become a full-stack engineer. Explore my skills, projects, and get in touch!",
  },
  {
    title: "Skills",
    content:
      "I possess expertise in HTML5, CSS3, JavaScript (ES6+), React.js, and Node.js. My proficiency also extends to database management with MYSQL DB and using Git for version control. I am constantly learning new technologies and best practices.",
  },
  {
    title: "Projects",
    content:
      "This section showcases my key projects, including an e-commerce platform built with MERN stack, a real-time chat application using Socket.io, and a responsive portfolio website developed with Gatsby. Each project highlights my problem-solving abilities and technical skills.",
  },
  {
    title: "Contact",
    content:
      "Feel free to reach out via email(muhammadimrann80055@gmail.com), phone, or LinkedIn. I am open to new opportunities, collaborations, and discussions about the latest tech trends. Let's connect and build something amazing together!",
  },
];

function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleOnClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex border-b justify-center ">
        {tabsData.map((tab, index) => (
          <button
            className={`px-8 py-4 border-b-3 transition-all duration-300 ease-in-out mx-2 rounded-t-md cursor-pointer
              ${
                activeTabIndex === index
                  ? "border-blue-500 bg-gray-100 font-bold text-blue-500"
                  : "border-transparent bg-transparent font-normal text-gray-600"
              }`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-8 bg-gray-100 rounded-b-md shadow-md min-h-[200px]">
        <p className="leading-relaxed text-gray-800 m-0 text-lg">
          {tabsData[activeTabIndex].content}
        </p>
      </div>
    </div>
  );
}

export default Tabs;

import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-start">
      <ProfileCard
        name="M Imran"
        title="Web Developer"
        imageUrl="https://i.dawn.com/primary/2023/06/2717425376c8833.webp"
        bio=" Learning React the smart way. Building 30 projects in 30 days!"
      />
      <ProfileCard
        name="Ananya Pandey"
        title="App Developer"
        imageUrl="https://www.thecelebrays.com/wp-content/uploads/2024/04/1698638254_Ananya-Panday-Ananya-Panday-has-made-so-much-wealth-at.jpg"
        bio=" Learning React the smart way. Building 30 projects in 30 days!"
      />
    </div>
  );
};

export default App;

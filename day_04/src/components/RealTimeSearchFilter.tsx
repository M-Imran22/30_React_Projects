import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
}

const Data: Person[] = [
  { id: 1, name: "Hamza" },
  { id: 2, name: "Imran" },
  { id: 3, name: "Ammar" },
  { id: 4, name: "Aish" },
  { id: 5, name: "Anas" },
  { id: 6, name: "Asim" },
  { id: 7, name: "Emma" },
  { id: 8, name: "Jonh" },
];

function RealTimeSearchFilter() {
  const [Search, setSearch] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const FilteredData = Data.filter(
    (person) =>
      Search === "" || person.name.toLowerCase().includes(Search.toLowerCase())
  );
  return (
    <div className=" max-w-md mx-auto mt-10">
      <input
        className=" w-full p-3 rounded-xl border shadow-sm focus:ring"
        type="text"
        placeholder="Search Filter..."
        onChange={handleOnChange}
      />
      <p className="my-5 font-bold">Result: </p>
      <ul>
        {FilteredData.map((person) => (
          <li
            className="p-3 border rounded-xl bg-gray-50 hover:bg-gray-100 
                         transition shadow-sm cursor-pointer m-2"
            key={person.id}
          >
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeSearchFilter;

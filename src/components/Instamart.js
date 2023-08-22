import { useState } from "react";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>

      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible("")}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(id)}
        >
          Show
        </button>
      )}
      {/* {isVisible && <p>{description}</p>} */}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        id={"about"}
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
      <Section
        id={"teams"}
        title={"Teams Instamart"}
        description={"This is the teams section of Instamart"}
        isVisible={visibleSection === "teams"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
      <Section
        id={"careers"}
        title={"Careers Instamart"}
        description={"This is the careers section of Instamart"}
        isVisible={visibleSection === "careers"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
    </div>
  );
};

export default Instamart;

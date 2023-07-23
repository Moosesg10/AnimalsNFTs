import React, { useEffect, useRef, useState } from "react";
import ContentLore from "../components/ThePaper/ContentLore";
import Content from "../components/ThePaper/Content";
import DIVS from "../components/ThePaper/StylePaper";

const initialState = [
  {
    name: "",
    id: "",
    description: "",
    button: "",
  },
];



const ThePaper = () => {
  const [contents, setContents] = useState(initialState);
  const [scrolls, setScrolls] = useState(0);
  useEffect(() => {
    setContents(Content);
  }, []);

    const Divs = useRef(null)




useEffect(() => {
  
  Divs.current.addEventListener("scroll", () => {
    let scroll = Divs.current.scrollTop;
    setScrolls(scroll);
    
  });
}, [])


  const handleScroll = (down) => {
    if (down) {
     Divs.current.scrollTop= scrolls + 253;
      setScrolls(scrolls + 253);
    } else {
     Divs.current.scrollTop= 0
      setScrolls(0);
    }
  };

 

  return (
    <div style={{  display: "flex", justifyContent: "center", alignItems: "center",height:"100vh", margin:"-5rem auto"}} >
      <DIVS ref={Divs} >
        {contents.map((content) => (
          <ContentLore
            key={content.id}
            data={content}
            handleScroll={handleScroll}
            scroll={scrolls}
          />
        ))}
      </DIVS>
    </div>
  );
};

export default ThePaper;

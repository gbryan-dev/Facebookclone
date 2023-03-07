import React from "react";

const StoryIMG = (props) => {
  const style = {
    backgroundImage: `url(${props.imageUrl.storyImg})`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const handleHover = () => {
    style.transform = "scale(1.2)";
  };
  const handleLeave = () => {
    style.transform = "scale(1)";
  };

  return (
    <div
      style={style}
      className="storycon"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}></div>
  );
};

export default StoryIMG;

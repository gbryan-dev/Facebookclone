import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as SvgREACT } from "../IMAGES/react.svg";
import StoryIMG from "./StoryIMG";

import "../STYLESHEETS/HomeContent.css";
import CPCOMPONENT from "./CPCOMPONENT";

const Home = () => {
  const MYIMAGE = require("../IMAGES/USERS/1.jpg");

  const scrollRef = useRef(null);
  const rellsRef = useRef(null);

  const [prevBTN, setPrevBTN] = useState(false);
  const [nextBTN, setNextBTN] = useState(true);
  const [prevBTN2, setPrevBTN2] = useState(false);
  const [nextBTN2, setNextBTN2] = useState(true);

  const handleScrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -570,
      behavior: "smooth",
    });
  };

  const handleScrollRight = (ref) => {
    ref.current.scrollBy({
      left: 570,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current.scrollLeft > 0) {
        setPrevBTN(true);
      } else {
        setPrevBTN(false);
      }

      const isAtEnd =
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth;

      if (isAtEnd) {
        setNextBTN(false);
      } else {
        setNextBTN(true);
      }
    };

    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollRef.current]);

  useEffect(() => {
    const handleScroll = () => {
      if (rellsRef.current.scrollLeft > 0) {
        setPrevBTN2(true);
      } else {
        setPrevBTN2(false);
      }

      const isAtEnd =
        rellsRef.current.scrollLeft + rellsRef.current.clientWidth >=
        rellsRef.current.scrollWidth;

      if (isAtEnd) {
        setNextBTN2(false);
      } else {
        setNextBTN2(true);
      }
    };

    rellsRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (rellsRef.current) {
        rellsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [rellsRef.current]);

  const plusIcon = {
    backgroundImage:
      "url('https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/TA56SPvhkEv.png?_nc_eui2=AeG8db9KNJ4lOn-aHkniLMDHlU_k3epkaVeVT-Td6mRpV1fAr3ijSBrEjRYl36wAl2ezqBGirOufp97q3Co8e98I')",
    backgroundPosition: "0 -1011px",
    backgroundSize: "auto",
    width: "20px",
    height: "20px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    filter: "invert(1)",
  };

  const woymflexbtn = [
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/7eXHSxNctm8.png?_nc_eui2=AeEjpNZif93Ju7SHXoWOYMmOdbOFd6FUk4h1s4V3oVSTiBFOUY4bf6vyIFhwZSbP5KmK8xE3rcLIgMQw1BcgwDs-",
      iconPosition: "0 -25px",
      label: "Live video",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/7eXHSxNctm8.png?_nc_eui2=AeEjpNZif93Ju7SHXoWOYMmOdbOFd6FUk4h1s4V3oVSTiBFOUY4bf6vyIFhwZSbP5KmK8xE3rcLIgMQw1BcgwDs-",
      iconPosition: "0 -100px",
      label: "Photo/video",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/7eXHSxNctm8.png?_nc_eui2=AeEjpNZif93Ju7SHXoWOYMmOdbOFd6FUk4h1s4V3oVSTiBFOUY4bf6vyIFhwZSbP5KmK8xE3rcLIgMQw1BcgwDs-",
      iconPosition: "0 -50px",
      label: "Feeling/activity",
    },
  ];

  const FriendsList = [
    {
      name: "Fayeeeee ✨",
      img: require("../IMAGES/FRIENDS/FAYEEEEE.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/11.jpg"),
      rellsView: "8.2M",
    },
    {
      name: "John Smith",
      img: require("../IMAGES/FRIENDS/MAN1.jpg"),
      myDay: false,
    },
    {
      name: "Emily Jones",
      img: require("../IMAGES/FRIENDS/WOMAN1.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/2.jpg"),
      rellsView: "5.1M",
    },
    {
      name: "Jessica Davis",
      img: require("../IMAGES/FRIENDS/WOMAN2.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/3.jpg"),
      rellsView: "4.8M",
    },
    {
      name: "Emily Smith",
      img: require("../IMAGES/FRIENDS/WOMAN6.png"),
      myDay: false,
    },

    {
      name: "Christopher Johnson",
      img: require("../IMAGES/FRIENDS/MAN3.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/4.jpg"),
      rellsView: "1.4M",
    },
    {
      name: "Sarah Wilson",
      img: require("../IMAGES/FRIENDS/WOMAN3.jpeg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/5.jpg"),
      rellsView: "6.4M",
    },

    {
      name: "James Rodriguez",
      img: require("../IMAGES/FRIENDS/MAN6.jpg"),
      myDay: false,
    },

    {
      name: "David Thompson",
      img: require("../IMAGES/FRIENDS/MAN4.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/6.jpg"),
      rellsView: "6.1M",
    },
    {
      name: "Elizabeth Rodriguez",
      img: require("../IMAGES/FRIENDS/WOMAN4.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/7.jpg"),
      rellsView: "7.3M",
    },
    {
      name: "Grace Lee",
      img: require("../IMAGES/FRIENDS/WOMAN7.jpg"),
      myDay: false,
    },
    {
      name: "Matthew Lee",
      img: require("../IMAGES/FRIENDS/MAN5.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/8.jpg"),
      rellsView: "3.5M",
    },
    {
      name: "Olivia Davis",
      img: require("../IMAGES/FRIENDS/WOMAN5.jpeg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/9.jpg"),
      rellsView: "7.5M",
    },
    {
      name: "Michael Johnson",
      img: require("../IMAGES/FRIENDS/MAN7.jpg"),
      myDay: false,
    },
    {
      name: "Ethan White",
      img: require("../IMAGES/FRIENDS/MAN8.jpg"),
      myDay: true,
      storyImg: require("../IMAGES/STORIES-REELS/10.jpg"),
      rellsView: "3.5M",
    },
  ];

  const GC = [
    {
      name: "IT223 - IT2R1 Web Systems",
      img: require("../IMAGES/FRIENDS/IT223.jpg"),
    },
    {
      name: "MONGODB DEVELOPERS PH",
      img: require("../IMAGES/FRIENDS/MONGO.png"),
    },
    {
      name: "EXPRESS DEVELOPERS PH",
      img: require("../IMAGES/FRIENDS/EXPRESS.png"),
    },
    {
      name: "REACT JS DEVELOPERS PH",
      img: require("../IMAGES/FRIENDS/REACT.png"),
    },
    {
      name: "NODE JS DEVELOPERS PH",
      img: require("../IMAGES/FRIENDS/NODE.jpg"),
    },
  ];

  const shortcuts = [
    {
      name: "Bryan G - Portfolio",
      img: require("../IMAGES/BGLOGO.jpg"),
    },
    {
      name: "MongoDB Phillipines",
      img: require("../IMAGES/FRIENDS/MONGO.png"),
    },
    {
      name: "ExpressJS Phillipines",
      img: require("../IMAGES/FRIENDS/EXPRESS.png"),
    },
    {
      name: "ReactJS Phillipines",
      img: require("../IMAGES/FRIENDS/REACT.png"),
    },
    {
      name: "NodeJS Phillipines",
      img: require("../IMAGES/FRIENDS/NODE.jpg"),
    },
  ];

  const loadings = [{ id: 1 }, { id: 2 }];

  const storells = [
    {
      id: 1,
      icon: (
        <g fill-rule="evenodd" transform="translate(-446 -350)">
          <path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path>
        </g>
      ),
      name: "Stories",
    },
    {
      id: 2,
      icon: (
        <g fill-rule="evenodd" transform="translate(-446 -350)">
          <path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 .167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z"></path>
        </g>
      ),
      name: "Reels",
    },
    {
      id: 3,
      icon: (
        <g fill-rule="evenodd" transform="translate(-446 -350)">
          <path d="M457.25 361H455v2.25a1 1 0 0 1-2 0V361h-2.25a1 1 0 0 1 0-2H453v-2.25a1 1 0 0 1 2 0V359h2.25a1 1 0 0 1 0 2m8.241-5.889a.962.962 0 0 0-.998.063L462 356.938v-1.188a2.754 2.754 0 0 0-2.75-2.75h-10.5a2.754 2.754 0 0 0-2.75 2.75v8.5a2.754 2.754 0 0 0 2.75 2.75h10.5a2.754 2.754 0 0 0 2.75-2.75v-1.188l2.503 1.77a.953.953 0 0 0 .988.057.95.95 0 0 0 .509-.841v-8.096a.95.95 0 0 0-.509-.841"></path>
        </g>
      ),
      name: "Rooms",
    },
  ];

  const [activeButtonId, setActiveButtonId] = useState(1);

  function handleClick(buttonId) {
    setActiveButtonId(buttonId);
  }

  return (
    <>
      <CPCOMPONENT />

      <div className="container">
        <div className="leftSide">
          <div className="leftCon">
            <div
              className="imgME"
              style={{ backgroundImage: `url(${MYIMAGE})` }}></div>
            <span className="span15">ィ Bryan</span>
          </div>
          <div className="leftCon">
            <div>
              <i
                data-visualcompletion="css-img"
                className=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/HkYcIGDQ3nj.png?_nc_eui2=AeG4CygLWydJZ9D2Lc0zfeBQlb4TGHJJxfSVvhMYcknF9BXbM6V9pQ_vBXw_4Ps3lfZeu65TSJILl4vqe9jBE0xh')",
                  backgroundPosition: "0 -296px",
                  backgroundSize: "37px 555px",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              />
            </div>
            <span className="span15">Friends</span>
          </div>
          <div className="leftCon">
            <div>
              <i
                data-visualcompletion="css-img"
                className=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png?_nc_eui2=AeGsP_S4IhaSWYI8Se2gFMhkfLDZqXVQ6A98sNmpdVDoD4_RbX8Q84lRaazntsWQI1Jy6EToI8dTxsthkZBcgy1N')",
                  backgroundPosition: "0 -518px",
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              />
            </div>
            <span className="span15">Watch</span>
          </div>
          <div className="leftCon">
            <div>
              <img
                draggable="false"
                height="36"
                width="36"
                alt=""
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeEOB8MMuetMGpeTQTksZK9gi9AM8exRZGeL0Azx7FFkZ1ayVKqUUIYLeEvYQ3VPFRoJ4hqzMiQDNkarCkVY3Q--"
              />
            </div>
            <span className="span15">Most Recent</span>
          </div>
          <div className="leftCon">
            <div>
              <i
                data-visualcompletion="css-img"
                className=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png?_nc_eui2=AeGsP_S4IhaSWYI8Se2gFMhkfLDZqXVQ6A98sNmpdVDoD4_RbX8Q84lRaazntsWQI1Jy6EToI8dTxsthkZBcgy1N')",
                  backgroundPosition: "0 -74px",
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              />
            </div>
            <span className="span15">Groups</span>
          </div>
          <div className="leftCon">
            <div>
              <i
                data-visualcompletion="css-img"
                className=""
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png?_nc_eui2=AeGsP_S4IhaSWYI8Se2gFMhkfLDZqXVQ6A98sNmpdVDoD4_RbX8Q84lRaazntsWQI1Jy6EToI8dTxsthkZBcgy1N')",
                  backgroundPosition: "0 -407px",
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              />
            </div>
            <span className="span15">Marketplace</span>
          </div>

          <div className="leftCon">
            <div className="SeeMore">
              <svg
                fill="#E7E9ED"
                viewBox="0 0 16 16"
                width="20px"
                height="20px"
                class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <path
                    fill-rule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                </g>
              </svg>
            </div>
            <span className="span15">See more</span>
          </div>
          <div className="separator"></div>
          <div style={{ marginBottom: "14px" }}></div>
          <span
            className="span17"
            style={{ color: "rgb(176,179,184)", marginLeft: "8px" }}>
            Your shortcuts
          </span>
          <div style={{ marginBottom: "8px" }}></div>
          {shortcuts?.map((sc) => (
            <div className="leftCon" style={{ height: "53px", padding: "8px" }}>
              <div
                className="ShortcutIMG"
                style={{ backgroundImage: `url(${sc.img})` }}></div>
              <span className="span15">{sc.name}</span>
            </div>
          ))}
          <div className="leftCon">
            <div className="SeeMore">
              <svg
                fill="#E7E9ED"
                viewBox="0 0 16 16"
                width="20px"
                height="20px"
                class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <path
                    fill-rule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                </g>
              </svg>
            </div>
            <span className="span15">See more</span>
          </div>
          <div className="copyright">
            <div className="footer_copyright">
              <div>
                Made with &nbsp;
                <SvgREACT
                  style={{ height: "35px", width: "35px" }}
                  className="sol-icon"
                />
                <span className="sl-footer-links__marked-text">
                  &nbsp; by Bryan G
                </span>
              </div>
              Invest in your future
            </div>
          </div>
        </div>

        <div className="main">
          <div className="maincontainer">
            <div className="storells">
              {storells.map((storell) => (
                <>
                  <div
                    className={activeButtonId === storell.id ? "active" : ""}
                    onClick={() => handleClick(storell.id)}>
                    <svg
                      fill={
                        activeButtonId === storell.id
                          ? "#2374E1"
                          : "rgb(176,179,184)"
                      }
                      viewBox="0 0 20 20"
                      width="20px"
                      height="20px">
                      {storell.icon}
                    </svg>

                    <span
                      style={{
                        color:
                          activeButtonId === storell.id
                            ? "rgb(46, 137, 255)"
                            : "rgb(176,179,184)",
                      }}>
                      {storell.name}
                    </span>
                  </div>
                </>
              ))}
            </div>

            <div
              className="stories"
              ref={scrollRef}
              style={{ display: activeButtonId === 1 ? "flex" : "none" }}>
              {prevBTN && (
                <button
                  onClick={() => handleScrollLeft(scrollRef)}
                  className="Prev">
                  <svg
                    fill="#B8BBBF"
                    viewBox="0 0 20 20"
                    width="24px"
                    height="24px"
                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                    <path d="M12.2 4.53 6.727 10l5.47 5.47a.75.75 0 0 1-1.061 1.06l-6-6a.751.751 0 0 1 0-1.06l6-6A.75.75 0 1 1 12.2 4.53z"></path>
                  </svg>
                </button>
              )}

              {nextBTN && (
                <button
                  onClick={() => handleScrollRight(scrollRef)}
                  className="Next">
                  <svg
                    fill="#B8BBBF"
                    viewBox="0 0 20 20"
                    width="24px"
                    height="24px"
                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                    <path d="M7.8 4.53 13.273 10 7.8 15.47a.75.75 0 0 0 1.061 1.06l6-6a.751.751 0 0 0 0-1.06l-6-6A.75.75 0 0 0 7.8 4.53z"></path>
                  </svg>
                </button>
              )}
              <div className="createStory">
                <div className="createStoryPic">
                  <div style={{ backgroundImage: `url(${MYIMAGE})` }}></div>
                </div>
                <div className="storyName">Create story</div>
                <div className="createStoryPlus">
                  <svg
                    fill="#E6E6E6"
                    viewBox="0 0 20 20"
                    width="22px"
                    height="22px"
                    className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <g fillRule="nonzero">
                        <path
                          d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                          transform="translate(354.5 159.5)"></path>
                        <path
                          d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                          transform="translate(354.5 159.5)"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              {FriendsList?.filter((friend) => friend.myDay === true).map(
                (story) => (
                  <>
                    <div className="storycon">
                      <div
                        className="storyIMG"
                        style={{
                          backgroundImage: `url(${story.storyImg})`,
                          backgroundSize: "cover",
                        }}></div>
                      <div className="storyCover">
                        <div
                          className="storyOwner"
                          style={{
                            backgroundImage: `url(${story.img})`,
                            backgroundSize: "cover",
                          }}></div>
                        <div className="storyName">{story.name}</div>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>

            <div
              ref={rellsRef}
              className="stories"
              style={{ display: activeButtonId === 2 ? "flex" : "none" }}>
              {prevBTN2 && (
                <button
                  onClick={() => handleScrollLeft(rellsRef)}
                  className="Prev">
                  <svg
                    fill="#B8BBBF"
                    viewBox="0 0 20 20"
                    width="24px"
                    height="24px"
                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                    <path d="M12.2 4.53 6.727 10l5.47 5.47a.75.75 0 0 1-1.061 1.06l-6-6a.751.751 0 0 1 0-1.06l6-6A.75.75 0 1 1 12.2 4.53z"></path>
                  </svg>
                </button>
              )}

              {nextBTN2 && (
                <button
                  onClick={() => handleScrollRight(rellsRef)}
                  className="Next">
                  <svg
                    fill="#B8BBBF"
                    viewBox="0 0 20 20"
                    width="24px"
                    height="24px"
                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                    <path d="M7.8 4.53 13.273 10 7.8 15.47a.75.75 0 0 0 1.061 1.06l6-6a.751.751 0 0 0 0-1.06l-6-6A.75.75 0 0 0 7.8 4.53z"></path>
                  </svg>
                </button>
              )}
              {FriendsList?.filter((friend) => friend.myDay === true)
                .map((story) => (
                  <>
                    <div className="storycon">
                      <div
                        className="storyIMG"
                        style={{
                          backgroundImage: `url(${story.storyImg})`,
                          backgroundSize: "cover",
                        }}></div>
                      <div className="storyCover">
                        <div className="storyName">
                          <i
                            data-visualcompletion="css-img"
                            style={{
                              backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/bA8kGV30kDs.png?_nc_eui2=AeFIrZtfJnuvO6TjyswGg4JTGKLkCK27tPIYouQIrbu08knGpz1qxtLKrTWa6sXK6kXQ_gcPwhwHI78olvUeMZdb")',
                              backgroundPosition: "-17px -473px",
                              filter: "invert(100)",
                              backgroundSize: "auto",
                              width: "12px",
                              height: "12px",
                              backgroundRepeat: "no-repeat",
                              display: "inline-block",
                              marginRight: "4px",
                            }}
                          />
                          <span>{story.rellsView}</span>
                        </div>
                      </div>
                    </div>
                  </>
                ))
                .reverse()}
            </div>
          </div>

          <div className="mainpad">
            <div className="woym">
              <div
                className="imgME"
                style={{ backgroundImage: `url(${MYIMAGE})` }}></div>
              <div className="woymtext">What's on your mind?</div>
            </div>
            <div className="woymflex">
              {woymflexbtn?.map((item, index) => (
                <div className="woymbtn" key={index}>
                  <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                      backgroundImage: `url('${item.icon}')`,
                      backgroundPosition: item.iconPosition,
                      backgroundSize: "auto",
                      width: "24px",
                      height: "24px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  />
                  <div
                    className="span15"
                    style={{
                      width: "auto",
                      color: "rgb(176,179,184)",
                      margin: "0px",
                      opacity: ".8",
                      marginLeft: "8px",
                    }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {loadings?.map((loadd) => (
            <div className="loadingpost" key={loadd.id}>
              <div>
                <div className="imgME"></div>
                <div className="loadingtext"></div>
              </div>
              <div className="loadingbtn">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightSide">
          <span className="span17">Sponsored</span>
          <div className="sponsored">
            <div className="sponimg">
              <img src={require("../IMAGES/BGLOGO.jpg")} />
            </div>
            <div className="spontext">
              <div className="span15" style={{ marginLeft: "5px" }}>
                Bryan G - Portfolio
              </div>
              <div
                className="span13"
                style={{ marginLeft: "5px", marginTop: "0px" }}>
                gbryan-dev.github.io/portfolio
              </div>
            </div>
          </div>

          <div
            className="sponsored"
            style={{ marginTop: "0px", marginBottom: "10px" }}>
            <div className="sponimg">
              <img src={require("../IMAGES/USTP.jpg")} />
            </div>
            <div className="spontext">
              <div className="span15" style={{ marginLeft: "5px" }}>
                USTP - CDO
              </div>
              <div
                className="span13"
                style={{ marginLeft: "5px", marginTop: "0px" }}>
                ustp.edu.ph/cdeo/
              </div>
            </div>
          </div>

          <div
            className="Rightseparator"
            style={{ marginBottom: "10px", marginRight: "0px" }}></div>
          <span className="span17" style={{ color: "rgb(176,179,184)" }}>
            Birthdays
          </span>
          <div className="leftCon" style={{ marginTop: "5px" }}>
            <div>
              <i
                className="x1b0d499 xl1xv1r"
                data-visualcompletion="css-img"
                style={{
                  height: "36px",
                  width: "36px",
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/f_VTqUovrMH.png?_nc_eui2=AeGNTOrHDusJP0rzUux7MwtS__LUnX3kUaL_8tSdfeRRou92TUDHMA6hYogPA6pqKXzqIj_i819TcXG3Hz9sCtib')",
                  backgroundPosition: "0 0",
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              />
            </div>
            <div className="birthdays">
              <a>Elizabeth Rodriguez</a> and <a>Christopher Johnson</a> have
              birthdays today.
            </div>
          </div>
          <div
            className="Rightseparator"
            style={{ marginBottom: "10px" }}></div>
          <div className="Contacts">
            <span className="span17" style={{ color: "rgb(176,179,184)" }}>
              Contacts
            </span>
            <div className="contactIcons">
              <div>
                <svg
                  fill="#B8BABF"
                  viewBox="0 0 16 16"
                  width="16px"
                  height="16px"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od">
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path>
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  fill="#B8BABF"
                  viewBox="0 0 16 16"
                  width="16px"
                  height="16px"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od">
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <g fill-rule="nonzero">
                      <path
                        d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                        transform="translate(448 544)"></path>
                      <path
                        d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                        transform="translate(448 544)"></path>
                      <path
                        d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                        transform="translate(448 544)"></path>
                      <path
                        d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                        transform="translate(448 544)"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  fill="#B8BABF"
                  viewBox="0 0 20 20"
                  width="20px"
                  height="20px"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo">
                  <g fill-rule="evenodd" transform="translate(-446 -350)">
                    <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {FriendsList?.map((fr) => (
            <div
              className="leftCon"
              key={fr.name}
              style={{ opacity: "0.5", marginLeft: "3px" }}>
              <div
                className="imgME"
                style={{
                  backgroundImage: `url(${fr.img})`,
                  border: fr.myDay ? "3px solid #18191A" : "none",
                  outline: fr.myDay ? "2px solid #2E89FF" : "none",
                  transform: fr.myDay ? "scale(.9)" : "scale(1)",
                }}></div>
              <span className="span15">{fr.name}</span>
            </div>
          ))}

          <div
            className="Rightseparator"
            style={{ marginBottom: "10px", marginRight: "0px" }}></div>

          <span className="span17" style={{ color: "rgb(176,179,184)" }}>
            Group conversations
          </span>
          <div style={{ marginBottom: "5px" }}></div>
          {GC?.map((groupC) => (
            <div
              className="leftCon"
              key={groupC.name}
              style={{ opacity: "0.5", marginLeft: "3px" }}>
              <div
                className="ShortcutIMG"
                style={{
                  backgroundImage: `url(${groupC.img})`,
                  borderRadius: "100%",
                }}></div>
              <span className="span15">{groupC.name}</span>
            </div>
          ))}
          <div className="leftCon">
            <div className="SeeMore">
              <i style={plusIcon} data-visualcompletion="css-img" />
            </div>
            <span className="span15">Create new group</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

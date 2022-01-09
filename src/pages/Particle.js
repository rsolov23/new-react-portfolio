import Particles from "react-tsparticles";
import styled from "styled-components";

const ParticleContainer = styled.div`
  z-index: -1;
`;
const ParticleBackground = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#212529",
            },
          },
          fullScreen: {
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              opacity: 0.4,
            },
            // move: {
            //   attract: {
            //     rotate: {
            //       x: 600,
            //       y: 600,
            //     },
            //   },
            //   enable: true,
            //   outModes: {
            //     bottom: "out",
            //     left: "out",
            //     right: "out",
            //     top: "out",
            //   },
            //   random: true,
            //   speed: 1,
            // },
            number: {
              density: {
                enable: true,
              },
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
      />
    </ParticleContainer>
  );
};
export default ParticleBackground;

// "background": {
//     "color": {
//       "value": "#000000"
//     },
//     "position": "50% 50%",
//     "repeat": "no-repeat",
//     "size": "cover"
//   },
//   "interactivity": {
//     "events": {
//       "onClick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "onHover": {
//         "mode": "repulse"
//       }
//     },
//     "modes": {
//       "bubble": {
//         "distance": 400,
//         "duration": 2,
//         "opacity": 0.8,
//         "size": 40
//       },
//       "grab": {
//         "distance": 400
//       },
//       "push": {
//         "groups": [
//           "z5000",
//           "z7500",
//           "z2500",
//           "z1000"
//         ]
//       }
//     }
//   },
//   "particles": {
//     "color": {
//       "animation": {
//         "h": {
//           "speed": 20
//         }
//       }
//     },
//     "groups": {
//       "z5000": {
//         "number": {
//           "value": 70
//         },
//         "zIndex": {
//           "value": 50
//         }
//       },
//       "z7500": {
//         "number": {
//           "value": 30
//         },
//         "zIndex": {
//           "value": 75
//         }
//       },
//       "z2500": {
//         "number": {
//           "value": 50
//         },
//         "zIndex": {
//           "value": 25
//         }
//       },
//       "z1000": {
//         "number": {
//           "value": 40
//         },
//         "zIndex": {
//           "value": 10
//         }
//       }
//     },
//     "links": {
//       "color": {
//         "value": "#ffffff"
//       },
//       "opacity": 0.4
//     },
//     "move": {
//       "angle": {
//         "value": 10
//       },
//       "attract": {
//         "rotate": {
//           "x": 600,
//           "y": 1200
//         }
//       },
//       "direction": "right",
//       "enable": true,
//       "path": {},
//       "outModes": {
//         "bottom": "out",
//         "left": "out",
//         "right": "out",
//         "top": "out"
//       },
//       "speed": 5,
//       "spin": {}
//     },
//     "number": {
//       "value": 200
//     },
//     "opacity": {
//       "animation": {
//         "speed": 3,
//         "minimumValue": 0.1
//       }
//     },
//     "size": {
//       "animation": {}
//     },
//     "zIndex": {
//       "value": 5,
//       "opacityRate": 0.5
//     }
//   },
//   "emitters": {
//     "autoPlay": true,
//     "fill": true,
//     "life": {
//       "wait": false
//     },
//     "rate": {
//       "quantity": 1,
//       "delay": 7
//     },
//     "shape": "square",
//     "startCount": 0,
//     "size": {
//       "mode": "percent",
//       "height": 0,
//       "width": 0
//     },
//     "particles": {
//       "shape": {
//         "type": "images",
//         "options": {
//           "images": {
//             "src": "https://particles.js.org/images/cyan_amongus.png",
//             "width": 500,
//             "height": 634
//           }
//         }
//       },
//       "size": {
//         "value": 40
//       },
//       "move": {
//         "speed": 10,
//         "outModes": {
//           "default": "none",
//           "right": "destroy"
//         },
//         "straight": true
//       },
//       "zIndex": {
//         "value": 0
//       },
//       "rotate": {
//         "value": {
//           "min": 0,
//           "max": 360
//         },
//         "animation": {
//           "enable": true,
//           "speed": 10,
//           "sync": true
//         }
//       }
//     },
//     "position": {
//       "x": -5,
//       "y": 55
//     }
//   }

import React from "react";
import { HeaderStyles } from "../../styles/HeaderStyles";
// import Particle from "../../pages/Particle";
import image from "../../assets/images/fdev.svg";
import {
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
export default function Header() {
  var Text = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  Text.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-words");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new Text(elements[i], JSON.parse(toRotate), period);
      }
    }
  };
  return (
    <HeaderStyles>
    
      {/* <Flex>
        <Box w="70px">
          <Stack spacing={6}>
            <Heading as="h2" size="xl" pl={125}>
              Hello World!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </Heading>
            <Heading as="h2" size="xl" pl={125}>
              I'm Rachel Solov
            </Heading>
            <Heading as="h2" size="xl" pl={125}>
              <div className="animation_text">
                <span
                  class="typewrite"
                  data-period="2000"
                  data-words='[ " Developer", " Designer", " Creator"]'
                ></span>{" "}
              </div>
            </Heading>
          </Stack>
        </Box>
        <Spacer />
        <Box w="170px">
          <Stack>
            <Image src={image} alt="web-developer" />
          </Stack>
        </Box>
      </Flex> */}
      {/* <div>
        <h1>
          Hello World!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
// 👋🏻
          </span>
        </h1>
      </div>
      <div>
        <h1>I'm Rachel Solov</h1>
      </div>
      <div class="animation_text">
        <h1>
          <span
            class="typewrite"
            data-period="2000"
            data-words='[ " Developer", " Designer", " Creator"]'
          ></span>{" "}
        </h1>
      </div>
      <img src={image} alt="" /> */}
    </HeaderStyles>
  );
}

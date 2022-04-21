import React from "react"
import styled, { keyframes } from "styled-components"
import illustration from "../../static/images/illustrations/illustration-1.png"
import Circles from "../animations/Circles"

function CourseCard() {
  return (
    <Wrapper className="course-card">
      <AnimationWrapper>
        <Circles />
      </AnimationWrapper>
      <Illustration src={illustration} alt="illustration" />
    </Wrapper>
  )
}

export default CourseCard

const scale = keyframes`
0% { transform: scale(1)}
100% { transform: scale(1.03)}
`

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 360px;
  width: 100%;
  height: 480px;
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
  justify-content: center;
  align-content: center;
`

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;

  :hover {
    animation: ${scale} 0.5s 0.1s linear forwards;
    animation-play-state: running, paused, running;
    overflow: hidden;
  }
`

const Illustration = styled.img`
  width: 300px;
`

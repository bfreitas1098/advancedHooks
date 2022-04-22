import React from "react"
import styled from "styled-components"
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
  transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-5px);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  }
`

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;
`

const Illustration = styled.img`
  width: 300px;
`

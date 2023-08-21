import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          create your 
          <br />
          tech world
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi,
          iure blanditiis quod nesciunt officia quia rerum nulla, consectetur
          beatae, quos suscipit. Alias cum praesentium vitae magnam et laborum
          distinctio.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="img" className="main-img"/>
        <img src={heroBcg2} alt="img" className="accent-img"/>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
export default Hero;

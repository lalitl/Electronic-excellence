import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex, et reprehenderit nobis eaque minima, id deleniti soluta necessitatibus inventore ea explicabo maxime! Quam excepturi quo consequuntur neque accusamus harum, mollitia dolor at eaque sint quae tempora quisquam autem adipisci vel ea nesciunt suscipit ducimus, iure non! Aperiam, alias a?</p>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;

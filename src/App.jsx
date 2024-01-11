import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/ZyM8qZG-bLA3yd9N/scene.splinecode"
      />
      <Content>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice, and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
      </Content>
      ing Storing unlimited media files Of took:s iS waiting Sin the priva
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@1,700&family=Spline+Sans:wght@400;600;700&display=swap");

  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;
const Content = style.div`
  position: absolute;
  top: 30px;
  h1 {
    font-family: 'Spline Sans Mono', monospace; 
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  h1, p {
    margin: 0 30px 0 100px;
  }
`;

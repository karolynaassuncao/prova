import styled from "styled-components"

export const Container = styled.div`

  h2 {
    margin-top: 20px;
    color: #707070;
    text-transform: uppercase;
  }

  .photo-gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 15px 0;
  }

  .photo-gallery a {
    max-width:  400px;
    height: auto;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 5px;
  }

  .photo-gallery img {
    width: 100%;
    height: auto;
  }

  .titulo-texto {
    padding: 10px 0;
    background: #e81f76;
  }

  .titulo-texto h2 {
    text-align: center;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }
  .texto {
    margin: 40px 0;
  }
  .texto p {
    width: 80%;
    margin: 0 auto;
    text-align: justify;
    padding-top: 20px;
  }

  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .titulo-video {
    padding: 10px 0;
    background: transparent linear-gradient(93deg,#00adbb,#4dc5cf) 0 0 no-repeat padding-box;
    width: 100%;
    margin-bottom: 20px;
  }

  .titulo-video h2 {
    text-align: center;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }

  .video-container {
    position: relative;
    overflow: hidden;
    width: 80%;
    padding-top: 56.25%;

  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
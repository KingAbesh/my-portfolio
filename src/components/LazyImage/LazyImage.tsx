import React from "react";
import styled, { keyframes } from "styled-components";
import LazyLoad from "react-lazyload";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #D5ECFF;
  }
  50% {
    background-color: #E6F2FC;
  }
  100% {
    background-color: #D5ECFF;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FunctionComponent<LazyImageProps> = ({ src, alt }) => {
  const refPlaceholder = React.useRef<HTMLDivElement>();

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder as React.RefObject<HTMLDivElement>} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;

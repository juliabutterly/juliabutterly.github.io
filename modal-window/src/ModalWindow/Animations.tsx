import { css, keyframes } from "styled-components";

export const overlayAppearFrames = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const overlayAppear = () => css`
  ${overlayAppearFrames} 0.3s 1 ease;
`;

export const modalAppearWideFrames = keyframes`
  0% {
    transform: scale(0.95, 0.95) translate(0, 10vh);
    opacity: 0.4;
  }
  100% {
    transform: scale(1, 1) translate(0, 0);
    opacity: 1;
  }
`;

export const modalAppearWide = () => css`
  ${modalAppearWideFrames} 0.2s 1 ease;
`;

export const modalAppearNarrowFrames = keyframes`
  0% {
    transform: translate(0, 10vh);
    opacity: 0.4;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export const modalAppearNarrow = () => css`
  ${modalAppearNarrowFrames} 0.3s 1 ease;
`;

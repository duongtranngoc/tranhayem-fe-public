import { keyframes } from "@mui/system";

export const waveAnimation = keyframes`
  0%, 60%, 100% {
      transform: rotate(0deg);
  }
  10%, 30% {
      transform: rotate(16deg);
  }
  20% {
      transform: rotate(-8deg);
  }
  40% {
      transform: rotate(-4deg);
  }
  50% {
      transform: rotate(12deg);
  }
`;

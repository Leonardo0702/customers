import styled from "styled-components";

interface IContentOutlet {
  isOpen: boolean;
}

export const ContentOutlet = styled.div<IContentOutlet>`
  flex: 1 1 0%;
  flex-direction: column;
  max-width: calc(100vw - ${({ isOpen }) => (isOpen ? "70px" : "0px")});
  margin-left: ${({ isOpen }) => (isOpen ? "40px" : "300px")};
  transition: all 0.3s ease-out 0s;
  margin-top: 50px;
  padding: 2rem;
  min-width: 280px;
  height: 100%;
  box-sizing: border-box;
  position: inherit;
  z-index: 0;

  @media (max-width: 760px) {
    max-width: 100vw;
  }
`;

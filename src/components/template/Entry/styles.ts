import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  .css-26l3qy-menu {
    z-index: 6 !important;
  }
`

interface IHeaderImageProps {
  brand: string
}

export const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.action.close};
  /* border-bottom: 1px solid #091c17; */
  color: #00518c;
`

export const ContentImageMenu = styled.div`
  display: flex;
  gap: 9.5rem;
`

export const ContainerImage = styled.div`
  padding-left: 1rem;
`

export const HeaderImage = styled.div<IHeaderImageProps>`
  background-image: url(${({ brand }) => brand});
  width: 150px;
  height: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContainerTheme = styled.div`
  padding-right: 1rem;
`

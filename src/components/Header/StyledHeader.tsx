import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background: #085385;
  padding: 20px 0;
  
  .logoWrapper {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 40px;
    margin-right: 15px;
  }
  
  .logoName {
    font-family: 'Gilroy', Arial;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: white;
  }
`
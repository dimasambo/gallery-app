import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-around;
  transition: .1s;
  cursor: pointer;
  
  a {
    text-decoration: none;
    
    .cardWrapper {
      display: flex;
      flex-direction: column;

      .cardImgBox {

        img {
          width: 320px;
          border-radius: 12px;
        }
      }

      .cardNameBox {
        width: 320px;
        margin-top: 15px;
        overflow-x: hidden;

        span {
          font-family: 'Gilroy', Arial;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;

          color: #085385;
        }
      }
    }
  }
`
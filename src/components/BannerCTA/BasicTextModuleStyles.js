import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
    }
  }

  .flex {
    display: block;
    padding: 80px 0;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: flex;
      padding: 0;
    }

    .text-part {
      width: 100%;
      margin-left: 0;
      padding: 0;

      @media (min-width: 768px) {
        padding: 80px 0;
        width: 90%;
        margin-left: 10%;
      }
    }
  }
`

import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
    }

    .text-part {
      width: 100%;
      margin-right: 0;
      padding: 0;

      @media (min-width: 768px) {
        padding: 80px 0;
        width: 90%;
        margin-right: 10%;
      }
    }
  }

  .flex {
    display: block;
    align-items: center;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`

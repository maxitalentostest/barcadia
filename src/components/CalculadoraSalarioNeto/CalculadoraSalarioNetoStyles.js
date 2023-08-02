import styled from "styled-components"

export const CalculadoraSalarioNetoStyles = styled.section`
  max-width: 750px;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  input {
    /* height: calc(var(--gap) * 2); */
    margin-bottom: var(--gap);
  }

  input,
  textarea {
    background-color: #000;
    color: #fff;
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: outline 0.3s ease;

    &:focus {
      outline: 2px solid var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: var(--gap);
  }

  .salary-button {
    font-size: 16px !important;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.6px;
    text-align: left;
    text-align: center;
    color: #fff !important;
    display: inline-block;
    width: 145px;
    height: 40px;
    border-radius: 8px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-right: 29px;
    border: none;
    cursor: pointer;
    background: darkgray;
  }

  .check {
    width: auto;
    height: auto;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }

  .button-active {
    background: #14bcc1;
    /* outline: rgba(255, 255, 255, 0.15) solid 2px; */
  }

  .salary-submit {
    font-size: 16px !important;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.6px;
    text-align: left;
    text-align: center;
    color: #fff !important;
    display: inline-block;
    width: 145px;
    height: 55px;
    border-radius: 8px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-left: 29px;
    border: none;
    cursor: pointer;
    background: #14bcc1;
  }

  .results2 {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .results1 {
    display: none;
  }
  .results1 {
    @media (min-width: 768px) {
      display: block;
    }
  }
`

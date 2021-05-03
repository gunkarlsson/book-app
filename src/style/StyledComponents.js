import styled from "styled-components";

//---------------------------------- SECTIONS --------------------------------
export const PrimarySection = styled.section`
  height: 92vh;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.bgColor2};
  color: ${(props) => props.theme.fontColor1};
  position: absolute;
`;

export const SecondarySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//----------------------------------- TEXT ELEMENTS ----------------------------------
export const PrimaryH1 = styled.h1`
  text-align: center;
  margin-top: 80px;
  font-family: "Amiri";
  font-size: 2.2rem;
`;

export const SecondaryH1 = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-family: "Amiri";
  font-size: 2.2rem;
`;

export const PrimaryLink = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 15px 0;
  width: 80vw;
  display: block;
  color: black;

  a {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-bottom: 2px solid black;
    padding-bottom: 5px;
  }
`;

//----------------------------------- FORMS ----------------------------------
export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpdateProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 30px 0;

  .form-control {
    position: relative;
    margin: 20px 0;
    width: 100%;
  }

  .form-control input {
    background: none;
    border: none;
    border-bottom: 2px solid black;
    display: block;
    width: 100%;
    padding: 10px 0;
    font-size: 1.5rem;
    outline: none;
  }
  .form-control input:focus,
  .form-control input:valid {
    outline: none;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    color: #a5a5a5;
  }

  .form-control label span {
    display: inline-block;
    font-size: 1.2rem;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.65, 0.01, 0.35, 1);
  }
  .form-control input:focus + label span,
  .form-control input:valid + label span {
    transform: translateY(-35px);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  width: 80%;
  height: 50px;
  position: relative;
  overflow: hidden;
  margin: 30px 0;

  input {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 5px;
    outline: none;
  }
  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    pointer-events: none;
    border-bottom: 1px solid black;
  }
  label::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid black;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  label span {
    position: absolute;
    bottom: 6px;
    left: 0;
    transition: all 0.3s ease;
  }
  input:focus + label span,
  input:valid + label span {
    transform: translateY(-150%);
  }

  input:focus + label::after,
  input:valid + label::after {
    transform: translateX(0%);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 6px;
  }
  /* button:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  } */
`;

//----------------------------------- BOOK GRID ----------------------------------
export const ResultGrid = styled.section`
  /* border: 1px solid blue; */
  padding: 0 20px;
  max-height: 80vh;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 0.5rem; */
  overflow: scroll;
`;

export const ItemCard = styled.section`
  display: flex;
  flex-direction: column;
  background-color: none;
  overflow: hidden;
  width: 180px;

  .image-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 180px;
    width: 165px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }

  img {
    height: 70%;
    background-color: #ddd;
  }

  .text-div {
    margin: 10px 0 20px 5px;
    text-align: left;
    max-width: 95%;
  }

  span {
    font-weight: 400;
  }

  h2 {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

//----------------------------------- BUTTONS ----------------------------------
export const BackButton = styled.button`
  background: none;
  border: none;
  margin-left: 30px;
  margin-top: 30px;
`;

export const PrimaryButton = styled.button`
  background: none;
  font-size: 1.2rem;
  border: 2px solid black;
  width: 80%;
  margin-top: 50px;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  background: none;
  font-size: 1.2rem;
  border: 2px solid black;
  width: 100%;
  margin-top: 50px;
  padding: 10px;
`;

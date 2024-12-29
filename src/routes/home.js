import styled from "styled-components";
import MenuButton from "../components/Button";
import Button from "../components/Button";
import Title from "../components/title";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Title />

      <MenuButton text="어떻게 만들어요?" move="how-to-make" />
      <MenuButton text="만들러 가기" move="make" />
      <MenuButton text="틱택토 게임" move="game" />
    </div>
  )
}
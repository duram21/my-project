import styled from "styled-components";
import PostForm from "../components/post-form";
import Timeline from "./timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

export default function Notice(){
  return (
    <Wrapper>
      <PostForm />
      <Timeline />
    </Wrapper>

  )
}
import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  gap: 1.5rem 0;
  margin: 1rem;

  strong {
    font-size: 1.25rem;
    align-self: start;
  }

  span {
    font-size: 0.85rem;
    font-weight: normal;
  }

  p {
    font-size: 0.85rem;
    display: inline-block;
  }
`;

export const BoxAviso = styled.div`
  width: 100%;
  max-width: 55rem;
  background: ${({ theme }) => theme.colors.primaria[500]};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: default;

  h2 {
    margin-bottom: 0.25rem;
  }
`;

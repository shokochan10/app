import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: #222633;
  width: 100%;
  margin: 2rem;
`;

export const ContentHeader = styled.header`
  width: 90%;
  padding-bottom: 5rem;
  margin: 4rem auto 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #58365d;
`;

export const ContentHeaderText = styled.p`
  font-size: 3rem;
  color: #fff;
`;

export const ContentHeaderButton = styled.button`
  padding: 0.5rem 3.5rem;
  color: #fff;
  background: linear-gradient(#e765fe, #9758fe);
  border-radius: 0.5rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

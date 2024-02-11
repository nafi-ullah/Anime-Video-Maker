
import hackpic from './assets/hackpic.jpeg';
import styled from 'styled-components';

const COVER_SIZE = 500;

const Cover = styled.div`
    width: ${COVER_SIZE}px;
    box-shadow: 0 0 8px black;
   
`;

export const Album: React.FC<{
 
}> = () => {

  return <img src={hackpic} style={{width: COVER_SIZE }}/>;
};
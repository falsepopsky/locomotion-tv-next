import styled from 'styled-components';
import Image from 'next/image';
import { Timer } from './svgs/Svgs';
import PropTypes from 'prop-types';

const ContainerCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0.5vh 2vw;
  margin-bottom: 6px;
`;

const CardImage = styled.div`
  min-width: 102px;
  max-width: 102px;
  min-height: 156px;
  max-height: 156px;
  position: relative;

  .img-banner {
    border-radius: 6px;
    pointer-events: none;
    user-select: none;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 100%;
  min-height: 156px;
  max-height: 156px;
  margin-left: 1vw;
  padding-left: 2vw;
  background: #18191c;
  border-radius: 12px;
  overflow: hidden;
  overflow-wrap: break-word;

  &:hover {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.7);
  }
`;

const Title = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #f5f5f5;

  &::selection {
    text-shadow: none;
    background: rgba(37, 100, 255, 0.15);
  }

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

const SinopsisContainer = styled.div`
  overflow: hidden auto;
  height: 50px;
  scrollbar-width: thin;
`;

const Text = styled.p`
  margin: ${(props) => (props.sinopsis ? '0' : '0 0 0 1vw')};
  color: ${(props) => (props.sinopsis ? '#bdbdbd' : '#9e9e9e')};
  font-weight: ${(props) => (props.sinopsis ? '300' : '400')};
  font-size: ${(props) => (props.sinopsis ? '16px' : '14px')};

  &::selection {
    text-shadow: none;
    background: rgba(37, 100, 255, 0.15);
  }

  @media (min-width: 576px) {
    font-size: ${(props) => (props.sinopsis ? '18px' : '16px')};
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: max-content;
  background: #323234;
  border-radius: 6px;
  padding: 2px 10px;

  .timer-svg {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 576px) {
    .timer-svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const GuideCard = ({ name, image, sinopsis }) => {
  return (
    <ContainerCard>
      <CardImage>
        <Image
          className="img-banner"
          alt={name}
          src={'/banners/' + image}
          layout="fill"
          objectFit="fill"
        />
      </CardImage>
      <CardInfo>
        <Title>{name}</Title>
        <SinopsisContainer>
          <Text sinopsis>{sinopsis}</Text>
        </SinopsisContainer>
        <TimerContainer>
          <Timer />
          <Text>19:00 - 19:30</Text>
        </TimerContainer>
      </CardInfo>
    </ContainerCard>
  );
};

GuideCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  sinopsis: PropTypes.string,
};

export default GuideCard;

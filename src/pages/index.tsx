import Meta from 'component/head';
import Player from 'component/player/index';
import { GuideContainer, Main } from 'component/ui';
import Motion from 'component/ui/motion';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ContainerGuide = dynamic(() => import('component/guide'));

const Home: NextPage = () => {
  return (
    <Motion>
      <Meta />
      <Main>
        <Player />
        <GuideContainer>
          <ContainerGuide />
        </GuideContainer>
      </Main>
    </Motion>
  );
};

export default Home;

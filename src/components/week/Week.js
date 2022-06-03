// Libs
import useSWRImmutable from 'swr/immutable';
import { formatTime } from '../../utils/luxonModule';
import { fetcher } from '../../utils/fetcher';

// Component
import { WrapperSlider, ContainerDay, DayName, SmallCard, TextCard } from './Week.style';
import Slider from '../carrousel/Carrousel';
import { Spinner } from '../loader/LoaderStyles';

const Week = () => {
  const URL_GUIDE = '/api/guide/';

  const { data, error } = useSWRImmutable(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <WrapperSlider>
      <Slider>
        {data.map((dat) => {
          return (
            <ContainerDay key={dat.id}>
              <DayName>{dat.day}</DayName>

              {dat.shows.map((show) => {
                const start = formatTime(show.start);
                const end = formatTime(show.ending);

                return (
                  <SmallCard key={show.id}>
                    <TextCard time>
                      {start} - {end}
                    </TextCard>

                    <TextCard>{show.name}</TextCard>
                  </SmallCard>
                );
              })}
            </ContainerDay>
          );
        })}
      </Slider>
    </WrapperSlider>
  );
};

export default Week;

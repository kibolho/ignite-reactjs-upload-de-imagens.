import { Box, Button } from '@chakra-ui/react';

import { CardList } from '../components/CardList';
import CardsServices from '../services/cards';
import { Error } from '../components/Error';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { useInfiniteQuery } from 'react-query';
import { useMemo } from 'react';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    CardsServices.fetch,
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.after;
      },
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    return data?.pages
      .map(card => {
        return card.data;
      })
      .flat();
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return <Loading />;
  }

  // TODO RENDER ERROR SCREEN
  if (isError) {
    return <Error />;
  }
  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button mt="40px" type="button" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}

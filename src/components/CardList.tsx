import { SimpleGrid, useDisclosure } from '@chakra-ui/react';

import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';
import { useState } from 'react';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageUrl, setImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (imgUrl: string): void => {
    setImageUrl(imgUrl);
    onOpen();
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} gap="40px">
        {cards &&
          cards.map(card => (
            <Card
              viewImage={() => handleViewImage(card.url)}
              key={card.id}
              data={card}
            />
          ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={imageUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

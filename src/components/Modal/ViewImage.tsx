import {
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxW="900px" maxH="600px" p="0">
          <Image src={imgUrl} />
        </ModalBody>
        <ModalFooter
          borderRadius="0px 0px 6px 6px"
          justifyContent="flex-start"
          backgroundColor="pGray.800"
        >
          <Link href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

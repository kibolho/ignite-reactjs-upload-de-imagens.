import { Card } from '../models/card';
import { ImageFormData } from '../models/imageFormData';
import { api } from './api';

type FetchResponse = {
  data: Card[];
  after: string | null;
};
interface UploadParams extends ImageFormData {
  imageUrl: string;
}

const CardsServices = {
  async fetch({ pageParam = null }): Promise<FetchResponse> {
    if (pageParam) {
      const response = await api.get('/api/images', {
        params: {
          after: pageParam,
        },
      });

      return response.data;
    }

    const response = await api.get('/api/images');

    return response.data;
  },
  async upload(image: UploadParams) {
    const response = await api.post('/api/images', {
      title: image.title,
      description: image.description,
      url: image.imageUrl,
    });

    return response.data;
  },
};
export default CardsServices;

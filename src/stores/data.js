import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('data', {
  state: () => ({
    postersList: [],
  }),
  actions: {
    async getPostersImgList() {
      try {
        const response = await axios.get(
          'https://api.movielab.media/api/v1/catalog/posters'
        );

        if (response.data && response.data.results) {
          this.postersList = response.data.results;
        } else {
          console.log('Свойство results не найдено в ответе.');
          return null;
        }
      } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        return null;
      }
    },
  },
});

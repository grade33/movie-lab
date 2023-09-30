import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('data', {
  state: () => ({
    postersList: null,
    mobileData: null,
    tvData: null,
  }),
  actions: {
    async setPostersImgList() {
      this.postersList = await this.getPostersImgList();
    },
    async getPostersImgList() {
      try {
        const response = await axios.get(
          'https://api.movielab.media/api/v1/catalog/posters'
        );

        if (response.data && response.data.results) {
          return response.data.results;
        } else {
          console.log('Свойство results не найдено в ответе.');
          return null;
        }
      } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        return null;
      }
    },

    async setMobileData() {
      this.mobileData = await this.getItemData(
        'https://api.movielab.media/api/v1/app-version?version_type=mobile'
      );
    },
    async setTvData() {
      this.tvData = await this.getItemData(
        'https://api.movielab.media/api/v1/app-version?version_type=tv'
      );
    },
    async getItemData(path) {
      try {
        const response = await axios.get(path);
        if (response.data && response.data.result) {
          return response.data.result;
        } else {
          console.log('Свойство results не найдено в ответе.');
          return [];
        }
      } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        if (error.response) {
          console.error('Ошибка от сервера:', error.response.data);
        }
        return [];
      }
    },
  },
});

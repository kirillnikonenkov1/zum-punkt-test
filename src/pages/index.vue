<script>
import sliderYear from '../components/sliderYear.vue'
import slider from "../components/slider.vue";
export default {
  components: {
    sliderYear,
    slider,
  },
  data() {
    return {
      slideData: {
        year: {
          currentYear: 2018
        },
        content: {
          2018: '',
        }
      },
    };
  },
  methods: {
    status(response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response);
    },
    json(response) {
      return response.json()
    }
  },
  created() {
    fetch('http://www.mocky.io/v2/5e493a1b30000069008c2d1c')
      .then(this.status)
      .then(this.json)
      .then((data) => {
        this.slideData = data;
      })
      .catch(function (error) {
        console.log('error', error);
      });
  }
};
</script>

<style lang="scss">
  @import "../assets/scss/utils/mixins";
  @import "../assets/scss/utils/vars";
  .slider {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: block;
      height: 324px;
      width: 101%;
      background: {
        color: #EFF8FF;
      };
      @media (min-width: $tableWidth) {
        height: 240px;
      }
    }
    &__container {
      @include cnt($max-width: $tableWidth, $padding: 40px 5% 0 5%);
      @media (min-width: $tableWidth) {
        @include cnt($max-width: $desktopWidth, $padding: 40px 30px 0 30px);
      }
    }
    &__header {
      @media (min-width: $phoneWidth) {
        display: flex;
        justify-content: space-between;
        margin: {
          bottom: 35px;
        };
      }
      @media (min-width: $smDesktopWidth) {
        margin: {
          bottom: 30px;
        };
      }
    }
    &__title {
      margin: {
        bottom: 17px;
      };
      font: {
        size: 21px;
      };
      line-height: 25px;
      color: #1F1F1F;
      @media (min-width: $phoneWidth) {
        margin: {
          bottom: 0;
        };
      }
      @media (min-width: $tableWidth) {
        font: {
          size: 24px;
        };
      }
      @media (min-width: $smDesktopWidth) {
        font: {
          size: 36px;
        };
        line-height: 42px;
      }
    }
    &__pagination {
      padding: {
        top: 30px;
        bottom: 40px;
      };
      @media (min-width: $tableWidth) {
        padding: 25px 0;
      }
    }
  }
  .pagination {

    &__list {
      display: flex;
      justify-content: center;
      @media (min-width: $tableWidth) {
        display: none;
      }
    }
    &__item {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: {
        color: #CECECE;
      };
      &:nth-child(-n + 2) {
        margin: {
          right: 13.5px;
        };
      }
      &--active {
        background: {
          color: #44A3A3;
        };
      }
    }
  }
</style>

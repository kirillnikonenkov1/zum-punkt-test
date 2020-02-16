<template>
  <div>
    <ul class="slider-benefits">
      <li
        :class="[item.id === sliderInfo.activeElem ? 'slider-benefits__item slider-benefits__item--active' : '', 'slider-benefits__item']"
          v-for="item in sliderInfo.elems"
          @click="changeRelatedText(item)">
        <p class="slider-benefits__promo-txt">{{ item.promo }}</p>
        <div class="slider-benefits__img-wrapper">
          <img :src="'../assets/img/' + item.img + '.svg'" alt="" class="slider-benefits__img">
        </div>
        <p class="slider-benefits__num">{{item.hint}}</p>
        <p class="slider-benefits__text">{{item.text}}</p>
      </li>
    </ul>
    <div class="slider-benefits__related-text" v-text="this.sliderInfo.startRelatedText"></div>
  </div>
</template>

<script>
  export default {
    props: ['sliderInfo'],
    data() {
      return {
        relatedText: '',
      }
    },
    computed: {

    },
    methods: {
      changeRelatedText(item) {
        this.sliderInfo.startRelatedText = item.relatedText;
        if (document.documentElement.clientWidth >= 1024) {
          this.sliderInfo.activeElem = item.id;
        }
      },
      myEventHandler(e) {
        if (document.documentElement.clientWidth <= 1024) {
          this.sliderInfo.activeElem = '';
        }
      }
    },
    created() {
      window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars";
.slider-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: {
    bottom: 50px;
  };
  color: #424242;
  @media (min-width: $tableWidth) {
    justify-content: center;
    margin: {
      bottom: 0;
    };
  }
  @media (min-width: $smDesktopWidth) {
    justify-content: space-between;
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: {
      image: url("../assets/img/a.png");
    };
  }
  &__item {
    flex: 0 0 45%;
    max-width: 161px;
    padding: {
      top: 13px;
      bottom: 15px;
      left: 4px;
      right: 5px;
    };
    background: {
      color: #fff;
    };
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    word-break: break-word;
    transition: transform ease 1s;
    @media (min-width: 580px) {
      flex: 0 0 22%;
    }
    @media (min-width: $tableWidth) {
      flex: 1 0 22%;
      max-width: 262px;
    }
    @media (min-width: $smDesktopWidth) {
      padding: {
        bottom: 30px;
        top: 36px;
        left: 40px;
        right: 40px;
      };
    }
    &:nth-child(2n - 1) {
      margin: {
        right: 20px;
      };
      @media (min-width: 580px) {
        margin: {
          right: 0;
        };
      }
    }
    &:nth-child(-n + 2) {
      margin: {
        bottom: 20px;
      };
      @media (min-width: 580px) {
        margin: {
          bottom: 0;
        };
      }
    }
    &:nth-child(-n + 3) {
      @media (min-width: 580px) {
        margin: {
          right: 20px;
        };
      }
    }
    &--active {
      transform: translateY(30px);
    }
  }
  &__promo-txt {
    display: none;
    @media (min-width: $smDesktopWidth) {
      position: relative;
      display: block;
      margin: {
        bottom: 30px;
      };
      font: {
        size: 24px;
      };
      line-height: 1;
      color: #1F1F1F;
      text-align: center;
      word-break: keep-all;
      &::after {
        position: absolute;
        bottom: -15px;
        left: calc(50% - 76px);
        content: '';
        display: block;
        height: 1px;
        width: 152px;
        background: {
          color: #FFD600;
        };
      }
    }
  }
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 64px;
    margin: {
      bottom: 14px;
    };
    @media (min-width: $smDesktopWidth) {
      display: none;
    }
  }
  &__img {

  }
  &__num {
    line-height: 1.2;
    font: {
      weight: 500;
    };
    text-align: center;
    @media (min-width: $tableWidth) {
      font: {
        size: 18px;
      }
    }
    @media (min-width: $smDesktopWidth) {
      font: {
        size: 36px;
      };
    }
  }
  &__text {
    font: {
      size: 12px;
    };
    line-height: 1.2;
    text-align: center;
    @media (min-width: $tableWidth) {
      font: {
        size: 14px;
      };
    }
    @media (min-width: $smDesktopWidth) {
      font: {
        size: 18px;
      };
    }
  }
  &__related-text {
    margin: {
      left: -7%;
      right: -7%;
      top: -160px;
    };
    padding: {
      left: 17%;
      right: 12%;
      top: 160px;
      bottom: 40px;
    };
    background: {
      image: url("../assets/img/background.jpg");
      repeat: no-repeat;
      size: cover;
      position: 0 80%;
    };
    font: {
      size: 14px;
    }
    @media (min-width: 580px) {
      background: {
        position: 0 100%;
      };
    }
    @media (min-width: $tableWidth) {
      margin: {
        top: -75px;
        left: 0;
        right: 0;
      };
      padding: {
        top: 105px;
        left: 41px;
        right: 41px;
      };
      font: {
        size: 16px;
      };
    }
    @media (min-width: $smDesktopWidth) {
      margin: {
        top: -87px;
      };
        padding: {
          left: 68px;
          right: 98px;
          top: 135px;
        };
    }

  }
}
</style>


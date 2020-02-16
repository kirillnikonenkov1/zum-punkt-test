<template>
  <div class="year-slider__wrapper">
    <button class="year-slider__swipe year-slider__swipe--left" @click="yearMinus"></button>
    <ul class="year-slider">
      <li class="year-slider__item">
        <button class="year-slider__btn" @click="yearMinus" v-show="this.info.year.currentYear > this.info.year.firstYear" v-text="this.info.year.currentYear - 1">
        </button>
      </li>
      <li class="year-slider__item">
        <button class="year-slider__btn year-slider__btn--active" @click="setYear" v-text="this.info.year.currentYear">
        </button>
      </li>
      <li class="year-slider__item">
        <button class="year-slider__btn" @click="yearPlus" v-show="this.info.year.currentYear < this.info.year.lastYear" v-text="this.info.year.currentYear + 1">
        </button>
      </li>
    </ul>
    <button class="year-slider__swipe year-slider__swipe--right" @click="yearPlus"></button>
  </div>
</template>
<script>
import slider from "../components/slider.vue"
export default {
  props: ['info'],
  components: {
    slider,
  },
  data() {
    return {
    };
  },
  methods: {
    yearPlus() {
      this.info.year.currentYear = (this.info.year.currentYear + 1 > this.info.year.lastYear) ? this.info.year.currentYear :
          this.info.year.currentYear + 1;
      this.info.content[info.year.currentYear].activeElem = '';
    },
    yearMinus() {
      this.info.year.currentYear = (this.info.year.currentYear - 1 < this.info.year.firstYear) ? this.info.year.currentYear :
        this.info.year.currentYear - 1;
      this.info.content[info.year.currentYear].activeElem = '';
    },
    setYear() {

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars";
.year-slider {
  display: flex;
  justify-content: space-between;
  width: 190px;
  margin: {
    left: auto;
    right: auto;
    bottom: 17px;
  };
  @media (min-width: $phoneWidth) {
    margin: {
      bottom: 0;
    };
  }
  @media (min-width: $tableWidth) {
    margin: {
      right: 56px;
    };
  }
  &__wrapper {
    position: relative;
  }
  &__swipe {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: -7px;
    width: 36px;
    height: 36px;
    padding: 0;
    background: {
      color: transparent;
    };
    outline: none;
    border-radius: 50%;
    border: 1.5px solid rgba(68, 109, 145, 0.2);
    @media (min-width: $tableWidth) {
      display: block;
    }
    &::before,
    &::after {
      position: absolute;
      top: 25%;
      right: 50%;
      display: block;
      content: '';
      width: 2px;
      height: 10px;
      background: {
        color: #446D91;
      };
      transform: rotate(45deg);
    }
    &--left {
      left: -56px;
      &::before {
      }
      &::after {
        top: 43%;
        transform: rotate(-45deg);
      }
    }
    &--right {
      right: 0;
      &::before,
      &::after {
        left: 50%;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        top: 43%;
        transform: rotate(45deg);
      }
    }
  }
  &__item {
    flex: 0 0 33%;
    &:nth-child(2) {
        text-align: center;
    }
    &:last-child {
      text-align: right;
    }
  }
  &__btn {
    padding: 0;
    background: {
      color: transparent;
    };
    border: none;
    font: {
      size: 14px;
    };
    line-height: 16px;
    color: #C4C4C4;
    &--active {
      font: {
        size: 20px;
      };
      line-height: 23px;
      color: #424242;
      @media (min-width: $tableWidth) {
        font: {
          weight: 500;
        };
      }
    }
  }
}
</style>

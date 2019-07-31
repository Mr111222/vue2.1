<script>
  export default {
    name: 'v-clock',
    props: {
      size: {
        type: Number,
        default: () => 110
      }
    },
    data: () => ({ time: new Date(), isRunning: false }),
    computed: {
      fontSize () {
        const size = this.size / 300 * 16
        return size > 0.12 ? `${size / 100}rem` : '.12rem'
      },
      scales () {
        const radius = this.size / 2 * 0.8
        const arr = []
        for (let i = 1; i <= 12; i++) {
          const radian = 30 * Math.PI / 180 * i - 0.5 * Math.PI
          const left = radius * Math.cos(radian) + this.size * 0.45
          const top = radius * Math.sin(radian) + this.size * 0.45
          arr.push({
            num: '·',
            left: `${left.toFixed(2) / 100}rem`,
            top: `${top.toFixed(2) / 100}rem`
          })
        }
        return arr
      },
      hourHand () {
        const hourDeg = 30 * (this.time.getHours() % 12)
        const minuteDeg = 0.5 * this.time.getMinutes()
        return `translate(-50%, 0) rotate(${hourDeg + minuteDeg - 180}deg)`
      },
      minuteHand () {
        const minuteDeg = 6 * this.time.getMinutes()
        const secondDeg = 0.1 * this.time.getSeconds()
        return `translate(-50%, 0) rotate(${minuteDeg + secondDeg - 180}deg)`
      },
      secondHand () {
        return `translate(-50%, -10%) rotate(${6 * this.time.getSeconds() - 180}deg)`
      }
    },

    mounted () {
      this.isRunning = true
      const tick = () => {
        if (!this.isRunning) {
          return
        }
        this.time = new Date()
        const timer = setTimeout(() => {
          clearTimeout(timer)
          tick()
        }, 1000)
      }
      tick()
    },
    destroyed () {
      this.isRunning = false
    }
  }
</script>

<template>
  <div
    :style="{width:`${size / 100}rem`,height:`${size / 100}rem`}"
  >
    <div class="white-dail">
        <span
          v-for="(v,index) in scales"
          :key="index"
          class="degree-scale"
          :style="{left:v.left,top:v.top,fontSize}"
        >{{v.num}}</span>
      <b class="hour-hand" :style="{transform:hourHand}"></b>
      <b class="minute-hand" :style="{transform:minuteHand}"></b>
      <b class="second-hand" :style="{transform:secondHand}"></b>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .white-dail {
   position: relative;
   width: 94%;
   height: 94%;
   border: .02rem solid rgba(245, 246, 255, 0.75);
   border-radius: 50%;
   //transform:scale(.5) ;
 }

 .degree-scale {
   position: absolute;
   display: block;
   color: #fffdff;
   width: 2em;
   height: 2em;
   text-align: center;
   line-height: 2;
   transform: translate(-50%, -50%) scale(2);
 }

 .hour-hand,
 .minute-hand,
 .second-hand {
   position: absolute;
   top: 50%;
   left: 50%;
 }

 .hour-hand {
   width: 2.5%;
   height: 30%;
   background-color: white;
   transform-origin: 50% 0;
   transform: translate(-50%, 0) rotate(0);
   &::after {
     position: absolute;
     top: 0;
     left: 50%;
     display: block;
     content: '';
     width: 200%;
     padding-top: 200%;
     border-radius: 50%;
     background-color: #000;
     transform: translate(-50%, -50%);
   }
 }

 .minute-hand {
   width: 2%;
   height: 40%;
   background-color: rgba(255, 255, 255, 0.95);
   transform-origin: 50% 0;
   transform: translate(-50%, 0) rotate(0);
 }

  $second-color: rgb(246, 249, 255);
 .second-hand{
    width: 2%;
   height: 50%;
   background-color: red;
   transform-origin: 50% 10%;
   transform: translate(-50%, -10%) rotate(0);
   &::after {
     position: absolute;
     top: 10%;
     left: 50%;
     display: block;
     content: '';
     width: 300%;
     padding-top: 300%;
     border-radius: 50%;
     background-color:red;
     transform: translate(-50%, -50%);
   }
 }

</style>

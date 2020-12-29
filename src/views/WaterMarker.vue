<template>
  <div></div>
</template>

<script>

export default {
  name: 'WaterMarker',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () {
    const watermakr = document.createElement('div')
    watermakr.className = 'watermark'
    watermakr.style.backgroundImage = `url(${this.createWaterMark2()})`
    document.body.appendChild(watermakr)
  },
  mounted () {
    /* 
         *cavans绘制水印
       */
    // const watermakr = document.createElement('div');
    // watermakr.className = 'watermark';
    // watermakr.style.backgroundImage = `url(${this.createWaterMark1()})`
    // document.body.appendChild(watermakr);

    /* 
         *svg绘制水印 
        */

  },
  watch: {

  },
  methods: {
    // createWaterMark1 () {
    //   const angle = -20;
    //   const txt = 'lemon'
    //   const canvas = document.createElement('canvas');
    //   canvas.width = 180;
    //   canvas.height = 100;
    //   const ctx = canvas.getContext('2d');
    //   ctx.clearRect(0, 0, 180, 100);
    //   ctx.fillStyle = '#000';
    //   ctx.globalAlpha = 0.3;
    //   ctx.font = `26px serif`
    //   ctx.rotate(Math.PI / 180 * angle);
    //   ctx.fillText(txt, 0, 50);
    //   return canvas.toDataURL();
    // },
    createWaterMark2 () {
      const svgStr =
        `<svg xmlns="http://www.w3.org/2000/svg" width="180px" height="100px">
      <text x="0px" y="30px" dy="16px"
      text-anchor="start"
      stroke="#000"
      stroke-opacity="0.3"
      fill="none"
      transform="rotate(-20)"
      font-weight="100"
      font-size="16"
      >
       lemon
      </text>
    </svg>`;
      return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    }
  },
  beforeDestroy () {
    document.body.removeChild(document.body.children[4])
  }
}
</script>
<style lang='less' >
.watermark {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  background-repeat: repeat;
}
</style>

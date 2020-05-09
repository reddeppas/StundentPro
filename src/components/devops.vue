<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Devops</h1>
    <p>Welcome to XpertDevOps. DevOps is vast topic and there is no clear defination. We wanted to help you understand on core components of DevOps</p>
    <p>Below are the core components</p>
    <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="height">
    </vimeo-player>
  </div>
</template>
<script>
export default {
  data () {
    return {
      videoID: '416310837',
      height: 600,
      options: {},
      playerReady: false
    }
  },
  methods: {
    onReady () {
      this.playerReady = true
    },
    play () {
      this.$refs.player.play()
    },
    stop () {
      this.$refs.player.stop()
    }
  }
}
</script>

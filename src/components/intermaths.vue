<template>
    <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="height">
    </vimeo-player>
</template>
<script>
export default {
data() {
    return {
        videoID: '141851770',
        height: 600,
        options: {},
        playerReady: false,
    }
},
methods: {
    onReady() {
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
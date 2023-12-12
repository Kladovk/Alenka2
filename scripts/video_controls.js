
const video = document.getElementById("video_id")
const play_list = ["video(shop)", "video2(shop)"]
let peremotka = 0
function contrlNext() {
    peremotka = peremotka + 1;
    console.log(peremotka)
    video.src=`video/${play_list[peremotka]}.mp4`
   }
function contrlStop() {
    if(video.paused){
        video.play()
    } else(
        video.pause()
    )
}

function contrlSound() {
    if(video.muted){
        video.muted = false()
    } else(
        video.muted = true()
    )
}

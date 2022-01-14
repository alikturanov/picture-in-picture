const videoElement = document.getElementById('video');     
const button = document.getElementById('button');
// prompt to sellect media stream
async function selectMediaStream(){
    try {
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
     videoElement.srcObject = mediaStream;
     videoElement.onloadedmetadata = () => {
         videoElement.play();
     }   
    } catch (error) {
        
    }
}      
// on Load
selectMediaStream();
button.addEventListener('click', async () => {
    //Disable button
button.disabled = true;
//Start picture in Picture
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false;
})
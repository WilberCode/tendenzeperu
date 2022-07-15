var Id = document.getElementById.bind(document),
    className = document.getElementsByClassName.bind(document)

let _openVideo = () => {
   let videosGrid = document.querySelector('.videos-grid')
  
   videosGrid.addEventListener('click',(e)=>{  
       if(e.target.className == 'videos-card-image'){
        let datasetVideo = e.target.dataset.video
        Id('videos-modal-wrap').classList.add('videos-modal-wrap--active') 
        Id('videos-modal').innerHTML = `<video src="video/${datasetVideo}.mp4" class="w-auto" controls autoplay ></video>`
       }else{
        return;
       } 

    })  
     
}

let _closeVideo = () => {  
    Id('videos-modal-close').onclick = (e) => {  
        Id('videos-modal-wrap').classList.remove('videos-modal-wrap--active')
        Id('videos-modal').innerHTML = ''
    }
    Id('videos-modal-wrap').onclick = (e) => {  
        const marcaModalID = e.target.id  
        if(marcaModalID == 'videos-modal-wrap' ) {
            Id('videos-modal-wrap').classList.remove('videos-modal-wrap--active')
            Id('videos-modal').innerHTML = ''
        } else {
            return;
        }   
    }

}

let _loadingLazyImg =  () => {
  const videos_image =  Array.prototype.slice.call(document.querySelectorAll('.videos img'))
  videos_image.map((image) =>{
    image.loading = 'lazy'
  }) 
}

window.onload = () =>{
    _openVideo()
    _closeVideo()
    _loadingLazyImg()
}
function importAll(r) {
    let images = [];
     r.keys().forEach((item, index) => {images.push(r(item)) ; });
    return images
   }
  export  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


  window.addEventListener('load',function(){
    const plusIcons=document.querySelectorAll('.plusIcon');
    plusIcons.forEach(icon =>{
        icon.addEventListener('click',function(e){
            console.log('shaimaa');
        })
    })
  })

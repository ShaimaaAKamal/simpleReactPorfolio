function importAll(r) {
    let images = [];
     r.keys().forEach((item, index) => {images.push(r(item)) ; });
    return images
   }
  export  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));



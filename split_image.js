const { Jimp } = require('jimp');

async function splitImage() {
  const image = await Jimp.read('./src/assets/images/products-banner.jpg');
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const sliceWidth = Math.floor(width / 4);

  console.log(`Original size: ${width}x${height}`);
  console.log(`Slice width: ${sliceWidth}`);

  for (let i = 0; i < 4; i++) {
    const slice = image.clone();
    slice.crop({ x: i * sliceWidth, y: 0, w: sliceWidth, h: height });
    await slice.write(`./src/assets/images/product${i + 1}.jpg`);
    console.log(`Saved product${i + 1}.jpg`);
  }
}

splitImage().catch(console.error);

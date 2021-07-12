import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
API

ts
tmImage.load(
	checkpoint, string, 
	metadata, string | Metadata,
)

await tmImage.load(checkpointURL, metadataURL);

tmImage.loadFromFiles(
	model, File, 
	weights, File, 
	metadata, File,
) 
// you need to create File objects, like with file input elements (<input type="file" ...>)
const uploadModel = document.getElementById('upload-model');
const uploadWeights = document.getElementById('upload-weights');
const uploadMetadata = document.getElementById('upload-metadata');
model = await tmImage.loadFromFiles(uploadModel.files[0], uploadWeights.files[0], uploadMetadata.files[0])

model.getTotalClasses()

model.getClassLabels()


model.predict(
    image, HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap,
    flipped = false
  )

  // predict can take in an image, video or canvas html element
// if using the webcam utility, we set flip to true since the webcam was only 
// flipped in CSS
const flip = true;
const allPredictions = await model.predict(webcamElement, flip);

model.predictTopK(
    image, HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap,
    maxPredictions = 10,
    flipped = false
  )

  // predictTopK can take in an image, video or canvas html element
// if using the webcam utility, we set flip to true since the webcam was only 
// flipped in CSS
const flip = true;
const maxPredictions = model.getTotalClasses();
const prediction = await model.predictTopK(webcamElement, maxPredictions, flip);

new tmImage.Webcam(
    width = 400,
    height = 400,
    flip = false,
)

// webcam has a square ratio and is flipped by default to match training
const webcam = new tmImage.Webcam(200, 200, true);
await webcam.setup();
webcam.play();
document.body.appendChild(webcam.canvas);


webcam.setup(
	options, MediaTrackConstraints = {}
)

await webcam.setup();

webcam.play();
webcam.pause();
webcam.stop();

webcam.update();
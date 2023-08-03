const { Step } = require('../../db');

const updateStep = async (req, res) => {
  const {id, title, description, video, file } = req.body
  console.log(`Este es el update: ${req.body}`);
  try {
    const getStep = await Step.findByPk(id)

    let currentVideo = video
    if(video.length === 0 || !video) currentVideo = getStep.video

    if(getStep ){
        const updateStep = await getStep.update({title, description, video: currentVideo, file}, {
           where: {
               id
           }
       })
       console.log(updateStep);
          res.status(200).json(updateStep);
    }else{
        throw new Error('Este paso no fue encontrado')
    }
    
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { updateStep };

const VideoData = require("../../Models/videos");

module.exports.getvideodata = async (req, res) => {
  try {
    const data = req.params.id ? { _id: req.params.id } : {};
    let result = await VideoData.find(data);
    if (!result.length) {
      result = [
        { name: "video1", discription: "video1", link: "video1.mp4" },
        { name: "video2", discription: "video2", link: "video2.mp4" },
        { name: "video3", discription: "video3", link: "video3.mp4" },
        { name: "video4", discription: "video4", link: "video4.mp4" },
        { name: "video5", discription: "video5", link: "video5.mp4" },
        { name: "video6", discription: "video6", link: "video6.mp4" },
        { name: "video7", discription: "video7", link: "video7.mp4" },
        { name: "video8", discription: "video8", link: "video8.mp4" },
        { name: "video9", discription: "video9", link: "video9.mp4" },
        { name: "video10", discription: "video10", link: "video10.mp4" },
        { name: "video11", discription: "video11", link: "video11.mp4" },
        { name: "video12", discription: "video12", link: "video12.mp4" },
        { name: "video13", discription: "video13", link: "video13.mp4" },
        { name: "video14", discription: "video14", link: "video14.mp4" },
        { name: "video15", discription: "video15", link: "video15.mp4" },
        { name: "video16", discription: "video16", link: "video16.mp4" },
        { name: "video17", discription: "video17", link: "video17.mp4" },
        { name: "video18", discription: "video18", link: "video18.mp4" },
        { name: "video19", discription: "video19", link: "video19.mp4" },
        { name: "video20", discription: "video20", link: "video20.mp4" },
        { name: "video21", discription: "video21", link: "video21.mp4" },
      ];
    }
    res.status(200).send({ status: 1, data: result });
  } catch (error) {
    res.status(400).send({ status: 0, data: [] });
  }
};

module.exports.createvideodata = async (req, res) => {
  try {
    const User = new VideoData(req.body);
    const result = await User.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.updatevideodata = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await VideoData.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deletevideodata = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await VideoData.findByIdAndDelete({ _id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

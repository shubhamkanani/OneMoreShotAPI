const UserData = require("../../Models/user")
const VideoData = require("../../Models/videos")

module.exports.createuserdata = async (req, res) => {
    try {
        const User = new UserData(req.body);
        const result = await User.save();
        res.status(200).send({ status: 1, data: result });
    } catch (error) {
        res.status(400).send({ status: 0, data: [] })
    }
}
module.exports.createlikeuserdata = async (req, res) => {
    try {
        const data = req.body;
        const _ = await UserData.find({ user_id: data.user_id })
        const userData = _[0]
        const videoData = await VideoData.findById(data.video_id)
        if (data.like) {
            videoData.total_like = videoData.total_like + 1
            await videoData.save()
            userData.liked_video_id.push(data.video_id)
            await userData.save();
        }
        else {
            videoData.total_like = videoData.total_like > 0 ? videoData.total_like - 1 : 0
            await videoData.save()

            const temp = userData.liked_video_id.filter((e) => e !== data.video_id)
            userData.liked_video_id = temp

            await userData.save();
        }
        res.status(200).send({ status: 1, data: videoData })
    } catch (error) {
        res.status(400).send({ status: 0, data: [] })
    }
}
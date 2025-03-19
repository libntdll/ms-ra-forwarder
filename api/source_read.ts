import { Request, Response } from "express";
import { generateCurrentTimestamp } from "../utils/tools";

module.exports = async (request: Request, response: Response) => {
    console.log("Import url: " + request.url);
    const api = request.query["api"];
    const name = request.query["name"] ?? "EdgeTTS";
    const voiceName = request.query["voiceName"] ?? "zh-CN-YunxiNeural";
    const voiceFormat = request.query["voiceFormat"] ?? "audio-24khz-48kbitrate-mono-mp3";
    const token = request.query["token"] ?? "";

    const config = [{
        id: generateCurrentTimestamp(),
        name: `EdgeTTS(${voiceName})`,
        url: `${api}?&voiceName=${voiceName}&format=${voiceFormat}&rate={{speakSpeed/50+0.95}}&text={{String(speakText).replace(/&/g,'&amp;').replace(/\"/g,'&quot;').replace(/'/g,'&apos;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}}`
    }];
    response.status(200).json(config);
};

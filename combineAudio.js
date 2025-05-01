const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const fs = require("fs");
const path = require("path");

// Set the path to ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath);

// Create temp directory if it doesn't exist
if (!fs.existsSync("./temp")) {
    fs.mkdirSync("./temp");
}

function cleanupTemp() {
    try {
        // Read all files in temp directory
        const files = fs.readdirSync("./temp");

        // Delete each file
        for (const file of files) {
            fs.unlinkSync(path.join("./temp", file));
        }

        // Remove the temp directory
        fs.rmdirSync("./temp");
        console.log("🧹 Cleaned up temporary files");
    } catch (error) {
        console.error("Error cleaning up:", error);
    }
}

function combineAudio() {
    return new Promise((resolve, reject) => {
        ffmpeg()
            .input("question.mp3")
            .input("future_response.mp3")
            .on("end", () => {
                console.log("🎧 podcast_interview.mp3 is ready!");
                cleanupTemp();
                resolve();
            })
            .on("error", (err) => {
                console.error("Error combining audio:", err);
                cleanupTemp();
                reject(err);
            })
            .mergeToFile("podcast_interview.mp3", "./temp");
    });
}

combineAudio().catch(console.error);

require("dotenv").config();
const fs = require("fs");
const { createClient } = require("@deepgram/sdk");

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

async function transcribeAudio() {
    try {
        const audioBuffer = fs.readFileSync("./question.mp3");
        const { result, error } =
            await deepgram.listen.prerecorded.transcribeFile(audioBuffer, {
                model: "nova-3",
            });

        if (error) {
            throw error;
        }

        const transcript =
            result.results.channels[0].alternatives[0].transcript;
        console.log("Your question was:", transcript);

        // Save the transcript to a file for reference
        fs.writeFileSync("transcript.txt", transcript);
        console.log("Transcript saved to transcript.txt");
    } catch (error) {
        console.error("Error during transcription:", error);
    }
}

transcribeAudio();

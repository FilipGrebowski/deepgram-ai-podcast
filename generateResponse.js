require("dotenv").config();
const fs = require("fs");
const { createClient } = require("@deepgram/sdk");

// You can modify this text to be your future self's response
const futureSelfText =
    "Stop worrying about things outside your control. Focus on what you can influence and take action on. The future will unfold naturally, and you'll handle it when it comes. Trust in your ability to adapt and grow.";

async function speak() {
    try {
        const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

        // Make the TTS request
        const response = await deepgram.speak.request(
            { text: futureSelfText },
            {
                model: "aura-2-thalia-en",
                encoding: "linear16",
                container: "wav",
            }
        );

        // Get the audio stream
        const stream = await response.getStream();
        if (!stream) {
            throw new Error("No audio stream received");
        }

        // Convert stream to buffer
        const chunks = [];
        const reader = stream.getReader();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
        }

        const dataArray = chunks.reduce(
            (acc, chunk) => Uint8Array.from([...acc, ...chunk]),
            new Uint8Array(0)
        );

        const buffer = Buffer.from(dataArray.buffer);

        // Write to file
        fs.writeFileSync("future_response.mp3", buffer);
        console.log("🎧 Generated response saved as future_response.mp3");
    } catch (error) {
        console.error("Error generating speech:", error);
        throw error;
    }
}

speak().catch(console.error);

# AI Podcast Interviewer with Deepgram

This project allows you to create a podcast-style interview with your future self using Deepgram's AI speech models. It uses Deepgram's nova-3 for speech-to-text and aura-2 for text-to-speech capabilities.

## Features

-   Record and transcribe your voice questions using Deepgram's nova-3
-   Generate AI responses using Deepgram's aura-2 text-to-speech
-   Combine audio files into a podcast-style format

## Prerequisites

-   Node.js installed (includes the built-in `fs` module for file operations)
-   FFmpeg and FFprobe installed on your system
    -   On macOS: `brew install ffmpeg`
    -   On Ubuntu/Debian: `sudo apt-get install ffmpeg`
    -   On Windows: Download from [FFmpeg website](https://ffmpeg.org/download.html)
-   A Deepgram API key (get one at [Deepgram Console](https://console.deepgram.com))

## Installation

1. Clone this repository:

```bash
git clone https://github.com/FilipGrebowski/deepgram-ai-podcast.git
cd deepgram-ai-podcast
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Deepgram API key:

```
DEEPGRAM_API_KEY=your_actual_key_here
```

## Usage

The project consists of three steps:

1. **Transcribe your question**

    - Make sure your question is saved as `question.mp3` in the project root
    - Run the transcription:

    ```bash
    node transcribe.js
    ```

    - This will create a `transcript.txt` file with your question

2. **Generate the AI response**

    - Run the response generator:

    ```bash
    node generateResponse.js
    ```

    - This will create `future_response.mp3` with the AI's answer

3. **Create the podcast**
    - Combine both audio files into a podcast:
    ```bash
    node combineAudio.js
    ```
    - This will create your final `podcast_interview.mp3`

## Example Files

The repository includes example audio files:

-   `question.mp3` - A sample question asking "what's one thing that i should stop worrying about"
-   `podcast_interview.mp3` - The resulting podcast with the AI's response

## Project Structure

-   `transcribe.js` - Transcribes your voice question using Deepgram's nova-3
-   `generateResponse.js` - Generates the AI response using Deepgram's aura-2
-   `combineAudio.js` - Combines the question and response into a single audio file

## License

MIT

## Acknowledgments

-   [Deepgram](https://deepgram.com) for their powerful AI speech models
-   [FFmpeg](https://ffmpeg.org) for audio processing capabilities

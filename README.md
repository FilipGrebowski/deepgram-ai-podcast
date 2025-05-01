# AI Podcast Interviewer with Deepgram

This project allows you to create a podcast-style interview with your future self using Deepgram's AI speech models. It uses Deepgram's nova-3 for speech-to-text and aura-2 for text-to-speech capabilities.

## Features

-   Record and transcribe your voice questions using Deepgram's nova-3
-   Generate AI responses using Deepgram's aura-2 text-to-speech
-   Combine audio files into a podcast-style format
-   Full automation of the podcast creation process

## Prerequisites

-   Node.js installed (includes the built-in `fs` module for file operations)
-   FFmpeg and FFprobe installed on your system
    -   On macOS: `brew install ffmpeg`
    -   On Ubuntu/Debian: `sudo apt-get install ffmpeg`
    -   On Windows: Download from [FFmpeg website](https://ffmpeg.org/download.html)
-   A Deepgram API key

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/ai-podcast.git
cd ai-podcast
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

### Basic Usage

1. Record your question and save it as `question.mp3` in the project root
2. Run the full podcast flow:

```bash
node fullPodcast.js
```

### Individual Steps

You can also run each step separately:

1. Transcribe your question:

```bash
node transcribe.js
```

2. Generate the response:

```bash
node generateResponse.js
```

3. Combine the audio files:

```bash
node combineAudio.js
```

## Project Structure

-   `transcribe.js` - Transcribes your voice question using Deepgram's nova-3
-   `generateResponse.js` - Generates the AI response using Deepgram's aura-2
-   `combineAudio.js` - Combines the question and response into a single audio file
-   `fullPodcast.js` - Runs the complete podcast creation process

## License

MIT

## Acknowledgments

-   [Deepgram](https://deepgram.com) for their powerful AI speech models
-   [FFmpeg](https://ffmpeg.org) for audio processing capabilities

import { TranscribeStreamingClient } from "./TranscribeStreamingClient";
import { StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput } from "./commands/StartMedicalStreamTranscriptionCommand";
import { StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput } from "./commands/StartStreamTranscriptionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
export declare class TranscribeStreaming extends TranscribeStreamingClient {
    /**
     * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe Medical and the
     *             transcription results are streamed to your application.</p>
     */
    startMedicalStreamTranscription(args: StartMedicalStreamTranscriptionCommandInput, options?: __HttpHandlerOptions): Promise<StartMedicalStreamTranscriptionCommandOutput>;
    startMedicalStreamTranscription(args: StartMedicalStreamTranscriptionCommandInput, cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void): void;
    startMedicalStreamTranscription(args: StartMedicalStreamTranscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void): void;
    /**
     * <p>Starts a bidirectional HTTP2 stream where audio is streamed to Amazon Transcribe and the transcription
     *       results are streamed to your application.</p>
     *          <p>The following are encoded as HTTP2 headers:</p>
     *          <ul>
     *             <li>
     *                <p>x-amzn-transcribe-language-code</p>
     *             </li>
     *             <li>
     *                <p>x-amzn-transcribe-media-encoding</p>
     *             </li>
     *             <li>
     *                <p>x-amzn-transcribe-sample-rate</p>
     *             </li>
     *             <li>
     *                <p>x-amzn-transcribe-session-id</p>
     *             </li>
     *          </ul>
     */
    startStreamTranscription(args: StartStreamTranscriptionCommandInput, options?: __HttpHandlerOptions): Promise<StartStreamTranscriptionCommandOutput>;
    startStreamTranscription(args: StartStreamTranscriptionCommandInput, cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void): void;
    startStreamTranscription(args: StartStreamTranscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void): void;
}

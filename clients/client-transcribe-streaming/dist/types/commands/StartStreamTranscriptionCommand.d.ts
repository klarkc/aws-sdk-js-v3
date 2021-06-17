import { ServiceInputTypes, ServiceOutputTypes, TranscribeStreamingClientResolvedConfig } from "../TranscribeStreamingClient";
import { StartStreamTranscriptionRequest, StartStreamTranscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartStreamTranscriptionCommandInput extends StartStreamTranscriptionRequest {
}
export interface StartStreamTranscriptionCommandOutput extends StartStreamTranscriptionResponse, __MetadataBearer {
}
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartStreamTranscriptionCommand extends $Command<StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput, TranscribeStreamingClientResolvedConfig> {
    readonly input: StartStreamTranscriptionCommandInput;
    constructor(input: StartStreamTranscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeStreamingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput>;
    private serialize;
    private deserialize;
}

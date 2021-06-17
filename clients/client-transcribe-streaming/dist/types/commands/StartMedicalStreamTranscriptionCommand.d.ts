import { ServiceInputTypes, ServiceOutputTypes, TranscribeStreamingClientResolvedConfig } from "../TranscribeStreamingClient";
import { StartMedicalStreamTranscriptionRequest, StartMedicalStreamTranscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMedicalStreamTranscriptionCommandInput extends StartMedicalStreamTranscriptionRequest {
}
export interface StartMedicalStreamTranscriptionCommandOutput extends StartMedicalStreamTranscriptionResponse, __MetadataBearer {
}
/**
 * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe Medical and the
 *             transcription results are streamed to your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartMedicalStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMedicalStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMedicalStreamTranscriptionCommand extends $Command<StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput, TranscribeStreamingClientResolvedConfig> {
    readonly input: StartMedicalStreamTranscriptionCommandInput;
    constructor(input: StartMedicalStreamTranscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeStreamingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMedicalTranscriptionJobCommandInput extends StartMedicalTranscriptionJobRequest {
}
export interface StartMedicalTranscriptionJobCommandOutput extends StartMedicalTranscriptionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a batch job to transcribe medical speech to text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMedicalTranscriptionJobCommand extends $Command<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: StartMedicalTranscriptionJobCommandInput;
    constructor(input: StartMedicalTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

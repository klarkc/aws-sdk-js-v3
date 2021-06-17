import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetMedicalTranscriptionJobRequest, GetMedicalTranscriptionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMedicalTranscriptionJobCommandInput extends GetMedicalTranscriptionJobRequest {
}
export interface GetMedicalTranscriptionJobCommandOutput extends GetMedicalTranscriptionJobResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the
 *             job, check the <code>TranscriptionJobStatus</code> field. If the status is
 *                 <code>COMPLETED</code>, the job is finished. You find the results of the completed
 *             job in the <code>TranscriptFileUri</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link GetMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMedicalTranscriptionJobCommand extends $Command<GetMedicalTranscriptionJobCommandInput, GetMedicalTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetMedicalTranscriptionJobCommandInput;
    constructor(input: GetMedicalTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMedicalTranscriptionJobCommandInput, GetMedicalTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

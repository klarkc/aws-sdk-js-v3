import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteTranscriptionJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTranscriptionJobCommandInput extends DeleteTranscriptionJobRequest {
}
export interface DeleteTranscriptionJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a previously submitted transcription job along with any other generated
 *             results such as the transcription, models, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTranscriptionJobCommand extends $Command<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteTranscriptionJobCommandInput;
    constructor(input: DeleteTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVocabularyCommandInput extends DeleteVocabularyRequest {
}
export interface DeleteVocabularyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a vocabulary from Amazon Transcribe. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVocabularyCommand extends $Command<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyCommandInput;
    constructor(input: DeleteVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyFilterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVocabularyFilterCommandInput extends DeleteVocabularyFilterRequest {
}
export interface DeleteVocabularyFilterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a vocabulary filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVocabularyFilterCommand extends $Command<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyFilterCommandInput;
    constructor(input: DeleteVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

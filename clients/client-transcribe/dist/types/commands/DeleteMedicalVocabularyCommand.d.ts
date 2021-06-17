import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteMedicalVocabularyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMedicalVocabularyCommandInput extends DeleteMedicalVocabularyRequest {
}
export interface DeleteMedicalVocabularyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMedicalVocabularyCommand extends $Command<DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteMedicalVocabularyCommandInput;
    constructor(input: DeleteMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

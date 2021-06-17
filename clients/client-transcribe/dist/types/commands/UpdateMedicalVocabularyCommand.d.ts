import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateMedicalVocabularyRequest, UpdateMedicalVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMedicalVocabularyCommandInput extends UpdateMedicalVocabularyRequest {
}
export interface UpdateMedicalVocabularyCommandOutput extends UpdateMedicalVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Updates a vocabulary with new values that you provide in a different text file from
 *             the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMedicalVocabularyCommand extends $Command<UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateMedicalVocabularyCommandInput;
    constructor(input: UpdateMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

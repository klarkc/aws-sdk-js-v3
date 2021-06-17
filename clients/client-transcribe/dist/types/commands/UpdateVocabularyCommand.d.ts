import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVocabularyCommandInput extends UpdateVocabularyRequest {
}
export interface UpdateVocabularyCommandOutput extends UpdateVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVocabularyCommand extends $Command<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateVocabularyCommandInput;
    constructor(input: UpdateVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

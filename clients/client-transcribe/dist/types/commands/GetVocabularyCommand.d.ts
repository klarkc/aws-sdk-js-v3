import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyRequest, GetVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVocabularyCommandInput extends GetVocabularyRequest {
}
export interface GetVocabularyCommandOutput extends GetVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a vocabulary. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVocabularyCommand extends $Command<GetVocabularyCommandInput, GetVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyCommandInput;
    constructor(input: GetVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyCommandInput, GetVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

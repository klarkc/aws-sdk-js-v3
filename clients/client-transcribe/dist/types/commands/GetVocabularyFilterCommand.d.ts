import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyFilterRequest, GetVocabularyFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVocabularyFilterCommandInput extends GetVocabularyFilterRequest {
}
export interface GetVocabularyFilterCommandOutput extends GetVocabularyFilterResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a vocabulary filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVocabularyFilterCommand extends $Command<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyFilterCommandInput;
    constructor(input: GetVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

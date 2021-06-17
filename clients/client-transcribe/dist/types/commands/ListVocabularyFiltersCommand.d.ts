import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabularyFiltersRequest, ListVocabularyFiltersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVocabularyFiltersCommandInput extends ListVocabularyFiltersRequest {
}
export interface ListVocabularyFiltersCommandOutput extends ListVocabularyFiltersResponse, __MetadataBearer {
}
/**
 * <p>Gets information about vocabulary filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabularyFiltersCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabularyFiltersCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabularyFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabularyFiltersCommandInput} for command's `input` shape.
 * @see {@link ListVocabularyFiltersCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVocabularyFiltersCommand extends $Command<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabularyFiltersCommandInput;
    constructor(input: ListVocabularyFiltersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput>;
    private serialize;
    private deserialize;
}

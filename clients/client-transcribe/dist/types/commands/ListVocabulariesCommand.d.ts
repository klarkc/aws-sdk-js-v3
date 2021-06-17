import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabulariesRequest, ListVocabulariesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVocabulariesCommandInput extends ListVocabulariesRequest {
}
export interface ListVocabulariesCommandOutput extends ListVocabulariesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
 *             specified, returns the entire list of vocabularies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVocabulariesCommand extends $Command<ListVocabulariesCommandInput, ListVocabulariesCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabulariesCommandInput;
    constructor(input: ListVocabulariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabulariesCommandInput, ListVocabulariesCommandOutput>;
    private serialize;
    private deserialize;
}

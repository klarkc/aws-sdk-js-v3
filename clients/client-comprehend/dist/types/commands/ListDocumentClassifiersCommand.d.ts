import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListDocumentClassifiersRequest, ListDocumentClassifiersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDocumentClassifiersCommandInput extends ListDocumentClassifiersRequest {
}
export interface ListDocumentClassifiersCommandOutput extends ListDocumentClassifiersResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the document classifiers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassifiersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassifiersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListDocumentClassifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentClassifiersCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassifiersCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDocumentClassifiersCommand extends $Command<ListDocumentClassifiersCommandInput, ListDocumentClassifiersCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListDocumentClassifiersCommandInput;
    constructor(input: ListDocumentClassifiersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentClassifiersCommandInput, ListDocumentClassifiersCommandOutput>;
    private serialize;
    private deserialize;
}

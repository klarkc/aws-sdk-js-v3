import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListDocumentVersionsRequest, ListDocumentVersionsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDocumentVersionsCommandInput extends ListDocumentVersionsRequest {
}
export interface ListDocumentVersionsCommandOutput extends ListDocumentVersionsResult, __MetadataBearer {
}
/**
 * <p>List all versions for a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDocumentVersionsCommand extends $Command<ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListDocumentVersionsCommandInput;
    constructor(input: ListDocumentVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}

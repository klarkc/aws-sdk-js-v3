import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeDocumentVersionsRequest, DescribeDocumentVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDocumentVersionsCommandInput extends DescribeDocumentVersionsRequest {
}
export interface DescribeDocumentVersionsCommandOutput extends DescribeDocumentVersionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the document versions for the specified document.</p>
 *         <p>By default, only active versions are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeDocumentVersionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeDocumentVersionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDocumentVersionsCommand extends $Command<DescribeDocumentVersionsCommandInput, DescribeDocumentVersionsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeDocumentVersionsCommandInput;
    constructor(input: DescribeDocumentVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentVersionsCommandInput, DescribeDocumentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}

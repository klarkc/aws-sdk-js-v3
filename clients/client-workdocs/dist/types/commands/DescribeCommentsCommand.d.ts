import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeCommentsRequest, DescribeCommentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCommentsCommandInput extends DescribeCommentsRequest {
}
export interface DescribeCommentsCommandOutput extends DescribeCommentsResponse, __MetadataBearer {
}
/**
 * <p>List all the comments for the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeCommentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeCommentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeCommentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommentsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCommentsCommand extends $Command<DescribeCommentsCommandInput, DescribeCommentsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeCommentsCommandInput;
    constructor(input: DescribeCommentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCommentsCommandInput, DescribeCommentsCommandOutput>;
    private serialize;
    private deserialize;
}

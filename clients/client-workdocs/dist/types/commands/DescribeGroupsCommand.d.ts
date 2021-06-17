import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeGroupsRequest, DescribeGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGroupsCommandInput extends DescribeGroupsRequest {
}
export interface DescribeGroupsCommandOutput extends DescribeGroupsResponse, __MetadataBearer {
}
/**
 * <p>Describes the groups specified by the query. Groups are defined by the underlying
 *             Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeGroupsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeGroupsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGroupsCommand extends $Command<DescribeGroupsCommandInput, DescribeGroupsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeGroupsCommandInput;
    constructor(input: DescribeGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGroupsCommandInput, DescribeGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

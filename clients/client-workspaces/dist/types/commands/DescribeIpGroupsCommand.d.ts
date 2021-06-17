import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeIpGroupsRequest, DescribeIpGroupsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIpGroupsCommandInput extends DescribeIpGroupsRequest {
}
export interface DescribeIpGroupsCommandOutput extends DescribeIpGroupsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your IP access control groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeIpGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIpGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIpGroupsCommand extends $Command<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeIpGroupsCommandInput;
    constructor(input: DescribeIpGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

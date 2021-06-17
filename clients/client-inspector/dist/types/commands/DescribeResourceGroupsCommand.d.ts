import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeResourceGroupsRequest, DescribeResourceGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourceGroupsCommandInput extends DescribeResourceGroupsRequest {
}
export interface DescribeResourceGroupsCommandOutput extends DescribeResourceGroupsResponse, __MetadataBearer {
}
/**
 * <p>Describes the resource groups that are specified by the ARNs of the resource
 *          groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeResourceGroupsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeResourceGroupsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceGroupsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourceGroupsCommand extends $Command<DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeResourceGroupsCommandInput;
    constructor(input: DescribeResourceGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeEcsClustersRequest, DescribeEcsClustersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEcsClustersCommandInput extends DescribeEcsClustersRequest {
}
export interface DescribeEcsClustersCommandOutput extends DescribeEcsClustersResult, __MetadataBearer {
}
/**
 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID,
 *     you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the
 *     response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result
 *     set has a maximum of one element.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeEcsClustersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeEcsClustersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeEcsClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEcsClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeEcsClustersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEcsClustersCommand extends $Command<DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeEcsClustersCommandInput;
    constructor(input: DescribeEcsClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput>;
    private serialize;
    private deserialize;
}

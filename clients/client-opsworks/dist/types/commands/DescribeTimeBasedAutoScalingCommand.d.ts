import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeTimeBasedAutoScalingRequest, DescribeTimeBasedAutoScalingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTimeBasedAutoScalingCommandInput extends DescribeTimeBasedAutoScalingRequest {
}
export interface DescribeTimeBasedAutoScalingCommandOutput extends DescribeTimeBasedAutoScalingResult, __MetadataBearer {
}
/**
 * <p>Describes time-based auto scaling configurations for specified instances.</p>
 *          <note>
 *             <p>You must specify at least one of the parameters.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeTimeBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeTimeBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeTimeBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTimeBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeBasedAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTimeBasedAutoScalingCommand extends $Command<DescribeTimeBasedAutoScalingCommandInput, DescribeTimeBasedAutoScalingCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeTimeBasedAutoScalingCommandInput;
    constructor(input: DescribeTimeBasedAutoScalingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTimeBasedAutoScalingCommandInput, DescribeTimeBasedAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}

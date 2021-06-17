import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeStackSummaryRequest, DescribeStackSummaryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStackSummaryCommandInput extends DescribeStackSummaryRequest {
}
export interface DescribeStackSummaryCommandOutput extends DescribeStackSummaryResult, __MetadataBearer {
}
/**
 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
 *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackSummaryCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackSummaryCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeStackSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSummaryCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackSummaryCommand extends $Command<DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeStackSummaryCommandInput;
    constructor(input: DescribeStackSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput>;
    private serialize;
    private deserialize;
}

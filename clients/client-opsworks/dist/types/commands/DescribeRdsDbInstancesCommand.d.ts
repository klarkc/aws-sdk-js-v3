import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRdsDbInstancesCommandInput extends DescribeRdsDbInstancesRequest {
}
export interface DescribeRdsDbInstancesCommandOutput extends DescribeRdsDbInstancesResult, __MetadataBearer {
}
/**
 * <p>Describes Amazon RDS instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeRdsDbInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRdsDbInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeRdsDbInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRdsDbInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRdsDbInstancesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRdsDbInstancesCommand extends $Command<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeRdsDbInstancesCommandInput;
    constructor(input: DescribeRdsDbInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput>;
    private serialize;
    private deserialize;
}

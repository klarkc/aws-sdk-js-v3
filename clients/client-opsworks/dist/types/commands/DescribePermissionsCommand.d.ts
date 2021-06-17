import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribePermissionsRequest, DescribePermissionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePermissionsCommandInput extends DescribePermissionsRequest {
}
export interface DescribePermissionsCommandOutput extends DescribePermissionsResult, __MetadataBearer {
}
/**
 * <p>Describes the permissions for a specified stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribePermissionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribePermissionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePermissionsCommand extends $Command<DescribePermissionsCommandInput, DescribePermissionsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribePermissionsCommandInput;
    constructor(input: DescribePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePermissionsCommandInput, DescribePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

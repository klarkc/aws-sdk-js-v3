import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeStackProvisioningParametersRequest, DescribeStackProvisioningParametersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStackProvisioningParametersCommandInput extends DescribeStackProvisioningParametersRequest {
}
export interface DescribeStackProvisioningParametersCommandOutput extends DescribeStackProvisioningParametersResult, __MetadataBearer {
}
/**
 * <p>Requests a description of a stack's provisioning parameters.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackProvisioningParametersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackProvisioningParametersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeStackProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeStackProvisioningParametersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackProvisioningParametersCommand extends $Command<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeStackProvisioningParametersCommandInput;
    constructor(input: DescribeStackProvisioningParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput>;
    private serialize;
    private deserialize;
}

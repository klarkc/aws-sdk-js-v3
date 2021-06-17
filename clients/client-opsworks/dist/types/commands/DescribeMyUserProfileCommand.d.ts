import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeMyUserProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMyUserProfileCommandInput {
}
export interface DescribeMyUserProfileCommandOutput extends DescribeMyUserProfileResult, __MetadataBearer {
}
/**
 * <p>Describes a user's SSH information.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeMyUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMyUserProfileCommand extends $Command<DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeMyUserProfileCommandInput;
    constructor(input: DescribeMyUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}

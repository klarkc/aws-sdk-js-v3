import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeUserProfilesRequest, DescribeUserProfilesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserProfilesCommandInput extends DescribeUserProfilesRequest {
}
export interface DescribeUserProfilesCommandOutput extends DescribeUserProfilesResult, __MetadataBearer {
}
/**
 * <p>Describe specified users.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeUserProfilesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeUserProfilesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserProfilesCommand extends $Command<DescribeUserProfilesCommandInput, DescribeUserProfilesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeUserProfilesCommandInput;
    constructor(input: DescribeUserProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserProfilesCommandInput, DescribeUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}

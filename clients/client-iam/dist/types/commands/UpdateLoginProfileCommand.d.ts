import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateLoginProfileRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLoginProfileCommandInput extends UpdateLoginProfileRequest {
}
export interface UpdateLoginProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the password for the specified IAM user. You can use the AWS CLI, the
 *             AWS API, or the <b>Users</b> page in the IAM console to
 *             change the password for any IAM user. Use <a>ChangePassword</a> to change
 *             your own password in the <b>My Security Credentials</b> page
 *             in the AWS Management Console.</p>
 *         <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLoginProfileCommand extends $Command<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateLoginProfileCommandInput;
    constructor(input: UpdateLoginProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}

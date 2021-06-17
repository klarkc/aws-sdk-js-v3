import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteLoginProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLoginProfileCommandInput extends DeleteLoginProfileRequest {
}
export interface DeleteLoginProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the password for the specified IAM user, which terminates the user's ability
 *             to access AWS services through the AWS Management Console.</p>
 *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user.
 *             You can use <a>ChangePassword</a> to update, but not delete, your own
 *             password in the <b>My Security Credentials</b> page in the
 *             AWS Management Console.</p>
 *         <important>
 *             <p> Deleting a user's password does not prevent a user from accessing AWS through
 *                 the command line interface or the API. To prevent all user access, you must also
 *                 either make any access keys inactive or delete them. For more information about
 *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
 *                     <a>DeleteAccessKey</a>. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoginProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLoginProfileCommand extends $Command<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteLoginProfileCommandInput;
    constructor(input: DeleteLoginProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}

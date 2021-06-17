import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ResetUserPasswordRequest, ResetUserPasswordResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetUserPasswordCommandInput extends ResetUserPasswordRequest {
}
export interface ResetUserPasswordCommandOutput extends ResetUserPasswordResult, __MetadataBearer {
}
/**
 * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD
 *       directory.</p>
 *          <p>You can reset the password for any user in your directory with the following
 *       exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>For Simple AD, you cannot reset the password for any user that is a member of either
 *           the <b>Domain Admins</b> or <b>Enterprise
 *             Admins</b> group except for the administrator user.</p>
 *             </li>
 *             <li>
 *                <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an
 *           OU based off of the NetBIOS name that you typed when you created your directory. For
 *           example, you cannot reset the password for a user in the <b>AWS
 *             Reserved</b> OU. For more information about the OU structure for an AWS Managed
 *           Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration
 *             Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ResetUserPasswordCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ResetUserPasswordCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetUserPasswordCommand extends $Command<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ResetUserPasswordCommandInput;
    constructor(input: ResetUserPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}

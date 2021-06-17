import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserIdentityInfoRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserIdentityInfoCommandInput extends UpdateUserIdentityInfoRequest {
}
export interface UpdateUserIdentityInfoCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke
 *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
 *     of other users by changing their email address. This poses a security risk to your organization.
 *     They can change the email address of a user to the attacker's email address, and then reset the
 *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
 *      Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserIdentityInfoCommand extends $Command<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateUserIdentityInfoCommandInput;
    constructor(input: UpdateUserIdentityInfoCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput>;
    private serialize;
    private deserialize;
}

import { __extends } from "tslib";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMembersCommand, serializeAws_restJson1CreateMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a member association in Security Hub between the specified accounts and the account
 *          used to make the request, which is the administrator account. If you are integrated with
 *          Organizations, then the administrator account is designated by the organization management account.</p>
 *          <p>
 *             <code>CreateMembers</code> is always used to add accounts that are not organization
 *          members.</p>
 *          <p>For accounts that are part of an organization, <code>CreateMembers</code> is only used
 *          in the following cases:</p>
 *          <ul>
 *             <li>
 *                <p>Security Hub is not configured to automatically add new accounts in an
 *                organization.</p>
 *             </li>
 *             <li>
 *                <p>The account was disassociated or deleted in Security Hub.</p>
 *             </li>
 *          </ul>
 *          <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you
 *          can use the <code>
 *                <a>EnableSecurityHub</a>
 *             </code> operation.</p>
 *          <p>For accounts that are not organization members, you create the account association and
 *          then send an invitation to the member account. To send the invitation, you use the
 *                <code>
 *                <a>InviteMembers</a>
 *             </code> operation. If the account owner accepts
 *          the invitation, the account becomes a member account in Security Hub.</p>
 *          <p>Accounts that are part of an organization do not receive an invitation. They
 *          automatically become a member account in Security Hub.</p>
 *          <p>A permissions policy is added that permits the administrator account to view the findings
 *          generated in the member account. When Security Hub is enabled in a member account, the member account findings are
 *          also visible to the administrator account. </p>
 *          <p>To remove the association between the administrator and member accounts, use the <code>
 *                <a>DisassociateFromMasterAccount</a>
 *             </code> or <code>
 *                <a>DisassociateMembers</a>
 *             </code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMembersCommand = /** @class */ (function (_super) {
    __extends(CreateMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMembersCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "CreateMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMembersCommand(input, context);
    };
    CreateMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMembersCommand(output, context);
    };
    return CreateMembersCommand;
}($Command));
export { CreateMembersCommand };
//# sourceMappingURL=CreateMembersCommand.js.map
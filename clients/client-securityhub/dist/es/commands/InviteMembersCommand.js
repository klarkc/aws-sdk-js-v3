import { __extends } from "tslib";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_1";
import { deserializeAws_restJson1InviteMembersCommand, serializeAws_restJson1InviteMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Invites other AWS accounts to become member accounts for the Security Hub administrator account that
 *          the invitation is sent from.</p>
 *          <p>This operation is only used to invite accounts that do not belong to an organization.
 *          Organization accounts do not receive invitations.</p>
 *          <p>Before you can use this action to invite a member, you must first use the <code>
 *                <a>CreateMembers</a>
 *             </code> action to create the member account in Security Hub.</p>
 *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
 *          account, the administrator account can view the findings generated from the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, InviteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, InviteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InviteMembersCommand = /** @class */ (function (_super) {
    __extends(InviteMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InviteMembersCommand(input) {
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
    InviteMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "InviteMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InviteMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InviteMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InviteMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InviteMembersCommand(input, context);
    };
    InviteMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InviteMembersCommand(output, context);
    };
    return InviteMembersCommand;
}($Command));
export { InviteMembersCommand };
//# sourceMappingURL=InviteMembersCommand.js.map
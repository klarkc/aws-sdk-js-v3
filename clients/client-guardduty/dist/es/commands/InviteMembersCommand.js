import { __extends } from "tslib";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1InviteMembersCommand, serializeAws_restJson1InviteMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Invites other AWS accounts (created as members of the current AWS account by
 *       CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these
 *       accounts' findings on their behalf as the GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, InviteMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, InviteMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "GuardDutyClient";
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
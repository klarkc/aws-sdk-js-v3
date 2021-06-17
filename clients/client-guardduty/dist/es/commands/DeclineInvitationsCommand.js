import { __extends } from "tslib";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
import { deserializeAws_restJson1DeclineInvitationsCommand, serializeAws_restJson1DeclineInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Declines invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeclineInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeclineInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeclineInvitationsCommand = /** @class */ (function (_super) {
    __extends(DeclineInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeclineInvitationsCommand(input) {
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
    DeclineInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeclineInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeclineInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeclineInvitationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeclineInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeclineInvitationsCommand(input, context);
    };
    DeclineInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeclineInvitationsCommand(output, context);
    };
    return DeclineInvitationsCommand;
}($Command));
export { DeclineInvitationsCommand };
//# sourceMappingURL=DeclineInvitationsCommand.js.map
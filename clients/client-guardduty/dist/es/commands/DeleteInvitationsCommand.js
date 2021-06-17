import { __extends } from "tslib";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteInvitationsCommand, serializeAws_restJson1DeleteInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeleteInvitationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInvitationsCommand = /** @class */ (function (_super) {
    __extends(DeleteInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInvitationsCommand(input) {
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
    DeleteInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DeleteInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInvitationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInvitationsCommand(input, context);
    };
    DeleteInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInvitationsCommand(output, context);
    };
    return DeleteInvitationsCommand;
}($Command));
export { DeleteInvitationsCommand };
//# sourceMappingURL=DeleteInvitationsCommand.js.map
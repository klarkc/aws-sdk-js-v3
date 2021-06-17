import { __extends } from "tslib";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInvitationsCommand, serializeAws_restJson1ListInvitationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all GuardDuty membership invitations that were sent to the current AWS
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInvitationsCommand = /** @class */ (function (_super) {
    __extends(ListInvitationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInvitationsCommand(input) {
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
    ListInvitationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListInvitationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInvitationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInvitationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInvitationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInvitationsCommand(input, context);
    };
    ListInvitationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInvitationsCommand(output, context);
    };
    return ListInvitationsCommand;
}($Command));
export { ListInvitationsCommand };
//# sourceMappingURL=ListInvitationsCommand.js.map
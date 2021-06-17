import { __extends } from "tslib";
import { DisassociateMembersRequest, DisassociateMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateMembersCommand, serializeAws_restJson1DisassociateMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates GuardDuty member accounts (to the current GuardDuty administrator account)
 *       specified by the account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisassociateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembersCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMembersCommand = /** @class */ (function (_super) {
    __extends(DisassociateMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMembersCommand(input) {
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
    DisassociateMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DisassociateMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateMembersCommand(input, context);
    };
    DisassociateMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateMembersCommand(output, context);
    };
    return DisassociateMembersCommand;
}($Command));
export { DisassociateMembersCommand };
//# sourceMappingURL=DisassociateMembersCommand.js.map
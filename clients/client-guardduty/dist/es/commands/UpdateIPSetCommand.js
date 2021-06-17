import { __extends } from "tslib";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateIPSetCommand, serializeAws_restJson1UpdateIPSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the IPSet specified by the IPSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIPSetCommand = /** @class */ (function (_super) {
    __extends(UpdateIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIPSetCommand(input) {
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
    UpdateIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIPSetCommand(input, context);
    };
    UpdateIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIPSetCommand(output, context);
    };
    return UpdateIPSetCommand;
}($Command));
export { UpdateIPSetCommand };
//# sourceMappingURL=UpdateIPSetCommand.js.map
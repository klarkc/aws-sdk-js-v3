import { __extends } from "tslib";
import { UpdateThreatIntelSetRequest, UpdateThreatIntelSetResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateThreatIntelSetCommand, serializeAws_restJson1UpdateThreatIntelSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link UpdateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThreatIntelSetCommand = /** @class */ (function (_super) {
    __extends(UpdateThreatIntelSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThreatIntelSetCommand(input) {
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
    UpdateThreatIntelSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateThreatIntelSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThreatIntelSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThreatIntelSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThreatIntelSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThreatIntelSetCommand(input, context);
    };
    UpdateThreatIntelSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThreatIntelSetCommand(output, context);
    };
    return UpdateThreatIntelSetCommand;
}($Command));
export { UpdateThreatIntelSetCommand };
//# sourceMappingURL=UpdateThreatIntelSetCommand.js.map
import { __extends } from "tslib";
import { UpdateApplicationSettingsRequest, UpdateApplicationSettingsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateApplicationSettingsCommand, serializeAws_restJson1UpdateApplicationSettingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationSettingsCommand(input) {
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
    UpdateApplicationSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateApplicationSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApplicationSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApplicationSettingsCommand(input, context);
    };
    UpdateApplicationSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApplicationSettingsCommand(output, context);
    };
    return UpdateApplicationSettingsCommand;
}($Command));
export { UpdateApplicationSettingsCommand };
//# sourceMappingURL=UpdateApplicationSettingsCommand.js.map
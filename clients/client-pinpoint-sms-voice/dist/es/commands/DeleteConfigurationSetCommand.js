import { __extends } from "tslib";
import { DeleteConfigurationSetRequest, DeleteConfigurationSetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteConfigurationSetCommand, serializeAws_restJson1DeleteConfigurationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes an existing configuration set.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, DeleteConfigurationSetCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, DeleteConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new DeleteConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationSetCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationSetCommand(input) {
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
    DeleteConfigurationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "DeleteConfigurationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConfigurationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteConfigurationSetCommand(input, context);
    };
    DeleteConfigurationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteConfigurationSetCommand(output, context);
    };
    return DeleteConfigurationSetCommand;
}($Command));
export { DeleteConfigurationSetCommand };
//# sourceMappingURL=DeleteConfigurationSetCommand.js.map
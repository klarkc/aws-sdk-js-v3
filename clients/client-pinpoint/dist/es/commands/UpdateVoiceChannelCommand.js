import { __extends } from "tslib";
import { UpdateVoiceChannelRequest, UpdateVoiceChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateVoiceChannelCommand, serializeAws_restJson1UpdateVoiceChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the voice channel for an application or updates the status and settings of the voice channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateVoiceChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVoiceChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateVoiceChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVoiceChannelCommand(input) {
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
    UpdateVoiceChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateVoiceChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVoiceChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVoiceChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVoiceChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateVoiceChannelCommand(input, context);
    };
    UpdateVoiceChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateVoiceChannelCommand(output, context);
    };
    return UpdateVoiceChannelCommand;
}($Command));
export { UpdateVoiceChannelCommand };
//# sourceMappingURL=UpdateVoiceChannelCommand.js.map
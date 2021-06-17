import { __extends } from "tslib";
import { DeleteVoiceChannelRequest, DeleteVoiceChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteVoiceChannelCommand, serializeAws_restJson1DeleteVoiceChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the voice channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteVoiceChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteVoiceChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVoiceChannelCommand(input) {
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
    DeleteVoiceChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteVoiceChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVoiceChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVoiceChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVoiceChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteVoiceChannelCommand(input, context);
    };
    DeleteVoiceChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteVoiceChannelCommand(output, context);
    };
    return DeleteVoiceChannelCommand;
}($Command));
export { DeleteVoiceChannelCommand };
//# sourceMappingURL=DeleteVoiceChannelCommand.js.map
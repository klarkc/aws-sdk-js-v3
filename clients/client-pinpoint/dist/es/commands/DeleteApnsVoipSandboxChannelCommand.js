import { __extends } from "tslib";
import { DeleteApnsVoipSandboxChannelRequest, DeleteApnsVoipSandboxChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand, serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApnsVoipSandboxChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipSandboxChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApnsVoipSandboxChannelCommand(input) {
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
    DeleteApnsVoipSandboxChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteApnsVoipSandboxChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApnsVoipSandboxChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApnsVoipSandboxChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApnsVoipSandboxChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand(input, context);
    };
    DeleteApnsVoipSandboxChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand(output, context);
    };
    return DeleteApnsVoipSandboxChannelCommand;
}($Command));
export { DeleteApnsVoipSandboxChannelCommand };
//# sourceMappingURL=DeleteApnsVoipSandboxChannelCommand.js.map
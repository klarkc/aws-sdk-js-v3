import { __extends } from "tslib";
import { UpdateApnsVoipSandboxChannelRequest, UpdateApnsVoipSandboxChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand, serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApnsVoipSandboxChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipSandboxChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApnsVoipSandboxChannelCommand(input) {
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
    UpdateApnsVoipSandboxChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateApnsVoipSandboxChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApnsVoipSandboxChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApnsVoipSandboxChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApnsVoipSandboxChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand(input, context);
    };
    UpdateApnsVoipSandboxChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand(output, context);
    };
    return UpdateApnsVoipSandboxChannelCommand;
}($Command));
export { UpdateApnsVoipSandboxChannelCommand };
//# sourceMappingURL=UpdateApnsVoipSandboxChannelCommand.js.map
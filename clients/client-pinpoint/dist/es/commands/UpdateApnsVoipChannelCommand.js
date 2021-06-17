import { __extends } from "tslib";
import { UpdateApnsVoipChannelRequest, UpdateApnsVoipChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateApnsVoipChannelCommand, serializeAws_restJson1UpdateApnsVoipChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApnsVoipChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateApnsVoipChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApnsVoipChannelCommand(input) {
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
    UpdateApnsVoipChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateApnsVoipChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApnsVoipChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApnsVoipChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApnsVoipChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApnsVoipChannelCommand(input, context);
    };
    UpdateApnsVoipChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApnsVoipChannelCommand(output, context);
    };
    return UpdateApnsVoipChannelCommand;
}($Command));
export { UpdateApnsVoipChannelCommand };
//# sourceMappingURL=UpdateApnsVoipChannelCommand.js.map
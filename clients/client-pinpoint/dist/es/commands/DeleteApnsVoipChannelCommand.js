import { __extends } from "tslib";
import { DeleteApnsVoipChannelRequest, DeleteApnsVoipChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteApnsVoipChannelCommand, serializeAws_restJson1DeleteApnsVoipChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApnsVoipChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApnsVoipChannelCommand(input) {
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
    DeleteApnsVoipChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteApnsVoipChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApnsVoipChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApnsVoipChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApnsVoipChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteApnsVoipChannelCommand(input, context);
    };
    DeleteApnsVoipChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteApnsVoipChannelCommand(output, context);
    };
    return DeleteApnsVoipChannelCommand;
}($Command));
export { DeleteApnsVoipChannelCommand };
//# sourceMappingURL=DeleteApnsVoipChannelCommand.js.map
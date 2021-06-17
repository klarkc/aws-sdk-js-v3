import { __extends } from "tslib";
import { DeleteApnsChannelRequest, DeleteApnsChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteApnsChannelCommand, serializeAws_restJson1DeleteApnsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the APNs channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApnsChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteApnsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApnsChannelCommand(input) {
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
    DeleteApnsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteApnsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApnsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApnsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApnsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteApnsChannelCommand(input, context);
    };
    DeleteApnsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteApnsChannelCommand(output, context);
    };
    return DeleteApnsChannelCommand;
}($Command));
export { DeleteApnsChannelCommand };
//# sourceMappingURL=DeleteApnsChannelCommand.js.map
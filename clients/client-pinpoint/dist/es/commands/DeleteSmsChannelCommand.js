import { __extends } from "tslib";
import { DeleteSmsChannelRequest, DeleteSmsChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSmsChannelCommand, serializeAws_restJson1DeleteSmsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the SMS channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSmsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSmsChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteSmsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSmsChannelCommand(input) {
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
    DeleteSmsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteSmsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSmsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSmsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSmsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSmsChannelCommand(input, context);
    };
    DeleteSmsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSmsChannelCommand(output, context);
    };
    return DeleteSmsChannelCommand;
}($Command));
export { DeleteSmsChannelCommand };
//# sourceMappingURL=DeleteSmsChannelCommand.js.map
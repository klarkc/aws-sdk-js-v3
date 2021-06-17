import { __extends } from "tslib";
import { DeleteGcmChannelRequest, DeleteGcmChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteGcmChannelCommand, serializeAws_restJson1DeleteGcmChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the GCM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGcmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGcmChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteGcmChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGcmChannelCommand(input) {
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
    DeleteGcmChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteGcmChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGcmChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGcmChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGcmChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGcmChannelCommand(input, context);
    };
    DeleteGcmChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGcmChannelCommand(output, context);
    };
    return DeleteGcmChannelCommand;
}($Command));
export { DeleteGcmChannelCommand };
//# sourceMappingURL=DeleteGcmChannelCommand.js.map
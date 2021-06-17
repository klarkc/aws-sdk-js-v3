import { __extends } from "tslib";
import { DeleteAdmChannelRequest, DeleteAdmChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAdmChannelCommand, serializeAws_restJson1DeleteAdmChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the ADM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteAdmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAdmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAdmChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteAdmChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAdmChannelCommand(input) {
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
    DeleteAdmChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteAdmChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAdmChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAdmChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAdmChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAdmChannelCommand(input, context);
    };
    DeleteAdmChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAdmChannelCommand(output, context);
    };
    return DeleteAdmChannelCommand;
}($Command));
export { DeleteAdmChannelCommand };
//# sourceMappingURL=DeleteAdmChannelCommand.js.map
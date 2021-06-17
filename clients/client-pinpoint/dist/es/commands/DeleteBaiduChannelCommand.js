import { __extends } from "tslib";
import { DeleteBaiduChannelRequest, DeleteBaiduChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBaiduChannelCommand, serializeAws_restJson1DeleteBaiduChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the Baidu channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBaiduChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteBaiduChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBaiduChannelCommand(input) {
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
    DeleteBaiduChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteBaiduChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBaiduChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBaiduChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBaiduChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBaiduChannelCommand(input, context);
    };
    DeleteBaiduChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBaiduChannelCommand(output, context);
    };
    return DeleteBaiduChannelCommand;
}($Command));
export { DeleteBaiduChannelCommand };
//# sourceMappingURL=DeleteBaiduChannelCommand.js.map
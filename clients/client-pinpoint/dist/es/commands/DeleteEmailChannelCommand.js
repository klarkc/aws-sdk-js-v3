import { __extends } from "tslib";
import { DeleteEmailChannelRequest, DeleteEmailChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEmailChannelCommand, serializeAws_restJson1DeleteEmailChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the email channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEmailChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEmailChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteEmailChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEmailChannelCommand(input) {
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
    DeleteEmailChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteEmailChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEmailChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEmailChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEmailChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEmailChannelCommand(input, context);
    };
    DeleteEmailChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEmailChannelCommand(output, context);
    };
    return DeleteEmailChannelCommand;
}($Command));
export { DeleteEmailChannelCommand };
//# sourceMappingURL=DeleteEmailChannelCommand.js.map
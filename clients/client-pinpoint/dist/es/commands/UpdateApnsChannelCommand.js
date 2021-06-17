import { __extends } from "tslib";
import { UpdateApnsChannelRequest, UpdateApnsChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateApnsChannelCommand, serializeAws_restJson1UpdateApnsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApnsChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApnsChannelCommand(input) {
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
    UpdateApnsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateApnsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApnsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApnsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApnsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApnsChannelCommand(input, context);
    };
    UpdateApnsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApnsChannelCommand(output, context);
    };
    return UpdateApnsChannelCommand;
}($Command));
export { UpdateApnsChannelCommand };
//# sourceMappingURL=UpdateApnsChannelCommand.js.map
import { __extends } from "tslib";
import { UpdateSmsChannelRequest, UpdateSmsChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateSmsChannelCommand, serializeAws_restJson1UpdateSmsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSmsChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSmsChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateSmsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSmsChannelCommand(input) {
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
    UpdateSmsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateSmsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSmsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSmsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSmsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSmsChannelCommand(input, context);
    };
    UpdateSmsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSmsChannelCommand(output, context);
    };
    return UpdateSmsChannelCommand;
}($Command));
export { UpdateSmsChannelCommand };
//# sourceMappingURL=UpdateSmsChannelCommand.js.map
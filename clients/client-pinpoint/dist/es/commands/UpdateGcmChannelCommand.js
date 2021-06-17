import { __extends } from "tslib";
import { UpdateGcmChannelRequest, UpdateGcmChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateGcmChannelCommand, serializeAws_restJson1UpdateGcmChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGcmChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGcmChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGcmChannelCommand(input) {
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
    UpdateGcmChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateGcmChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGcmChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGcmChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGcmChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGcmChannelCommand(input, context);
    };
    UpdateGcmChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGcmChannelCommand(output, context);
    };
    return UpdateGcmChannelCommand;
}($Command));
export { UpdateGcmChannelCommand };
//# sourceMappingURL=UpdateGcmChannelCommand.js.map
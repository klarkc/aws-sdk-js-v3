import { __extends } from "tslib";
import { UpdateDestinationRequest, UpdateDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDestinationCommand, serializeAws_restJson1UpdateDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties of a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDestinationCommand = /** @class */ (function (_super) {
    __extends(UpdateDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDestinationCommand(input) {
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
    UpdateDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "UpdateDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDestinationCommand(input, context);
    };
    UpdateDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDestinationCommand(output, context);
    };
    return UpdateDestinationCommand;
}($Command));
export { UpdateDestinationCommand };
//# sourceMappingURL=UpdateDestinationCommand.js.map
import { __extends } from "tslib";
import { CreateDestinationRequest, CreateDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDestinationCommand, serializeAws_restJson1CreateDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new destination that maps a device message to an AWS IoT rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDestinationCommand = /** @class */ (function (_super) {
    __extends(CreateDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDestinationCommand(input) {
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
    CreateDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "CreateDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDestinationCommand(input, context);
    };
    CreateDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDestinationCommand(output, context);
    };
    return CreateDestinationCommand;
}($Command));
export { CreateDestinationCommand };
//# sourceMappingURL=CreateDestinationCommand.js.map
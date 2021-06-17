import { __extends } from "tslib";
import { CreateWirelessGatewayTaskRequest, CreateWirelessGatewayTaskResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWirelessGatewayTaskCommand, serializeAws_restJson1CreateWirelessGatewayTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a task for a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWirelessGatewayTaskCommand = /** @class */ (function (_super) {
    __extends(CreateWirelessGatewayTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWirelessGatewayTaskCommand(input) {
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
    CreateWirelessGatewayTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "CreateWirelessGatewayTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWirelessGatewayTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWirelessGatewayTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWirelessGatewayTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWirelessGatewayTaskCommand(input, context);
    };
    CreateWirelessGatewayTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWirelessGatewayTaskCommand(output, context);
    };
    return CreateWirelessGatewayTaskCommand;
}($Command));
export { CreateWirelessGatewayTaskCommand };
//# sourceMappingURL=CreateWirelessGatewayTaskCommand.js.map
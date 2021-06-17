import { __extends } from "tslib";
import { RegisterThingRequest, RegisterThingResponse } from "../models/models_2";
import { deserializeAws_restJson1RegisterThingCommand, serializeAws_restJson1RegisterThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions a thing in the device registry. RegisterThing calls other AWS IoT control
 *          plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot">
 *             AWS IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">AWS Customer Support</a> to raise
 *          your throttling limits if necessary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterThingCommandInput} for command's `input` shape.
 * @see {@link RegisterThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterThingCommand = /** @class */ (function (_super) {
    __extends(RegisterThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterThingCommand(input) {
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
    RegisterThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RegisterThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterThingCommand(input, context);
    };
    RegisterThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterThingCommand(output, context);
    };
    return RegisterThingCommand;
}($Command));
export { RegisterThingCommand };
//# sourceMappingURL=RegisterThingCommand.js.map
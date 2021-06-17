import { __extends } from "tslib";
import { StopThingRegistrationTaskRequest, StopThingRegistrationTaskResponse } from "../models/models_2";
import { deserializeAws_restJson1StopThingRegistrationTaskCommand, serializeAws_restJson1StopThingRegistrationTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StopThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StopThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StopThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StopThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopThingRegistrationTaskCommand = /** @class */ (function (_super) {
    __extends(StopThingRegistrationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopThingRegistrationTaskCommand(input) {
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
    StopThingRegistrationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "StopThingRegistrationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopThingRegistrationTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopThingRegistrationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopThingRegistrationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopThingRegistrationTaskCommand(input, context);
    };
    StopThingRegistrationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopThingRegistrationTaskCommand(output, context);
    };
    return StopThingRegistrationTaskCommand;
}($Command));
export { StopThingRegistrationTaskCommand };
//# sourceMappingURL=StopThingRegistrationTaskCommand.js.map
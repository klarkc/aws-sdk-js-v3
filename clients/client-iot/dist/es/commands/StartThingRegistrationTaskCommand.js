import { __extends } from "tslib";
import { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_2";
import { deserializeAws_restJson1StartThingRegistrationTaskCommand, serializeAws_restJson1StartThingRegistrationTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StartThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartThingRegistrationTaskCommand = /** @class */ (function (_super) {
    __extends(StartThingRegistrationTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartThingRegistrationTaskCommand(input) {
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
    StartThingRegistrationTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "StartThingRegistrationTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartThingRegistrationTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartThingRegistrationTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartThingRegistrationTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartThingRegistrationTaskCommand(input, context);
    };
    StartThingRegistrationTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartThingRegistrationTaskCommand(output, context);
    };
    return StartThingRegistrationTaskCommand;
}($Command));
export { StartThingRegistrationTaskCommand };
//# sourceMappingURL=StartThingRegistrationTaskCommand.js.map
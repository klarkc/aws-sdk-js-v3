import { __extends } from "tslib";
import { CreateDimensionRequest, CreateDimensionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDimensionCommand, serializeAws_restJson1CreateDimensionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDimensionCommandInput} for command's `input` shape.
 * @see {@link CreateDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDimensionCommand = /** @class */ (function (_super) {
    __extends(CreateDimensionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDimensionCommand(input) {
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
    CreateDimensionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateDimensionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDimensionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDimensionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDimensionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDimensionCommand(input, context);
    };
    CreateDimensionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDimensionCommand(output, context);
    };
    return CreateDimensionCommand;
}($Command));
export { CreateDimensionCommand };
//# sourceMappingURL=CreateDimensionCommand.js.map
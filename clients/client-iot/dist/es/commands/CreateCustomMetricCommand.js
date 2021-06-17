import { __extends } from "tslib";
import { CreateCustomMetricRequest, CreateCustomMetricResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCustomMetricCommand, serializeAws_restJson1CreateCustomMetricCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Use this API to define a
 *       Custom
 *       Metric
 *       published by your devices to Device Defender. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomMetricCommand = /** @class */ (function (_super) {
    __extends(CreateCustomMetricCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomMetricCommand(input) {
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
    CreateCustomMetricCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateCustomMetricCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomMetricRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomMetricResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomMetricCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCustomMetricCommand(input, context);
    };
    CreateCustomMetricCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCustomMetricCommand(output, context);
    };
    return CreateCustomMetricCommand;
}($Command));
export { CreateCustomMetricCommand };
//# sourceMappingURL=CreateCustomMetricCommand.js.map
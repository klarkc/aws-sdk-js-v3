import { __extends } from "tslib";
import { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeCustomMetricCommand, serializeAws_restJson1DescribeCustomMetricCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Gets information about a Device Defender detect custom metric.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomMetricCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomMetricCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomMetricCommand(input) {
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
    DescribeCustomMetricCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeCustomMetricCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomMetricRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCustomMetricResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomMetricCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCustomMetricCommand(input, context);
    };
    DescribeCustomMetricCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCustomMetricCommand(output, context);
    };
    return DescribeCustomMetricCommand;
}($Command));
export { DescribeCustomMetricCommand };
//# sourceMappingURL=DescribeCustomMetricCommand.js.map
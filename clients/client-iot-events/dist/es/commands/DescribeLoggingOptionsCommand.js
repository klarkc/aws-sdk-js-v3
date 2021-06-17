import { __extends } from "tslib";
import { DescribeLoggingOptionsRequest, DescribeLoggingOptionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeLoggingOptionsCommand, serializeAws_restJson1DescribeLoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current settings of the AWS IoT Events logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeLoggingOptionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeLoggingOptionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeLoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoggingOptionsCommand(input) {
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
    DescribeLoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DescribeLoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoggingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeLoggingOptionsCommand(input, context);
    };
    DescribeLoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeLoggingOptionsCommand(output, context);
    };
    return DescribeLoggingOptionsCommand;
}($Command));
export { DescribeLoggingOptionsCommand };
//# sourceMappingURL=DescribeLoggingOptionsCommand.js.map
import { __extends } from "tslib";
import { DescribeDetectorRequest, DescribeDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDetectorCommand, serializeAws_restJson1DescribeDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified detector (instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDetectorCommand = /** @class */ (function (_super) {
    __extends(DescribeDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDetectorCommand(input) {
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
    DescribeDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "DescribeDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDetectorCommand(input, context);
    };
    DescribeDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDetectorCommand(output, context);
    };
    return DescribeDetectorCommand;
}($Command));
export { DescribeDetectorCommand };
//# sourceMappingURL=DescribeDetectorCommand.js.map
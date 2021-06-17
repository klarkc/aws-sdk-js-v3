import { __extends } from "tslib";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeInputCommand, serializeAws_restJson1DescribeInputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInputCommand = /** @class */ (function (_super) {
    __extends(DescribeInputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInputCommand(input) {
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
    DescribeInputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DescribeInputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInputCommand(input, context);
    };
    DescribeInputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInputCommand(output, context);
    };
    return DescribeInputCommand;
}($Command));
export { DescribeInputCommand };
//# sourceMappingURL=DescribeInputCommand.js.map
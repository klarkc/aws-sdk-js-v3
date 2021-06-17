import { __extends } from "tslib";
import { DescribeDetectorModelRequest, DescribeDetectorModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDetectorModelCommand, serializeAws_restJson1DescribeDetectorModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
 *       information about the latest version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDetectorModelCommand = /** @class */ (function (_super) {
    __extends(DescribeDetectorModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDetectorModelCommand(input) {
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
    DescribeDetectorModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DescribeDetectorModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDetectorModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDetectorModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDetectorModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDetectorModelCommand(input, context);
    };
    DescribeDetectorModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDetectorModelCommand(output, context);
    };
    return DescribeDetectorModelCommand;
}($Command));
export { DescribeDetectorModelCommand };
//# sourceMappingURL=DescribeDetectorModelCommand.js.map
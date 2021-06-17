import { __extends } from "tslib";
import { DescribeDetectorModelAnalysisRequest, DescribeDetectorModelAnalysisResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDetectorModelAnalysisCommand, serializeAws_restJson1DescribeDetectorModelAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves runtime information about a detector model analysis.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDetectorModelAnalysisCommand = /** @class */ (function (_super) {
    __extends(DescribeDetectorModelAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDetectorModelAnalysisCommand(input) {
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
    DescribeDetectorModelAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DescribeDetectorModelAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDetectorModelAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDetectorModelAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDetectorModelAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDetectorModelAnalysisCommand(input, context);
    };
    DescribeDetectorModelAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDetectorModelAnalysisCommand(output, context);
    };
    return DescribeDetectorModelAnalysisCommand;
}($Command));
export { DescribeDetectorModelAnalysisCommand };
//# sourceMappingURL=DescribeDetectorModelAnalysisCommand.js.map
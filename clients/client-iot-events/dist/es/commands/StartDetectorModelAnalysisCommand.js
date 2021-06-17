import { __extends } from "tslib";
import { StartDetectorModelAnalysisRequest, StartDetectorModelAnalysisResponse } from "../models/models_0";
import { deserializeAws_restJson1StartDetectorModelAnalysisCommand, serializeAws_restJson1StartDetectorModelAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs an analysis of your detector model. For more information,
 *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a>
 *       in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, StartDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, StartDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new StartDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDetectorModelAnalysisCommand = /** @class */ (function (_super) {
    __extends(StartDetectorModelAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDetectorModelAnalysisCommand(input) {
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
    StartDetectorModelAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "StartDetectorModelAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDetectorModelAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDetectorModelAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDetectorModelAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartDetectorModelAnalysisCommand(input, context);
    };
    StartDetectorModelAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartDetectorModelAnalysisCommand(output, context);
    };
    return StartDetectorModelAnalysisCommand;
}($Command));
export { StartDetectorModelAnalysisCommand };
//# sourceMappingURL=StartDetectorModelAnalysisCommand.js.map
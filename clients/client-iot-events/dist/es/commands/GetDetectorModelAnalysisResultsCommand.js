import { __extends } from "tslib";
import { GetDetectorModelAnalysisResultsRequest, GetDetectorModelAnalysisResultsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand, serializeAws_restJson1GetDetectorModelAnalysisResultsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new GetDetectorModelAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorModelAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorModelAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDetectorModelAnalysisResultsCommand = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDetectorModelAnalysisResultsCommand(input) {
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
    GetDetectorModelAnalysisResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "GetDetectorModelAnalysisResultsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDetectorModelAnalysisResultsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDetectorModelAnalysisResultsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDetectorModelAnalysisResultsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDetectorModelAnalysisResultsCommand(input, context);
    };
    GetDetectorModelAnalysisResultsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand(output, context);
    };
    return GetDetectorModelAnalysisResultsCommand;
}($Command));
export { GetDetectorModelAnalysisResultsCommand };
//# sourceMappingURL=GetDetectorModelAnalysisResultsCommand.js.map
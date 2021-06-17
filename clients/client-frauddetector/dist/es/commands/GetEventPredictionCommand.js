import { __extends } from "tslib";
import { GetEventPredictionRequest, GetEventPredictionResult } from "../models/models_0";
import { deserializeAws_json1_1GetEventPredictionCommand, serializeAws_json1_1GetEventPredictionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEventPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventPredictionCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventPredictionCommand = /** @class */ (function (_super) {
    __extends(GetEventPredictionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEventPredictionCommand(input) {
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
    GetEventPredictionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetEventPredictionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEventPredictionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEventPredictionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEventPredictionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEventPredictionCommand(input, context);
    };
    GetEventPredictionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEventPredictionCommand(output, context);
    };
    return GetEventPredictionCommand;
}($Command));
export { GetEventPredictionCommand };
//# sourceMappingURL=GetEventPredictionCommand.js.map
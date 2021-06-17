import { __extends } from "tslib";
import { CancelBatchPredictionJobRequest, CancelBatchPredictionJobResult } from "../models/models_0";
import { deserializeAws_json1_1CancelBatchPredictionJobCommand, serializeAws_json1_1CancelBatchPredictionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CancelBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CancelBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelBatchPredictionJobCommand = /** @class */ (function (_super) {
    __extends(CancelBatchPredictionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelBatchPredictionJobCommand(input) {
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
    CancelBatchPredictionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "CancelBatchPredictionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelBatchPredictionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelBatchPredictionJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelBatchPredictionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelBatchPredictionJobCommand(input, context);
    };
    CancelBatchPredictionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelBatchPredictionJobCommand(output, context);
    };
    return CancelBatchPredictionJobCommand;
}($Command));
export { CancelBatchPredictionJobCommand };
//# sourceMappingURL=CancelBatchPredictionJobCommand.js.map
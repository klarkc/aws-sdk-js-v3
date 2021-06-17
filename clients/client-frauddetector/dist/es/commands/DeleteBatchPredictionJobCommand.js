import { __extends } from "tslib";
import { DeleteBatchPredictionJobRequest, DeleteBatchPredictionJobResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteBatchPredictionJobCommand, serializeAws_json1_1DeleteBatchPredictionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBatchPredictionJobCommand = /** @class */ (function (_super) {
    __extends(DeleteBatchPredictionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBatchPredictionJobCommand(input) {
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
    DeleteBatchPredictionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteBatchPredictionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBatchPredictionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBatchPredictionJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBatchPredictionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteBatchPredictionJobCommand(input, context);
    };
    DeleteBatchPredictionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteBatchPredictionJobCommand(output, context);
    };
    return DeleteBatchPredictionJobCommand;
}($Command));
export { DeleteBatchPredictionJobCommand };
//# sourceMappingURL=DeleteBatchPredictionJobCommand.js.map
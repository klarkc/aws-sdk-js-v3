import { __extends } from "tslib";
import { DeletePredictorBacktestExportJobRequest } from "../models/models_0";
import { deserializeAws_json1_1DeletePredictorBacktestExportJobCommand, serializeAws_json1_1DeletePredictorBacktestExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a predictor backtest export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeletePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeletePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeletePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DeletePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePredictorBacktestExportJobCommand = /** @class */ (function (_super) {
    __extends(DeletePredictorBacktestExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePredictorBacktestExportJobCommand(input) {
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
    DeletePredictorBacktestExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DeletePredictorBacktestExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePredictorBacktestExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePredictorBacktestExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePredictorBacktestExportJobCommand(input, context);
    };
    DeletePredictorBacktestExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePredictorBacktestExportJobCommand(output, context);
    };
    return DeletePredictorBacktestExportJobCommand;
}($Command));
export { DeletePredictorBacktestExportJobCommand };
//# sourceMappingURL=DeletePredictorBacktestExportJobCommand.js.map
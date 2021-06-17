import { __extends } from "tslib";
import { ListPredictorBacktestExportJobsRequest, ListPredictorBacktestExportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPredictorBacktestExportJobsCommand, serializeAws_json1_1ListPredictorBacktestExportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary
 *             for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *         <p>To retrieve the complete set of properties for a particular backtest export job, use the
 *             ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPredictorBacktestExportJobsCommand = /** @class */ (function (_super) {
    __extends(ListPredictorBacktestExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPredictorBacktestExportJobsCommand(input) {
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
    ListPredictorBacktestExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListPredictorBacktestExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPredictorBacktestExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPredictorBacktestExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPredictorBacktestExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPredictorBacktestExportJobsCommand(input, context);
    };
    ListPredictorBacktestExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPredictorBacktestExportJobsCommand(output, context);
    };
    return ListPredictorBacktestExportJobsCommand;
}($Command));
export { ListPredictorBacktestExportJobsCommand };
//# sourceMappingURL=ListPredictorBacktestExportJobsCommand.js.map
import { __extends } from "tslib";
import { DescribePredictorBacktestExportJobRequest, DescribePredictorBacktestExportJobResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribePredictorBacktestExportJobCommand, serializeAws_json1_1DescribePredictorBacktestExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *         <p>In addition to listing the properties provided by the user in the
 *             <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
 *             following properties:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>CreationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>LastModificationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>Status</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Message</code> (if an error occurred)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePredictorBacktestExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribePredictorBacktestExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePredictorBacktestExportJobCommand(input) {
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
    DescribePredictorBacktestExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DescribePredictorBacktestExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePredictorBacktestExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePredictorBacktestExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePredictorBacktestExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePredictorBacktestExportJobCommand(input, context);
    };
    DescribePredictorBacktestExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePredictorBacktestExportJobCommand(output, context);
    };
    return DescribePredictorBacktestExportJobCommand;
}($Command));
export { DescribePredictorBacktestExportJobCommand };
//# sourceMappingURL=DescribePredictorBacktestExportJobCommand.js.map
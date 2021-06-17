import { __extends } from "tslib";
import { DescribePredictorRequest, DescribePredictorResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePredictorCommand, serializeAws_json1_1DescribePredictorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a predictor created using the <a>CreatePredictor</a>
 *       operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
 *       request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
 *           evaluated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePredictorCommand = /** @class */ (function (_super) {
    __extends(DescribePredictorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePredictorCommand(input) {
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
    DescribePredictorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DescribePredictorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePredictorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePredictorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePredictorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePredictorCommand(input, context);
    };
    DescribePredictorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePredictorCommand(output, context);
    };
    return DescribePredictorCommand;
}($Command));
export { DescribePredictorCommand };
//# sourceMappingURL=DescribePredictorCommand.js.map
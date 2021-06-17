import { __extends } from "tslib";
import { DescribeForecastExportJobRequest, DescribeForecastExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeForecastExportJobCommand, serializeAws_json1_1DescribeForecastExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p>
 *          <p>In addition to listing the properties provided by the user in the
 *         <code>CreateForecastExportJob</code> request, this operation lists the following
 *       properties:</p>
 *          <ul>
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
 * import { ForecastClient, DescribeForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeForecastExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeForecastExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeForecastExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeForecastExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeForecastExportJobCommand(input) {
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
    DescribeForecastExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DescribeForecastExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeForecastExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeForecastExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeForecastExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeForecastExportJobCommand(input, context);
    };
    DescribeForecastExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeForecastExportJobCommand(output, context);
    };
    return DescribeForecastExportJobCommand;
}($Command));
export { DescribeForecastExportJobCommand };
//# sourceMappingURL=DescribeForecastExportJobCommand.js.map
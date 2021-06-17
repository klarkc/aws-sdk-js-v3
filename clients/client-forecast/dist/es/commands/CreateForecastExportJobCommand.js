import { __extends } from "tslib";
import { CreateForecastExportJobRequest, CreateForecastExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateForecastExportJobCommand, serializeAws_json1_1CreateForecastExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your
 *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
 *          <p><ForecastExportJobName>_<ExportTimestamp>_<PartNumber></p>
 *          <p>where the <ExportTimestamp> component is in Java SimpleDateFormat
 *       (yyyy-MM-ddTHH-mm-ssZ).</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
 *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
 *         <a>aws-forecast-iam-roles</a>.</p>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
 *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateForecastExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateForecastExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateForecastExportJobCommand = /** @class */ (function (_super) {
    __extends(CreateForecastExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateForecastExportJobCommand(input) {
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
    CreateForecastExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "CreateForecastExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateForecastExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateForecastExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateForecastExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateForecastExportJobCommand(input, context);
    };
    CreateForecastExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateForecastExportJobCommand(output, context);
    };
    return CreateForecastExportJobCommand;
}($Command));
export { CreateForecastExportJobCommand };
//# sourceMappingURL=CreateForecastExportJobCommand.js.map
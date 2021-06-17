import { __extends } from "tslib";
import { ListForecastExportJobsRequest, ListForecastExportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListForecastExportJobsCommand, serializeAws_json1_1ListForecastExportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
 *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
 *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
 *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListForecastExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListForecastExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListForecastExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListForecastExportJobsCommand = /** @class */ (function (_super) {
    __extends(ListForecastExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListForecastExportJobsCommand(input) {
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
    ListForecastExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListForecastExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListForecastExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListForecastExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListForecastExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListForecastExportJobsCommand(input, context);
    };
    ListForecastExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListForecastExportJobsCommand(output, context);
    };
    return ListForecastExportJobsCommand;
}($Command));
export { ListForecastExportJobsCommand };
//# sourceMappingURL=ListForecastExportJobsCommand.js.map
import { __extends } from "tslib";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetImportJobsCommand, serializeAws_json1_1ListDatasetImportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a
 *       summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
 *       complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a>
 *       objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetImportJobsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetImportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetImportJobsCommand(input) {
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
    ListDatasetImportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListDatasetImportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetImportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetImportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetImportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDatasetImportJobsCommand(input, context);
    };
    ListDatasetImportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDatasetImportJobsCommand(output, context);
    };
    return ListDatasetImportJobsCommand;
}($Command));
export { ListDatasetImportJobsCommand };
//# sourceMappingURL=ListDatasetImportJobsCommand.js.map
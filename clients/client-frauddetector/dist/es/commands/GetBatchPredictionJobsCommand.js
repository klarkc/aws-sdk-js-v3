import { __extends } from "tslib";
import { GetBatchPredictionJobsRequest, GetBatchPredictionJobsResult } from "../models/models_0";
import { deserializeAws_json1_1GetBatchPredictionJobsCommand, serializeAws_json1_1GetBatchPredictionJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetBatchPredictionJobsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetBatchPredictionJobsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetBatchPredictionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBatchPredictionJobsCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionJobsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBatchPredictionJobsCommand = /** @class */ (function (_super) {
    __extends(GetBatchPredictionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBatchPredictionJobsCommand(input) {
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
    GetBatchPredictionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetBatchPredictionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBatchPredictionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBatchPredictionJobsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBatchPredictionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBatchPredictionJobsCommand(input, context);
    };
    GetBatchPredictionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBatchPredictionJobsCommand(output, context);
    };
    return GetBatchPredictionJobsCommand;
}($Command));
export { GetBatchPredictionJobsCommand };
//# sourceMappingURL=GetBatchPredictionJobsCommand.js.map
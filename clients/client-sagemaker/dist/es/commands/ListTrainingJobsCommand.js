import { __extends } from "tslib";
import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListTrainingJobsCommand, serializeAws_json1_1ListTrainingJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists training jobs.</p>
 *         <note>
 *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
 *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
 *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
 *                 <code>StatusEquals</code> parameter, which is returned as a response.</p>
 *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p>
 *             <p>
 *                <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code>
 *             </p>
 *             <p>First, 100 trainings jobs with any status, including those other than
 *                 <code>InProgress</code>, are selected (sorted according to the creation time,
 *                 from the most current to the oldest). Next, those with a status of
 *                 <code>InProgress</code> are returned.</p>
 *             <p>You can quickly test the API using the following AWS CLI code.</p>
 *             <p>
 *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
 *                     InProgress</code>
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrainingJobsCommand = /** @class */ (function (_super) {
    __extends(ListTrainingJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrainingJobsCommand(input) {
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
    ListTrainingJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListTrainingJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrainingJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrainingJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrainingJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTrainingJobsCommand(input, context);
    };
    ListTrainingJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTrainingJobsCommand(output, context);
    };
    return ListTrainingJobsCommand;
}($Command));
export { ListTrainingJobsCommand };
//# sourceMappingURL=ListTrainingJobsCommand.js.map
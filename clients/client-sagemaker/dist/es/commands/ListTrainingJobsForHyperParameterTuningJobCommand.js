import { __extends } from "tslib";
import { ListTrainingJobsForHyperParameterTuningJobRequest, ListTrainingJobsForHyperParameterTuningJobResponse, } from "../models/models_2";
import { deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand, serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
 *             jobs that a hyperparameter tuning job launched.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsForHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrainingJobsForHyperParameterTuningJobCommand = /** @class */ (function (_super) {
    __extends(ListTrainingJobsForHyperParameterTuningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrainingJobsForHyperParameterTuningJobCommand(input) {
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
    ListTrainingJobsForHyperParameterTuningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListTrainingJobsForHyperParameterTuningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrainingJobsForHyperParameterTuningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrainingJobsForHyperParameterTuningJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrainingJobsForHyperParameterTuningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(input, context);
    };
    ListTrainingJobsForHyperParameterTuningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(output, context);
    };
    return ListTrainingJobsForHyperParameterTuningJobCommand;
}($Command));
export { ListTrainingJobsForHyperParameterTuningJobCommand };
//# sourceMappingURL=ListTrainingJobsForHyperParameterTuningJobCommand.js.map
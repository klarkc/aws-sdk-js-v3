import { __extends } from "tslib";
import { CreateExperimentRequest, CreateExperimentResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateExperimentCommand, serializeAws_json1_1CreateExperimentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an SageMaker <i>experiment</i>. An experiment is a collection of
 *         <i>trials</i> that are observed, compared and evaluated as a group. A trial is
 *       a set of steps, called <i>trial components</i>, that produce a machine learning
 *       model.</p>
 *          <p>The goal of an experiment is to determine the components that produce the best model.
 *       Multiple trials are performed, each one isolating and measuring the impact of a change to one
 *       or more inputs, while keeping the remaining inputs constant.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p>
 *          <p>To add a description to an experiment, specify the optional <code>Description</code>
 *       parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p>
 *          <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To
 *       view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a
 *       list of all the trials associated with an experiment, call the <a>ListTrials</a>
 *       API. To create a trial call the <a>CreateTrial</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateExperimentCommand = /** @class */ (function (_super) {
    __extends(CreateExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateExperimentCommand(input) {
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
    CreateExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateExperimentCommand(input, context);
    };
    CreateExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateExperimentCommand(output, context);
    };
    return CreateExperimentCommand;
}($Command));
export { CreateExperimentCommand };
//# sourceMappingURL=CreateExperimentCommand.js.map
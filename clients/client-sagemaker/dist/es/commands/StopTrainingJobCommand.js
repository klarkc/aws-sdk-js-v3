import { __extends } from "tslib";
import { StopTrainingJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopTrainingJobCommand, serializeAws_json1_1StopTrainingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
 *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
 *             Algorithms might use this 120-second window to save the model artifacts, so the results
 *             of the training is not lost. </p>
 *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
 *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
 *                 <code>Stopped</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StopTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopTrainingJobCommand = /** @class */ (function (_super) {
    __extends(StopTrainingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopTrainingJobCommand(input) {
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
    StopTrainingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopTrainingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopTrainingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopTrainingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopTrainingJobCommand(input, context);
    };
    StopTrainingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopTrainingJobCommand(output, context);
    };
    return StopTrainingJobCommand;
}($Command));
export { StopTrainingJobCommand };
//# sourceMappingURL=StopTrainingJobCommand.js.map
import { __extends } from "tslib";
import { StopHyperParameterTuningJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopHyperParameterTuningJobCommand, serializeAws_json1_1StopHyperParameterTuningJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a running hyperparameter tuning job and all running training jobs that the
 *             tuning job launched.</p>
 *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
 *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
 *             tuning job moves to the <code>Stopped</code> state, it releases all
 *             reserved
 *             resources for the tuning job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link StopHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopHyperParameterTuningJobCommand = /** @class */ (function (_super) {
    __extends(StopHyperParameterTuningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopHyperParameterTuningJobCommand(input) {
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
    StopHyperParameterTuningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopHyperParameterTuningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopHyperParameterTuningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopHyperParameterTuningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopHyperParameterTuningJobCommand(input, context);
    };
    StopHyperParameterTuningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopHyperParameterTuningJobCommand(output, context);
    };
    return StopHyperParameterTuningJobCommand;
}($Command));
export { StopHyperParameterTuningJobCommand };
//# sourceMappingURL=StopHyperParameterTuningJobCommand.js.map
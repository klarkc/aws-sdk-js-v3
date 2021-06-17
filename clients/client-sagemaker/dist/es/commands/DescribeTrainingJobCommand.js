import { __extends } from "tslib";
import { DescribeTrainingJobRequest, DescribeTrainingJobResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeTrainingJobCommand, serializeAws_json1_1DescribeTrainingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a training job. </p>
 *         <p>Some of the attributes below only appear if the training job successfully starts.
 *             If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and,
 *             depending on the <code>FailureReason</code>, attributes like
 *                 <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>,
 *                 <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be
 *             present in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrainingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrainingJobCommand = /** @class */ (function (_super) {
    __extends(DescribeTrainingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrainingJobCommand(input) {
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
    DescribeTrainingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeTrainingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrainingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrainingJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrainingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrainingJobCommand(input, context);
    };
    DescribeTrainingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrainingJobCommand(output, context);
    };
    return DescribeTrainingJobCommand;
}($Command));
export { DescribeTrainingJobCommand };
//# sourceMappingURL=DescribeTrainingJobCommand.js.map
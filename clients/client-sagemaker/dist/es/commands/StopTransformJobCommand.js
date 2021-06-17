import { __extends } from "tslib";
import { StopTransformJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopTransformJobCommand, serializeAws_json1_1StopTransformJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a transform job.</p>
 *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
 *             changes to <code>Stopping</code>. After Amazon SageMaker
 *             stops
 *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
 *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTransformJobCommandInput} for command's `input` shape.
 * @see {@link StopTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopTransformJobCommand = /** @class */ (function (_super) {
    __extends(StopTransformJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopTransformJobCommand(input) {
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
    StopTransformJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopTransformJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopTransformJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopTransformJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopTransformJobCommand(input, context);
    };
    StopTransformJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopTransformJobCommand(output, context);
    };
    return StopTransformJobCommand;
}($Command));
export { StopTransformJobCommand };
//# sourceMappingURL=StopTransformJobCommand.js.map
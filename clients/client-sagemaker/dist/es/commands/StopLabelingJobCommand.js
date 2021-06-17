import { __extends } from "tslib";
import { StopLabelingJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopLabelingJobCommand, serializeAws_json1_1StopLabelingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
 *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopLabelingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLabelingJobCommandInput} for command's `input` shape.
 * @see {@link StopLabelingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopLabelingJobCommand = /** @class */ (function (_super) {
    __extends(StopLabelingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopLabelingJobCommand(input) {
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
    StopLabelingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopLabelingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopLabelingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopLabelingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopLabelingJobCommand(input, context);
    };
    StopLabelingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopLabelingJobCommand(output, context);
    };
    return StopLabelingJobCommand;
}($Command));
export { StopLabelingJobCommand };
//# sourceMappingURL=StopLabelingJobCommand.js.map
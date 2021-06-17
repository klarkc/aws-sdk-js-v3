import { __extends } from "tslib";
import { StopProcessingJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopProcessingJobCommand, serializeAws_json1_1StopProcessingJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopProcessingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopProcessingJobCommandInput} for command's `input` shape.
 * @see {@link StopProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopProcessingJobCommand = /** @class */ (function (_super) {
    __extends(StopProcessingJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopProcessingJobCommand(input) {
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
    StopProcessingJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopProcessingJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopProcessingJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopProcessingJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopProcessingJobCommand(input, context);
    };
    StopProcessingJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopProcessingJobCommand(output, context);
    };
    return StopProcessingJobCommand;
}($Command));
export { StopProcessingJobCommand };
//# sourceMappingURL=StopProcessingJobCommand.js.map
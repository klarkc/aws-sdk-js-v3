import { __extends } from "tslib";
import { StopCompilationJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopCompilationJobCommand, serializeAws_json1_1StopCompilationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a model compilation job.</p>
 *         <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the
 *             job down. If the job hasn't stopped, it sends the SIGKILL signal.</p>
 *         <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to
 *             <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopCompilationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCompilationJobCommandInput} for command's `input` shape.
 * @see {@link StopCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopCompilationJobCommand = /** @class */ (function (_super) {
    __extends(StopCompilationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopCompilationJobCommand(input) {
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
    StopCompilationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopCompilationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopCompilationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopCompilationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopCompilationJobCommand(input, context);
    };
    StopCompilationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopCompilationJobCommand(output, context);
    };
    return StopCompilationJobCommand;
}($Command));
export { StopCompilationJobCommand };
//# sourceMappingURL=StopCompilationJobCommand.js.map
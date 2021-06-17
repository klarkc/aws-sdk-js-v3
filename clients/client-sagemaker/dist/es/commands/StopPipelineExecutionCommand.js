import { __extends } from "tslib";
import { StopPipelineExecutionRequest, StopPipelineExecutionResponse } from "../models/models_2";
import { deserializeAws_json1_1StopPipelineExecutionCommand, serializeAws_json1_1StopPipelineExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopPipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(StopPipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopPipelineExecutionCommand(input) {
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
    StopPipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopPipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopPipelineExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopPipelineExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopPipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopPipelineExecutionCommand(input, context);
    };
    StopPipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopPipelineExecutionCommand(output, context);
    };
    return StopPipelineExecutionCommand;
}($Command));
export { StopPipelineExecutionCommand };
//# sourceMappingURL=StopPipelineExecutionCommand.js.map
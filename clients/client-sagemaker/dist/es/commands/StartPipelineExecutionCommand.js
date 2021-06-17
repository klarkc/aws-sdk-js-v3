import { __extends } from "tslib";
import { StartPipelineExecutionRequest, StartPipelineExecutionResponse } from "../models/models_2";
import { deserializeAws_json1_1StartPipelineExecutionCommand, serializeAws_json1_1StartPipelineExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartPipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(StartPipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartPipelineExecutionCommand(input) {
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
    StartPipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StartPipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartPipelineExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartPipelineExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartPipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartPipelineExecutionCommand(input, context);
    };
    StartPipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartPipelineExecutionCommand(output, context);
    };
    return StartPipelineExecutionCommand;
}($Command));
export { StartPipelineExecutionCommand };
//# sourceMappingURL=StartPipelineExecutionCommand.js.map
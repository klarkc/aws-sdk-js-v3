import { __extends } from "tslib";
import { UpdatePipelineExecutionRequest, UpdatePipelineExecutionResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdatePipelineExecutionCommand, serializeAws_json1_1UpdatePipelineExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdatePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(UpdatePipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePipelineExecutionCommand(input) {
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
    UpdatePipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdatePipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePipelineExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePipelineExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePipelineExecutionCommand(input, context);
    };
    UpdatePipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePipelineExecutionCommand(output, context);
    };
    return UpdatePipelineExecutionCommand;
}($Command));
export { UpdatePipelineExecutionCommand };
//# sourceMappingURL=UpdatePipelineExecutionCommand.js.map
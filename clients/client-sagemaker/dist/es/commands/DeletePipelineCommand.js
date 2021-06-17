import { __extends } from "tslib";
import { DeletePipelineRequest, DeletePipelineResponse } from "../models/models_1";
import { deserializeAws_json1_1DeletePipelineCommand, serializeAws_json1_1DeletePipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a pipeline if there are no running instances of the pipeline. To delete a
 *         pipeline, you must stop all running instances of the pipeline using the
 *         <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the
 *         pipeline are deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeletePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeletePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeletePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePipelineCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePipelineCommand = /** @class */ (function (_super) {
    __extends(DeletePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePipelineCommand(input) {
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
    DeletePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeletePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePipelineCommand(input, context);
    };
    DeletePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePipelineCommand(output, context);
    };
    return DeletePipelineCommand;
}($Command));
export { DeletePipelineCommand };
//# sourceMappingURL=DeletePipelineCommand.js.map
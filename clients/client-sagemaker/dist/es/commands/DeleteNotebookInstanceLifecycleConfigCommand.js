import { __extends } from "tslib";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand, serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a notebook instance lifecycle configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotebookInstanceLifecycleConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteNotebookInstanceLifecycleConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNotebookInstanceLifecycleConfigCommand(input) {
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
    DeleteNotebookInstanceLifecycleConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteNotebookInstanceLifecycleConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNotebookInstanceLifecycleConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(input, context);
    };
    DeleteNotebookInstanceLifecycleConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(output, context);
    };
    return DeleteNotebookInstanceLifecycleConfigCommand;
}($Command));
export { DeleteNotebookInstanceLifecycleConfigCommand };
//# sourceMappingURL=DeleteNotebookInstanceLifecycleConfigCommand.js.map
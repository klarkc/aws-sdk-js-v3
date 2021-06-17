import { __extends } from "tslib";
import { UpdateNotebookInstanceLifecycleConfigInput, UpdateNotebookInstanceLifecycleConfigOutput, } from "../models/models_2";
import { deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand, serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNotebookInstanceLifecycleConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateNotebookInstanceLifecycleConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNotebookInstanceLifecycleConfigCommand(input) {
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
    UpdateNotebookInstanceLifecycleConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateNotebookInstanceLifecycleConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNotebookInstanceLifecycleConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(input, context);
    };
    UpdateNotebookInstanceLifecycleConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(output, context);
    };
    return UpdateNotebookInstanceLifecycleConfigCommand;
}($Command));
export { UpdateNotebookInstanceLifecycleConfigCommand };
//# sourceMappingURL=UpdateNotebookInstanceLifecycleConfigCommand.js.map
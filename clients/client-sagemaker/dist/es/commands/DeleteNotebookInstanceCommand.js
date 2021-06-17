import { __extends } from "tslib";
import { DeleteNotebookInstanceInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteNotebookInstanceCommand, serializeAws_json1_1DeleteNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you
 *             must call the <code>StopNotebookInstance</code> API. </p>
 *         <important>
 *             <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes
 *                 the ML compute instance, and deletes the ML storage volume and the network interface
 *                 associated with the notebook instance. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNotebookInstanceCommand(input) {
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
    DeleteNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteNotebookInstanceCommand(input, context);
    };
    DeleteNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteNotebookInstanceCommand(output, context);
    };
    return DeleteNotebookInstanceCommand;
}($Command));
export { DeleteNotebookInstanceCommand };
//# sourceMappingURL=DeleteNotebookInstanceCommand.js.map
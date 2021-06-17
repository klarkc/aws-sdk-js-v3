import { __extends } from "tslib";
import { ListNotebookInstanceLifecycleConfigsInput, ListNotebookInstanceLifecycleConfigsOutput, } from "../models/models_2";
import { deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand, serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListNotebookInstanceLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNotebookInstanceLifecycleConfigsCommand = /** @class */ (function (_super) {
    __extends(ListNotebookInstanceLifecycleConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNotebookInstanceLifecycleConfigsCommand(input) {
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
    ListNotebookInstanceLifecycleConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListNotebookInstanceLifecycleConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNotebookInstanceLifecycleConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(input, context);
    };
    ListNotebookInstanceLifecycleConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(output, context);
    };
    return ListNotebookInstanceLifecycleConfigsCommand;
}($Command));
export { ListNotebookInstanceLifecycleConfigsCommand };
//# sourceMappingURL=ListNotebookInstanceLifecycleConfigsCommand.js.map
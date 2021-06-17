import { __extends } from "tslib";
import { CreateNotebookInstanceLifecycleConfigInput, CreateNotebookInstanceLifecycleConfigOutput, } from "../models/models_1";
import { deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand, serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A
 *                 <i>lifecycle configuration</i> is a collection of shell scripts that
 *             run when you create or start a notebook instance.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNotebookInstanceLifecycleConfigCommand = /** @class */ (function (_super) {
    __extends(CreateNotebookInstanceLifecycleConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNotebookInstanceLifecycleConfigCommand(input) {
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
    CreateNotebookInstanceLifecycleConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateNotebookInstanceLifecycleConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNotebookInstanceLifecycleConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(input, context);
    };
    CreateNotebookInstanceLifecycleConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(output, context);
    };
    return CreateNotebookInstanceLifecycleConfigCommand;
}($Command));
export { CreateNotebookInstanceLifecycleConfigCommand };
//# sourceMappingURL=CreateNotebookInstanceLifecycleConfigCommand.js.map
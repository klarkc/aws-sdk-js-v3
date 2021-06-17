import { __extends } from "tslib";
import { DescribeNotebookInstanceLifecycleConfigInput, DescribeNotebookInstanceLifecycleConfigOutput, } from "../models/models_1";
import { deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand, serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of a notebook instance lifecycle configuration.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotebookInstanceLifecycleConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeNotebookInstanceLifecycleConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNotebookInstanceLifecycleConfigCommand(input) {
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
    DescribeNotebookInstanceLifecycleConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeNotebookInstanceLifecycleConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNotebookInstanceLifecycleConfigOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNotebookInstanceLifecycleConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(input, context);
    };
    DescribeNotebookInstanceLifecycleConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(output, context);
    };
    return DescribeNotebookInstanceLifecycleConfigCommand;
}($Command));
export { DescribeNotebookInstanceLifecycleConfigCommand };
//# sourceMappingURL=DescribeNotebookInstanceLifecycleConfigCommand.js.map
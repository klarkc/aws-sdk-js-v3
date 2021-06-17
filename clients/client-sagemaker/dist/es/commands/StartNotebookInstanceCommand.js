import { __extends } from "tslib";
import { StartNotebookInstanceInput } from "../models/models_2";
import { deserializeAws_json1_1StartNotebookInstanceCommand, serializeAws_json1_1StartNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches an ML compute instance with the latest version of the libraries and
 *             attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the
 *             notebook instance status to <code>InService</code>. A notebook instance's status must be
 *                 <code>InService</code> before you can connect to your Jupyter notebook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StartNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link StartNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(StartNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartNotebookInstanceCommand(input) {
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
    StartNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StartNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartNotebookInstanceCommand(input, context);
    };
    StartNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartNotebookInstanceCommand(output, context);
    };
    return StartNotebookInstanceCommand;
}($Command));
export { StartNotebookInstanceCommand };
//# sourceMappingURL=StartNotebookInstanceCommand.js.map
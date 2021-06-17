import { __extends } from "tslib";
import { StopNotebookInstanceInput } from "../models/models_2";
import { deserializeAws_json1_1StopNotebookInstanceCommand, serializeAws_json1_1StopNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker
 *             disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker
 *             stops charging you for the ML compute instance when you call
 *                 <code>StopNotebookInstance</code>.</p>
 *         <p>To access data on the ML storage volume for a notebook instance that has been
 *             terminated, call the <code>StartNotebookInstance</code> API.
 *                 <code>StartNotebookInstance</code> launches another ML compute instance, configures
 *             it, and attaches the preserved ML storage volume so you can continue your work.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link StopNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(StopNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopNotebookInstanceCommand(input) {
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
    StopNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopNotebookInstanceCommand(input, context);
    };
    StopNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopNotebookInstanceCommand(output, context);
    };
    return StopNotebookInstanceCommand;
}($Command));
export { StopNotebookInstanceCommand };
//# sourceMappingURL=StopNotebookInstanceCommand.js.map
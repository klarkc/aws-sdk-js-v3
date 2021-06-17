import { __extends } from "tslib";
import { UpdateNotebookInstanceInput, UpdateNotebookInstanceOutput } from "../models/models_2";
import { deserializeAws_json1_1UpdateNotebookInstanceCommand, serializeAws_json1_1UpdateNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
 *             downgrading the ML compute instance used for your notebook instance to accommodate
 *             changes in your workload requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(UpdateNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNotebookInstanceCommand(input) {
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
    UpdateNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNotebookInstanceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNotebookInstanceCommand(input, context);
    };
    UpdateNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNotebookInstanceCommand(output, context);
    };
    return UpdateNotebookInstanceCommand;
}($Command));
export { UpdateNotebookInstanceCommand };
//# sourceMappingURL=UpdateNotebookInstanceCommand.js.map
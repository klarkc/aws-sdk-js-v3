import { __extends } from "tslib";
import { DeleteTrialComponentRequest, DeleteTrialComponentResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteTrialComponentCommand, serializeAws_json1_1DeleteTrialComponentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified trial component. A trial component must be disassociated from all
 *       trials before the trial component can be deleted. To disassociate a trial component from a
 *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrialComponentCommand = /** @class */ (function (_super) {
    __extends(DeleteTrialComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrialComponentCommand(input) {
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
    DeleteTrialComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteTrialComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrialComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrialComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTrialComponentCommand(input, context);
    };
    DeleteTrialComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTrialComponentCommand(output, context);
    };
    return DeleteTrialComponentCommand;
}($Command));
export { DeleteTrialComponentCommand };
//# sourceMappingURL=DeleteTrialComponentCommand.js.map
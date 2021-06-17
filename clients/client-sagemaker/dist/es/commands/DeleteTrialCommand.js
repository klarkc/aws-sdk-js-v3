import { __extends } from "tslib";
import { DeleteTrialRequest, DeleteTrialResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteTrialCommand, serializeAws_json1_1DeleteTrialCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified trial. All trial components that make up the trial must be deleted
 *       first. Use the <a>DescribeTrialComponent</a> API to get the list of trial
 *       components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrialCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrialCommand = /** @class */ (function (_super) {
    __extends(DeleteTrialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrialCommand(input) {
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
    DeleteTrialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteTrialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrialResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrialCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTrialCommand(input, context);
    };
    DeleteTrialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTrialCommand(output, context);
    };
    return DeleteTrialCommand;
}($Command));
export { DeleteTrialCommand };
//# sourceMappingURL=DeleteTrialCommand.js.map
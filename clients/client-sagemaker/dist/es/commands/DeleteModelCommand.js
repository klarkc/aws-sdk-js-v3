import { __extends } from "tslib";
import { DeleteModelInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteModelCommand, serializeAws_json1_1DeleteModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that
 *             was created in Amazon SageMaker when you called the <a>CreateModel</a> API. It does not
 *             delete model artifacts, inference code, or the IAM role that you specified when
 *             creating the model. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelCommand = /** @class */ (function (_super) {
    __extends(DeleteModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelCommand(input) {
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
    DeleteModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteModelCommand(input, context);
    };
    DeleteModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteModelCommand(output, context);
    };
    return DeleteModelCommand;
}($Command));
export { DeleteModelCommand };
//# sourceMappingURL=DeleteModelCommand.js.map
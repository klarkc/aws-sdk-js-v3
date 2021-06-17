import { __extends } from "tslib";
import { DeleteAlgorithmInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteAlgorithmCommand, serializeAws_json1_1DeleteAlgorithmCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified algorithm from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DeleteAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAlgorithmCommand = /** @class */ (function (_super) {
    __extends(DeleteAlgorithmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAlgorithmCommand(input) {
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
    DeleteAlgorithmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteAlgorithmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAlgorithmInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAlgorithmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAlgorithmCommand(input, context);
    };
    DeleteAlgorithmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAlgorithmCommand(output, context);
    };
    return DeleteAlgorithmCommand;
}($Command));
export { DeleteAlgorithmCommand };
//# sourceMappingURL=DeleteAlgorithmCommand.js.map
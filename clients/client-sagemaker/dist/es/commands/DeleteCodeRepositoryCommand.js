import { __extends } from "tslib";
import { DeleteCodeRepositoryInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteCodeRepositoryCommand, serializeAws_json1_1DeleteCodeRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Git repository from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCodeRepositoryCommand = /** @class */ (function (_super) {
    __extends(DeleteCodeRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCodeRepositoryCommand(input) {
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
    DeleteCodeRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteCodeRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCodeRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCodeRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCodeRepositoryCommand(input, context);
    };
    DeleteCodeRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCodeRepositoryCommand(output, context);
    };
    return DeleteCodeRepositoryCommand;
}($Command));
export { DeleteCodeRepositoryCommand };
//# sourceMappingURL=DeleteCodeRepositoryCommand.js.map
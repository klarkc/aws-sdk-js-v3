import { __extends } from "tslib";
import { UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput } from "../models/models_2";
import { deserializeAws_json1_1UpdateCodeRepositoryCommand, serializeAws_json1_1UpdateCodeRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified Git repository with the specified values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCodeRepositoryCommand = /** @class */ (function (_super) {
    __extends(UpdateCodeRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCodeRepositoryCommand(input) {
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
    UpdateCodeRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateCodeRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCodeRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCodeRepositoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCodeRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCodeRepositoryCommand(input, context);
    };
    UpdateCodeRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCodeRepositoryCommand(output, context);
    };
    return UpdateCodeRepositoryCommand;
}($Command));
export { UpdateCodeRepositoryCommand };
//# sourceMappingURL=UpdateCodeRepositoryCommand.js.map
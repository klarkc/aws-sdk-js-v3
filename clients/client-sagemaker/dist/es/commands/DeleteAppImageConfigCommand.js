import { __extends } from "tslib";
import { DeleteAppImageConfigRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteAppImageConfigCommand, serializeAws_json1_1DeleteAppImageConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppImageConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteAppImageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppImageConfigCommand(input) {
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
    DeleteAppImageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteAppImageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppImageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppImageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppImageConfigCommand(input, context);
    };
    DeleteAppImageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppImageConfigCommand(output, context);
    };
    return DeleteAppImageConfigCommand;
}($Command));
export { DeleteAppImageConfigCommand };
//# sourceMappingURL=DeleteAppImageConfigCommand.js.map
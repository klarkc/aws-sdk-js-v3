import { __extends } from "tslib";
import { DeleteAppRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteAppCommand, serializeAws_json1_1DeleteAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to stop and delete an app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppCommand = /** @class */ (function (_super) {
    __extends(DeleteAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppCommand(input) {
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
    DeleteAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppCommand(input, context);
    };
    DeleteAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppCommand(output, context);
    };
    return DeleteAppCommand;
}($Command));
export { DeleteAppCommand };
//# sourceMappingURL=DeleteAppCommand.js.map
import { __extends } from "tslib";
import { DeleteContextRequest, DeleteContextResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteContextCommand, serializeAws_json1_1DeleteContextCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContextCommandInput} for command's `input` shape.
 * @see {@link DeleteContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContextCommand = /** @class */ (function (_super) {
    __extends(DeleteContextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContextCommand(input) {
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
    DeleteContextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteContextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContextCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContextCommand(input, context);
    };
    DeleteContextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContextCommand(output, context);
    };
    return DeleteContextCommand;
}($Command));
export { DeleteContextCommand };
//# sourceMappingURL=DeleteContextCommand.js.map
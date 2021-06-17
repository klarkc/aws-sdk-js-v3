import { __extends } from "tslib";
import { DeleteImageRequest, DeleteImageResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteImageCommand, serializeAws_json1_1DeleteImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a SageMaker image and all versions of the image. The container images aren't
 *         deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageCommandInput} for command's `input` shape.
 * @see {@link DeleteImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImageCommand = /** @class */ (function (_super) {
    __extends(DeleteImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteImageCommand(input) {
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
    DeleteImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteImageCommand(input, context);
    };
    DeleteImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteImageCommand(output, context);
    };
    return DeleteImageCommand;
}($Command));
export { DeleteImageCommand };
//# sourceMappingURL=DeleteImageCommand.js.map
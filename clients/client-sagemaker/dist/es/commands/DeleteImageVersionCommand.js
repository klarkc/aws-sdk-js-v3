import { __extends } from "tslib";
import { DeleteImageVersionRequest, DeleteImageVersionResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteImageVersionCommand, serializeAws_json1_1DeleteImageVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a version of a SageMaker image. The container image the version represents isn't
 *         deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImageVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteImageVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteImageVersionCommand(input) {
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
    DeleteImageVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteImageVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteImageVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteImageVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteImageVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteImageVersionCommand(input, context);
    };
    DeleteImageVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteImageVersionCommand(output, context);
    };
    return DeleteImageVersionCommand;
}($Command));
export { DeleteImageVersionCommand };
//# sourceMappingURL=DeleteImageVersionCommand.js.map
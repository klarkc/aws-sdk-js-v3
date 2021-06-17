import { __extends } from "tslib";
import { DeleteImagePipelineRequest, DeleteImagePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteImagePipelineCommand, serializeAws_restJson1DeleteImagePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImagePipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImagePipelineCommand = /** @class */ (function (_super) {
    __extends(DeleteImagePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteImagePipelineCommand(input) {
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
    DeleteImagePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "DeleteImagePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteImagePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteImagePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteImagePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteImagePipelineCommand(input, context);
    };
    DeleteImagePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteImagePipelineCommand(output, context);
    };
    return DeleteImagePipelineCommand;
}($Command));
export { DeleteImagePipelineCommand };
//# sourceMappingURL=DeleteImagePipelineCommand.js.map
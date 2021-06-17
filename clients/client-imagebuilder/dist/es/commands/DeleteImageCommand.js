import { __extends } from "tslib";
import { DeleteImageRequest, DeleteImageResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteImageCommand, serializeAws_restJson1DeleteImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageCommandInput} for command's `input` shape.
 * @see {@link DeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ImagebuilderClient";
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
        return serializeAws_restJson1DeleteImageCommand(input, context);
    };
    DeleteImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteImageCommand(output, context);
    };
    return DeleteImageCommand;
}($Command));
export { DeleteImageCommand };
//# sourceMappingURL=DeleteImageCommand.js.map
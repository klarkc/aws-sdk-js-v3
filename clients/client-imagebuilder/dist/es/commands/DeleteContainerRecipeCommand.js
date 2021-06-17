import { __extends } from "tslib";
import { DeleteContainerRecipeRequest, DeleteContainerRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteContainerRecipeCommand, serializeAws_restJson1DeleteContainerRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContainerRecipeCommand = /** @class */ (function (_super) {
    __extends(DeleteContainerRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContainerRecipeCommand(input) {
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
    DeleteContainerRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "DeleteContainerRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContainerRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContainerRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContainerRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteContainerRecipeCommand(input, context);
    };
    DeleteContainerRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteContainerRecipeCommand(output, context);
    };
    return DeleteContainerRecipeCommand;
}($Command));
export { DeleteContainerRecipeCommand };
//# sourceMappingURL=DeleteContainerRecipeCommand.js.map
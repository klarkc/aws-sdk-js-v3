import { __extends } from "tslib";
import { DeleteResourceDefinitionRequest, DeleteResourceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteResourceDefinitionCommand, serializeAws_restJson1DeleteResourceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceDefinitionCommand(input) {
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
    DeleteResourceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteResourceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteResourceDefinitionCommand(input, context);
    };
    DeleteResourceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteResourceDefinitionCommand(output, context);
    };
    return DeleteResourceDefinitionCommand;
}($Command));
export { DeleteResourceDefinitionCommand };
//# sourceMappingURL=DeleteResourceDefinitionCommand.js.map
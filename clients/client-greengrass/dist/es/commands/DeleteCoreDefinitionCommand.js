import { __extends } from "tslib";
import { DeleteCoreDefinitionRequest, DeleteCoreDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCoreDefinitionCommand, serializeAws_restJson1DeleteCoreDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCoreDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteCoreDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCoreDefinitionCommand(input) {
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
    DeleteCoreDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteCoreDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCoreDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCoreDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCoreDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCoreDefinitionCommand(input, context);
    };
    DeleteCoreDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCoreDefinitionCommand(output, context);
    };
    return DeleteCoreDefinitionCommand;
}($Command));
export { DeleteCoreDefinitionCommand };
//# sourceMappingURL=DeleteCoreDefinitionCommand.js.map
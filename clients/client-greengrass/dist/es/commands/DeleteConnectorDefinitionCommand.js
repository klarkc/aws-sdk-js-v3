import { __extends } from "tslib";
import { DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteConnectorDefinitionCommand, serializeAws_restJson1DeleteConnectorDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConnectorDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteConnectorDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConnectorDefinitionCommand(input) {
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
    DeleteConnectorDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteConnectorDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConnectorDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConnectorDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConnectorDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteConnectorDefinitionCommand(input, context);
    };
    DeleteConnectorDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteConnectorDefinitionCommand(output, context);
    };
    return DeleteConnectorDefinitionCommand;
}($Command));
export { DeleteConnectorDefinitionCommand };
//# sourceMappingURL=DeleteConnectorDefinitionCommand.js.map
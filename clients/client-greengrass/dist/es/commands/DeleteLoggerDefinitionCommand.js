import { __extends } from "tslib";
import { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLoggerDefinitionCommand, serializeAws_restJson1DeleteLoggerDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoggerDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteLoggerDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoggerDefinitionCommand(input) {
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
    DeleteLoggerDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteLoggerDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoggerDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoggerDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoggerDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLoggerDefinitionCommand(input, context);
    };
    DeleteLoggerDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLoggerDefinitionCommand(output, context);
    };
    return DeleteLoggerDefinitionCommand;
}($Command));
export { DeleteLoggerDefinitionCommand };
//# sourceMappingURL=DeleteLoggerDefinitionCommand.js.map
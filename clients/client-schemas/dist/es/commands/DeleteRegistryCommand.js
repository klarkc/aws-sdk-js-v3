import { __extends } from "tslib";
import { DeleteRegistryRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteRegistryCommand, serializeAws_restJson1DeleteRegistryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRegistryCommand = /** @class */ (function (_super) {
    __extends(DeleteRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRegistryCommand(input) {
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
    DeleteRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DeleteRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRegistryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRegistryCommand(input, context);
    };
    DeleteRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRegistryCommand(output, context);
    };
    return DeleteRegistryCommand;
}($Command));
export { DeleteRegistryCommand };
//# sourceMappingURL=DeleteRegistryCommand.js.map
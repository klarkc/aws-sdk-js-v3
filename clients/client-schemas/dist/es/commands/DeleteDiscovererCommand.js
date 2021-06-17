import { __extends } from "tslib";
import { DeleteDiscovererRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteDiscovererCommand, serializeAws_restJson1DeleteDiscovererCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DeleteDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiscovererCommandInput} for command's `input` shape.
 * @see {@link DeleteDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDiscovererCommand = /** @class */ (function (_super) {
    __extends(DeleteDiscovererCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDiscovererCommand(input) {
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
    DeleteDiscovererCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DeleteDiscovererCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDiscovererRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDiscovererCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDiscovererCommand(input, context);
    };
    DeleteDiscovererCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDiscovererCommand(output, context);
    };
    return DeleteDiscovererCommand;
}($Command));
export { DeleteDiscovererCommand };
//# sourceMappingURL=DeleteDiscovererCommand.js.map
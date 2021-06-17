import { __extends } from "tslib";
import { DeleteSchemaVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteSchemaVersionCommand, serializeAws_restJson1DeleteSchemaVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete the schema version definition</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteSchemaVersionCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteSchemaVersionCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DeleteSchemaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSchemaVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteSchemaVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSchemaVersionCommand(input) {
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
    DeleteSchemaVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DeleteSchemaVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSchemaVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSchemaVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSchemaVersionCommand(input, context);
    };
    DeleteSchemaVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSchemaVersionCommand(output, context);
    };
    return DeleteSchemaVersionCommand;
}($Command));
export { DeleteSchemaVersionCommand };
//# sourceMappingURL=DeleteSchemaVersionCommand.js.map
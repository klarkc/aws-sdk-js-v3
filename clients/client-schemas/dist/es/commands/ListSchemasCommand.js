import { __extends } from "tslib";
import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSchemasCommand, serializeAws_restJson1ListSchemasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchemasCommand = /** @class */ (function (_super) {
    __extends(ListSchemasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchemasCommand(input) {
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
    ListSchemasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "ListSchemasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSchemasCommand(input, context);
    };
    ListSchemasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSchemasCommand(output, context);
    };
    return ListSchemasCommand;
}($Command));
export { ListSchemasCommand };
//# sourceMappingURL=ListSchemasCommand.js.map
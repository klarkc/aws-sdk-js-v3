import { __extends } from "tslib";
import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSchemaVersionsCommand, serializeAws_restJson1ListSchemaVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of the schema versions and related information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemaVersionsCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchemaVersionsCommand = /** @class */ (function (_super) {
    __extends(ListSchemaVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchemaVersionsCommand(input) {
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
    ListSchemaVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "ListSchemaVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemaVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemaVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemaVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSchemaVersionsCommand(input, context);
    };
    ListSchemaVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSchemaVersionsCommand(output, context);
    };
    return ListSchemaVersionsCommand;
}($Command));
export { ListSchemaVersionsCommand };
//# sourceMappingURL=ListSchemaVersionsCommand.js.map
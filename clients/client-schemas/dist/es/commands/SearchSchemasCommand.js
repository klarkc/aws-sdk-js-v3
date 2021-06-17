import { __extends } from "tslib";
import { SearchSchemasRequest, SearchSchemasResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchSchemasCommand, serializeAws_restJson1SearchSchemasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Search the schemas</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, SearchSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, SearchSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new SearchSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSchemasCommandInput} for command's `input` shape.
 * @see {@link SearchSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchSchemasCommand = /** @class */ (function (_super) {
    __extends(SearchSchemasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchSchemasCommand(input) {
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
    SearchSchemasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "SearchSchemasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchSchemasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchSchemasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchSchemasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchSchemasCommand(input, context);
    };
    SearchSchemasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchSchemasCommand(output, context);
    };
    return SearchSchemasCommand;
}($Command));
export { SearchSchemasCommand };
//# sourceMappingURL=SearchSchemasCommand.js.map
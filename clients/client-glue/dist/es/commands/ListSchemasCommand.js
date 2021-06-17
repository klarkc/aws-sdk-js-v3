import { __extends } from "tslib";
import { ListSchemasInput, ListSchemasResponse } from "../models/models_1";
import { deserializeAws_json1_1ListSchemasCommand, serializeAws_json1_1ListSchemasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p>
 *          <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSchemasCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSchemasCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "GlueClient";
        var commandName = "ListSchemasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemasInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSchemasCommand(input, context);
    };
    ListSchemasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSchemasCommand(output, context);
    };
    return ListSchemasCommand;
}($Command));
export { ListSchemasCommand };
//# sourceMappingURL=ListSchemasCommand.js.map
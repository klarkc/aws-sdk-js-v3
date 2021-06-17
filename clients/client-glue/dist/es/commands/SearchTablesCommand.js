import { __extends } from "tslib";
import { SearchTablesRequest, SearchTablesResponse } from "../models/models_1";
import { deserializeAws_json1_1SearchTablesCommand, serializeAws_json1_1SearchTablesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
 *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, SearchTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, SearchTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new SearchTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTablesCommandInput} for command's `input` shape.
 * @see {@link SearchTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchTablesCommand = /** @class */ (function (_super) {
    __extends(SearchTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchTablesCommand(input) {
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
    SearchTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "SearchTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchTablesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchTablesCommand(input, context);
    };
    SearchTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchTablesCommand(output, context);
    };
    return SearchTablesCommand;
}($Command));
export { SearchTablesCommand };
//# sourceMappingURL=SearchTablesCommand.js.map
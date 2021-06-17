import { __extends } from "tslib";
import { QueryTableRowsRequest, QueryTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1QueryTableRowsCommand, serializeAws_restJson1QueryTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, QueryTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, QueryTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new QueryTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryTableRowsCommandInput} for command's `input` shape.
 * @see {@link QueryTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var QueryTableRowsCommand = /** @class */ (function (_super) {
    __extends(QueryTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function QueryTableRowsCommand(input) {
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
    QueryTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "QueryTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: QueryTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: QueryTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    QueryTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1QueryTableRowsCommand(input, context);
    };
    QueryTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1QueryTableRowsCommand(output, context);
    };
    return QueryTableRowsCommand;
}($Command));
export { QueryTableRowsCommand };
//# sourceMappingURL=QueryTableRowsCommand.js.map
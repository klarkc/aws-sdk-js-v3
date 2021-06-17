import { __extends } from "tslib";
import { QueryRequest, QueryResult } from "../models/models_0";
import { deserializeAws_json1_1QueryCommand, serializeAws_json1_1QueryCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches an active index. Use this API to search your documents
 *          using query. The <code>Query</code> operation enables to do faceted
 *          search and to filter results based on document attributes.</p>
 *          <p>It also enables you to provide user context that Amazon Kendra uses
 *          to enforce document access control in the search results. </p>
 *          <p>Amazon Kendra searches your index for text content and question and
 *          answer (FAQ) content. By default the response contains three types of
 *          results.</p>
 *          <ul>
 *             <li>
 *                <p>Relevant passages</p>
 *             </li>
 *             <li>
 *                <p>Matching FAQs</p>
 *             </li>
 *             <li>
 *                <p>Relevant documents</p>
 *             </li>
 *          </ul>
 *          <p>You can specify that the query return only one type of result using
 *          the <code>QueryResultTypeConfig</code> parameter.</p>
 *          <p>Each query returns the 100 most relevant results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, QueryCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, QueryCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var QueryCommand = /** @class */ (function (_super) {
    __extends(QueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function QueryCommand(input) {
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
    QueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "QueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: QueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: QueryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    QueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1QueryCommand(input, context);
    };
    QueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1QueryCommand(output, context);
    };
    return QueryCommand;
}($Command));
export { QueryCommand };
//# sourceMappingURL=QueryCommand.js.map
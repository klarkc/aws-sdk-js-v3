import { __extends } from "tslib";
import { ListQuerySuggestionsBlockListsRequest, ListQuerySuggestionsBlockListsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand, serializeAws_json1_1ListQuerySuggestionsBlockListsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the block lists used for query suggestions for an index.</p>
 *         <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListQuerySuggestionsBlockListsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListQuerySuggestionsBlockListsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListQuerySuggestionsBlockListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuerySuggestionsBlockListsCommandInput} for command's `input` shape.
 * @see {@link ListQuerySuggestionsBlockListsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQuerySuggestionsBlockListsCommand = /** @class */ (function (_super) {
    __extends(ListQuerySuggestionsBlockListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQuerySuggestionsBlockListsCommand(input) {
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
    ListQuerySuggestionsBlockListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "ListQuerySuggestionsBlockListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQuerySuggestionsBlockListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQuerySuggestionsBlockListsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQuerySuggestionsBlockListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListQuerySuggestionsBlockListsCommand(input, context);
    };
    ListQuerySuggestionsBlockListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand(output, context);
    };
    return ListQuerySuggestionsBlockListsCommand;
}($Command));
export { ListQuerySuggestionsBlockListsCommand };
//# sourceMappingURL=ListQuerySuggestionsBlockListsCommand.js.map
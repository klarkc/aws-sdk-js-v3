import { __extends } from "tslib";
import { DeleteQuerySuggestionsBlockListRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand, serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a block list used for query suggestions for an index.</p>
 *         <p>A deleted block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to add back the
 *             queries that were previously blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DeleteQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQuerySuggestionsBlockListCommand = /** @class */ (function (_super) {
    __extends(DeleteQuerySuggestionsBlockListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQuerySuggestionsBlockListCommand(input) {
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
    DeleteQuerySuggestionsBlockListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DeleteQuerySuggestionsBlockListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQuerySuggestionsBlockListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQuerySuggestionsBlockListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand(input, context);
    };
    DeleteQuerySuggestionsBlockListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand(output, context);
    };
    return DeleteQuerySuggestionsBlockListCommand;
}($Command));
export { DeleteQuerySuggestionsBlockListCommand };
//# sourceMappingURL=DeleteQuerySuggestionsBlockListCommand.js.map
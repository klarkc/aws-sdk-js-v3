import { __extends } from "tslib";
import { ClearQuerySuggestionsRequest } from "../models/models_0";
import { deserializeAws_json1_1ClearQuerySuggestionsCommand, serializeAws_json1_1ClearQuerySuggestionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Clears existing query suggestions from an index.</p>
 *         <p>This deletes existing suggestions only, not the queries
 *             in the query log. After you clear suggestions, Amazon Kendra learns
 *             new suggestions based on new queries added to the query log
 *             from the time you cleared suggestions. If you do not see any
 *             new suggestions, then please allow Amazon Kendra to collect
 *             enough queries to learn new suggestions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ClearQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ClearQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ClearQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link ClearQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ClearQuerySuggestionsCommand = /** @class */ (function (_super) {
    __extends(ClearQuerySuggestionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ClearQuerySuggestionsCommand(input) {
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
    ClearQuerySuggestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "ClearQuerySuggestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ClearQuerySuggestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ClearQuerySuggestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ClearQuerySuggestionsCommand(input, context);
    };
    ClearQuerySuggestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ClearQuerySuggestionsCommand(output, context);
    };
    return ClearQuerySuggestionsCommand;
}($Command));
export { ClearQuerySuggestionsCommand };
//# sourceMappingURL=ClearQuerySuggestionsCommand.js.map
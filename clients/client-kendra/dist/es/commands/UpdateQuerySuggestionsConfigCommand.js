import { __extends } from "tslib";
import { UpdateQuerySuggestionsConfigRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand, serializeAws_json1_1UpdateQuerySuggestionsConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings of query suggestions for an index.</p>
 *         <p>Amazon Kendra supports partial updates, so you only need to provide
 *             the fields you want to update.</p>
 *         <p>If an update is currently processing (i.e. 'happening'), you
 *             need to wait for the update to finish before making another update.</p>
 *         <p>Updates to query suggestions settings might not take effect right away.
 *             The time for your updated settings to take effect depends on the updates
 *             made and the number of search queries in your index.</p>
 *         <p>You can still enable/disable query suggestions at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQuerySuggestionsConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateQuerySuggestionsConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQuerySuggestionsConfigCommand(input) {
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
    UpdateQuerySuggestionsConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "UpdateQuerySuggestionsConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQuerySuggestionsConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQuerySuggestionsConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateQuerySuggestionsConfigCommand(input, context);
    };
    UpdateQuerySuggestionsConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand(output, context);
    };
    return UpdateQuerySuggestionsConfigCommand;
}($Command));
export { UpdateQuerySuggestionsConfigCommand };
//# sourceMappingURL=UpdateQuerySuggestionsConfigCommand.js.map
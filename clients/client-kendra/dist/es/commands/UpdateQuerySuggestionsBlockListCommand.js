import { __extends } from "tslib";
import { UpdateQuerySuggestionsBlockListRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand, serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a block list used for query suggestions for an index.</p>
 *         <p>Updates to a block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to apply any updates to the
 *             block list. Other changes not related to the block list apply immediately.</p>
 *         <p>If a block list is updating, then you need to wait for the first update to
 *             finish before submitting another update.</p>
 *         <p>Amazon Kendra supports partial updates, so you only need to provide the fields
 *             you want to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQuerySuggestionsBlockListCommand = /** @class */ (function (_super) {
    __extends(UpdateQuerySuggestionsBlockListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQuerySuggestionsBlockListCommand(input) {
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
    UpdateQuerySuggestionsBlockListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "UpdateQuerySuggestionsBlockListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQuerySuggestionsBlockListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQuerySuggestionsBlockListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand(input, context);
    };
    UpdateQuerySuggestionsBlockListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand(output, context);
    };
    return UpdateQuerySuggestionsBlockListCommand;
}($Command));
export { UpdateQuerySuggestionsBlockListCommand };
//# sourceMappingURL=UpdateQuerySuggestionsBlockListCommand.js.map
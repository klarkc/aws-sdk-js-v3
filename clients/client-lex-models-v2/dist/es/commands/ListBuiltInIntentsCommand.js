import { __extends } from "tslib";
import { ListBuiltInIntentsRequest, ListBuiltInIntentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBuiltInIntentsCommand, serializeAws_restJson1ListBuiltInIntentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
 *          in your bot. </p>
 *          <p>To use a built-in intent as a the base for your own intent, include
 *          the built-in intent signature in the <code>parentIntentSignature</code>
 *          parameter when you call the <code>CreateIntent</code> operation. For
 *          more information, see <a>CreateIntent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBuiltInIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuiltInIntentsCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuiltInIntentsCommand = /** @class */ (function (_super) {
    __extends(ListBuiltInIntentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuiltInIntentsCommand(input) {
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
    ListBuiltInIntentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBuiltInIntentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuiltInIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuiltInIntentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuiltInIntentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBuiltInIntentsCommand(input, context);
    };
    ListBuiltInIntentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBuiltInIntentsCommand(output, context);
    };
    return ListBuiltInIntentsCommand;
}($Command));
export { ListBuiltInIntentsCommand };
//# sourceMappingURL=ListBuiltInIntentsCommand.js.map
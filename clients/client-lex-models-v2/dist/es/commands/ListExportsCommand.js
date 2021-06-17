import { __extends } from "tslib";
import { ListExportsRequest, ListExportsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListExportsCommand, serializeAws_restJson1ListExportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the exports for a bot or bot locale. Exports are kept in the list for 7
 *          days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListExportsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListExportsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListExportsCommand = /** @class */ (function (_super) {
    __extends(ListExportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListExportsCommand(input) {
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
    ListExportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListExportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListExportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListExportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListExportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListExportsCommand(input, context);
    };
    ListExportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListExportsCommand(output, context);
    };
    return ListExportsCommand;
}($Command));
export { ListExportsCommand };
//# sourceMappingURL=ListExportsCommand.js.map
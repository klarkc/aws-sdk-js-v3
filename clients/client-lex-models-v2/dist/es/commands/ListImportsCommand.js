import { __extends } from "tslib";
import { ListImportsRequest, ListImportsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImportsCommand, serializeAws_restJson1ListImportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the imports for a bot or bot locale. Imports are kept in the list for 7
 *          days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListImportsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListImportsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImportsCommand = /** @class */ (function (_super) {
    __extends(ListImportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImportsCommand(input) {
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
    ListImportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListImportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImportsCommand(input, context);
    };
    ListImportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImportsCommand(output, context);
    };
    return ListImportsCommand;
}($Command));
export { ListImportsCommand };
//# sourceMappingURL=ListImportsCommand.js.map
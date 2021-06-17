import { __extends } from "tslib";
import { ListBotAliasesRequest, ListBotAliasesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBotAliasesCommand, serializeAws_restJson1ListBotAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of aliases for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotAliasesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotAliasesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotAliasesCommandInput} for command's `input` shape.
 * @see {@link ListBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBotAliasesCommand = /** @class */ (function (_super) {
    __extends(ListBotAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBotAliasesCommand(input) {
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
    ListBotAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBotAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBotAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBotAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBotAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBotAliasesCommand(input, context);
    };
    ListBotAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBotAliasesCommand(output, context);
    };
    return ListBotAliasesCommand;
}($Command));
export { ListBotAliasesCommand };
//# sourceMappingURL=ListBotAliasesCommand.js.map
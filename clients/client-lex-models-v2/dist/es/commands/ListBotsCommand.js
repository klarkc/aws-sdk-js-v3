import { __extends } from "tslib";
import { ListBotsRequest, ListBotsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBotsCommand, serializeAws_restJson1ListBotsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of available bots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBotsCommand = /** @class */ (function (_super) {
    __extends(ListBotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBotsCommand(input) {
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
    ListBotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBotsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBotsCommand(input, context);
    };
    ListBotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBotsCommand(output, context);
    };
    return ListBotsCommand;
}($Command));
export { ListBotsCommand };
//# sourceMappingURL=ListBotsCommand.js.map
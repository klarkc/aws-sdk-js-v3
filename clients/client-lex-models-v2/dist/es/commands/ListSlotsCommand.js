import { __extends } from "tslib";
import { ListSlotsRequest, ListSlotsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSlotsCommand, serializeAws_restJson1ListSlotsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of slots that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListSlotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSlotsCommandInput} for command's `input` shape.
 * @see {@link ListSlotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSlotsCommand = /** @class */ (function (_super) {
    __extends(ListSlotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSlotsCommand(input) {
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
    ListSlotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListSlotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSlotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSlotsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSlotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSlotsCommand(input, context);
    };
    ListSlotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSlotsCommand(output, context);
    };
    return ListSlotsCommand;
}($Command));
export { ListSlotsCommand };
//# sourceMappingURL=ListSlotsCommand.js.map
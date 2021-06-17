import { __extends } from "tslib";
import { ListIntentsRequest, ListIntentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIntentsCommand, serializeAws_restJson1ListIntentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a list of intents that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntentsCommandInput} for command's `input` shape.
 * @see {@link ListIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIntentsCommand = /** @class */ (function (_super) {
    __extends(ListIntentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIntentsCommand(input) {
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
    ListIntentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListIntentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIntentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIntentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIntentsCommand(input, context);
    };
    ListIntentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIntentsCommand(output, context);
    };
    return ListIntentsCommand;
}($Command));
export { ListIntentsCommand };
//# sourceMappingURL=ListIntentsCommand.js.map
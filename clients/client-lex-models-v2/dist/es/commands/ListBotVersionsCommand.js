import { __extends } from "tslib";
import { ListBotVersionsRequest, ListBotVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBotVersionsCommand, serializeAws_restJson1ListBotVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>ListBotVersions</code> operation returns a summary of each
 *          version of a bot. For example, if a bot has three numbered versions,
 *          the <code>ListBotVersions</code> operation returns for summaries, one
 *          for each numbered version and one for the <code>DRAFT</code>
 *          version.</p>
 *          <p>The <code>ListBotVersions</code> operation always returns at least
 *          one version, the <code>DRAFT</code> version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotVersionsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotVersionsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBotVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBotVersionsCommand = /** @class */ (function (_super) {
    __extends(ListBotVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBotVersionsCommand(input) {
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
    ListBotVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBotVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBotVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBotVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBotVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBotVersionsCommand(input, context);
    };
    ListBotVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBotVersionsCommand(output, context);
    };
    return ListBotVersionsCommand;
}($Command));
export { ListBotVersionsCommand };
//# sourceMappingURL=ListBotVersionsCommand.js.map
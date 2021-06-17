import { __extends } from "tslib";
import { ListLexBotsRequest, ListLexBotsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLexBotsCommand, serializeAws_restJson1ListLexBotsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all the Amazon Lex bots currently associated with the
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLexBotsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLexBotsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLexBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLexBotsCommandInput} for command's `input` shape.
 * @see {@link ListLexBotsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLexBotsCommand = /** @class */ (function (_super) {
    __extends(ListLexBotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLexBotsCommand(input) {
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
    ListLexBotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListLexBotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLexBotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLexBotsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLexBotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLexBotsCommand(input, context);
    };
    ListLexBotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLexBotsCommand(output, context);
    };
    return ListLexBotsCommand;
}($Command));
export { ListLexBotsCommand };
//# sourceMappingURL=ListLexBotsCommand.js.map
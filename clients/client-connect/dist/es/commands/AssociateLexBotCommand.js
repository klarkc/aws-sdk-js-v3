import { __extends } from "tslib";
import { AssociateLexBotRequest } from "../models/models_0";
import { deserializeAws_restJson1AssociateLexBotCommand, serializeAws_restJson1AssociateLexBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateLexBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateLexBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateLexBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLexBotCommandInput} for command's `input` shape.
 * @see {@link AssociateLexBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateLexBotCommand = /** @class */ (function (_super) {
    __extends(AssociateLexBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateLexBotCommand(input) {
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
    AssociateLexBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateLexBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateLexBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateLexBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateLexBotCommand(input, context);
    };
    AssociateLexBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateLexBotCommand(output, context);
    };
    return AssociateLexBotCommand;
}($Command));
export { AssociateLexBotCommand };
//# sourceMappingURL=AssociateLexBotCommand.js.map
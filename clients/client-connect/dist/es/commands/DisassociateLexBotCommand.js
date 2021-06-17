import { __extends } from "tslib";
import { DisassociateLexBotRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateLexBotCommand, serializeAws_restJson1DisassociateLexBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateLexBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateLexBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateLexBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLexBotCommandInput} for command's `input` shape.
 * @see {@link DisassociateLexBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateLexBotCommand = /** @class */ (function (_super) {
    __extends(DisassociateLexBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateLexBotCommand(input) {
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
    DisassociateLexBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateLexBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateLexBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateLexBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateLexBotCommand(input, context);
    };
    DisassociateLexBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateLexBotCommand(output, context);
    };
    return DisassociateLexBotCommand;
}($Command));
export { DisassociateLexBotCommand };
//# sourceMappingURL=DisassociateLexBotCommand.js.map
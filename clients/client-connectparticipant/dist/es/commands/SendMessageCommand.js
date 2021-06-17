import { __extends } from "tslib";
import { SendMessageRequest, SendMessageResponse } from "../models/models_0";
import { deserializeAws_restJson1SendMessageCommand, serializeAws_restJson1SendMessageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a message. Note that ConnectionToken is used for invoking this API instead of
 *             ParticipantToken.</p>
 *         <note>
 *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, SendMessageCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, SendMessageCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new SendMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendMessageCommandInput} for command's `input` shape.
 * @see {@link SendMessageCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendMessageCommand = /** @class */ (function (_super) {
    __extends(SendMessageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendMessageCommand(input) {
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
    SendMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "SendMessageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendMessageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendMessageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendMessageCommand(input, context);
    };
    SendMessageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendMessageCommand(output, context);
    };
    return SendMessageCommand;
}($Command));
export { SendMessageCommand };
//# sourceMappingURL=SendMessageCommand.js.map
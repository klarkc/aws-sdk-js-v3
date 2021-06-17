import { __extends } from "tslib";
import { StartChatContactRequest, StartChatContactResponse } from "../models/models_0";
import { deserializeAws_restJson1StartChatContactCommand, serializeAws_restJson1StartChatContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides
 *    a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
 *
 *          <p>When a new chat contact is successfully created, clients must subscribe to the participant’s
 *    connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
 *
 *          <p>A 429 error occurs in two situations:</p>
 *          <ul>
 *             <li>
 *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
 *      exception.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
 *       chats</a> is exceeded. Active chat throttling returns a
 *       <code>LimitExceededException</code>.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartChatContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartChatContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartChatContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChatContactCommandInput} for command's `input` shape.
 * @see {@link StartChatContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartChatContactCommand = /** @class */ (function (_super) {
    __extends(StartChatContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartChatContactCommand(input) {
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
    StartChatContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StartChatContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartChatContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartChatContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartChatContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartChatContactCommand(input, context);
    };
    StartChatContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartChatContactCommand(output, context);
    };
    return StartChatContactCommand;
}($Command));
export { StartChatContactCommand };
//# sourceMappingURL=StartChatContactCommand.js.map
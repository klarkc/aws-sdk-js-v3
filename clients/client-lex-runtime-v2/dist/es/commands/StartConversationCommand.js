import { __extends } from "tslib";
import { StartConversationRequest, StartConversationResponse } from "../models/models_0";
import { deserializeAws_restJson1StartConversationCommand, serializeAws_restJson1StartConversationCommand, } from "../protocols/Aws_restJson1";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
 *          audio, text, or DTMF input in real time. After your application starts
 *          a conversation, users send input to Amazon Lex as a stream of events. Amazon Lex
 *          processes the incoming events and responds with streaming text or audio
 *          events.
 *       </p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, StartConversationCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, StartConversationCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new StartConversationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConversationCommandInput} for command's `input` shape.
 * @see {@link StartConversationCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartConversationCommand = /** @class */ (function (_super) {
    __extends(StartConversationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartConversationCommand(input) {
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
    StartConversationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEventStreamPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeV2Client";
        var commandName = "StartConversationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartConversationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartConversationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartConversationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartConversationCommand(input, context);
    };
    StartConversationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartConversationCommand(output, context);
    };
    return StartConversationCommand;
}($Command));
export { StartConversationCommand };
//# sourceMappingURL=StartConversationCommand.js.map
import { __extends } from "tslib";
import { SendEventRequest, SendEventResponse } from "../models/models_0";
import { deserializeAws_restJson1SendEventCommand, serializeAws_restJson1SendEventCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends an event. Note that ConnectionToken is used for invoking this API instead of
 *             ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, SendEventCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, SendEventCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new SendEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendEventCommandInput} for command's `input` shape.
 * @see {@link SendEventCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendEventCommand = /** @class */ (function (_super) {
    __extends(SendEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendEventCommand(input) {
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
    SendEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "SendEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendEventRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendEventResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendEventCommand(input, context);
    };
    SendEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendEventCommand(output, context);
    };
    return SendEventCommand;
}($Command));
export { SendEventCommand };
//# sourceMappingURL=SendEventCommand.js.map
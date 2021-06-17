import { __extends } from "tslib";
import { StartOutboundVoiceContactRequest, StartOutboundVoiceContactResponse } from "../models/models_0";
import { deserializeAws_restJson1StartOutboundVoiceContactCommand, serializeAws_restJson1StartOutboundVoiceContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Places an outbound call to a contact, and then initiates the contact flow. It performs the
 *    actions in the contact flow that's specified (in <code>ContactFlowId</code>).</p>
 *
 *          <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If
 *    the contact flow places an outbound call to a contact, and then puts the contact in queue, the
 *    call is then routed to the agent, like any other inbound case.</p>
 *
 *          <p>There is a 60-second dialing timeout for this operation. If the call is not connected after
 *    60 seconds, it fails.</p>
 *          <note>
 *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
 *     mobile numbers, you must submit a service quota increase request. For more information, see
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartOutboundVoiceContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartOutboundVoiceContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartOutboundVoiceContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOutboundVoiceContactCommandInput} for command's `input` shape.
 * @see {@link StartOutboundVoiceContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartOutboundVoiceContactCommand = /** @class */ (function (_super) {
    __extends(StartOutboundVoiceContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartOutboundVoiceContactCommand(input) {
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
    StartOutboundVoiceContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StartOutboundVoiceContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartOutboundVoiceContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartOutboundVoiceContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartOutboundVoiceContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartOutboundVoiceContactCommand(input, context);
    };
    StartOutboundVoiceContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartOutboundVoiceContactCommand(output, context);
    };
    return StartOutboundVoiceContactCommand;
}($Command));
export { StartOutboundVoiceContactCommand };
//# sourceMappingURL=StartOutboundVoiceContactCommand.js.map
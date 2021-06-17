"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartOutboundVoiceContactCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class StartOutboundVoiceContactCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ConnectClient";
        const commandName = "StartOutboundVoiceContactCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartOutboundVoiceContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartOutboundVoiceContactResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StartOutboundVoiceContactCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StartOutboundVoiceContactCommand(output, context);
    }
}
exports.StartOutboundVoiceContactCommand = StartOutboundVoiceContactCommand;
//# sourceMappingURL=StartOutboundVoiceContactCommand.js.map
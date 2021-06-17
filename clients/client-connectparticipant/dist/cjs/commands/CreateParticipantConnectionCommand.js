"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateParticipantConnectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking
 *             this API instead of ConnectionToken.</p>
 *         <p>The participant token is valid for the lifetime of the participant – until they are
 *             part of a contact.</p>
 *         <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s.
 *             Clients must manually connect to the returned websocket URL and subscribe to the desired
 *             topic. </p>
 *         <p>For chat, you need to publish the following on the established websocket
 *             connection:</p>
 *
 *
 *         <p>
 *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
 *          </p>
 *
 *         <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 *             clients need to call this API again to obtain a new websocket URL and perform the same
 *             steps as before.</p>
 *
 *         <note>
 *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CreateParticipantConnectionCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CreateParticipantConnectionCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CreateParticipantConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParticipantConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantConnectionCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateParticipantConnectionCommand extends smithy_client_1.Command {
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
        const clientName = "ConnectParticipantClient";
        const commandName = "CreateParticipantConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateParticipantConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateParticipantConnectionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateParticipantConnectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateParticipantConnectionCommand(output, context);
    }
}
exports.CreateParticipantConnectionCommand = CreateParticipantConnectionCommand;
//# sourceMappingURL=CreateParticipantConnectionCommand.js.map
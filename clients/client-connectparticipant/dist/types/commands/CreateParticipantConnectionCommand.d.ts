import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateParticipantConnectionCommandInput extends CreateParticipantConnectionRequest {
}
export interface CreateParticipantConnectionCommandOutput extends CreateParticipantConnectionResponse, __MetadataBearer {
}
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
export declare class CreateParticipantConnectionCommand extends $Command<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: CreateParticipantConnectionCommandInput;
    constructor(input: CreateParticipantConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

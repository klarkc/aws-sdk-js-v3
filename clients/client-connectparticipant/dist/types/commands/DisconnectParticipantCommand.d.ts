import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisconnectParticipantCommandInput extends DisconnectParticipantRequest {
}
export interface DisconnectParticipantCommandOutput extends DisconnectParticipantResponse, __MetadataBearer {
}
/**
 * <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API
 *             instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, DisconnectParticipantCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, DisconnectParticipantCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new DisconnectParticipantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectParticipantCommandInput} for command's `input` shape.
 * @see {@link DisconnectParticipantCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisconnectParticipantCommand extends $Command<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: DisconnectParticipantCommandInput;
    constructor(input: DisconnectParticipantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput>;
    private serialize;
    private deserialize;
}

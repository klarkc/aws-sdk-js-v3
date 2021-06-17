import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTranscriptCommandInput extends GetTranscriptRequest {
}
export interface GetTranscriptCommandOutput extends GetTranscriptResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a transcript of the session, including details about any attachments. Note
 *             that ConnectionToken is used for invoking this API instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetTranscriptCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new GetTranscriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTranscriptCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTranscriptCommand extends $Command<GetTranscriptCommandInput, GetTranscriptCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: GetTranscriptCommandInput;
    constructor(input: GetTranscriptCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTranscriptCommandInput, GetTranscriptCommandOutput>;
    private serialize;
    private deserialize;
}

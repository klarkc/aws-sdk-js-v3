import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { GetAttachmentRequest, GetAttachmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAttachmentCommandInput extends GetAttachmentRequest {
}
export interface GetAttachmentCommandOutput extends GetAttachmentResponse, __MetadataBearer {
}
/**
 * <p>Provides a pre-signed URL for download of a completed attachment. This is an
 *             asynchronous API for use with active contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetAttachmentCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetAttachmentCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new GetAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAttachmentCommand extends $Command<GetAttachmentCommandInput, GetAttachmentCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: GetAttachmentCommandInput;
    constructor(input: GetAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAttachmentCommandInput, GetAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}

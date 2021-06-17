import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteAttachmentUploadCommandInput extends CompleteAttachmentUploadRequest {
}
export interface CompleteAttachmentUploadCommandOutput extends CompleteAttachmentUploadResponse, __MetadataBearer {
}
/**
 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 *             provided in StartAttachmentUpload API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CompleteAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CompleteAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CompleteAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CompleteAttachmentUploadCommand extends $Command<CompleteAttachmentUploadCommandInput, CompleteAttachmentUploadCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: CompleteAttachmentUploadCommandInput;
    constructor(input: CompleteAttachmentUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteAttachmentUploadCommandInput, CompleteAttachmentUploadCommandOutput>;
    private serialize;
    private deserialize;
}

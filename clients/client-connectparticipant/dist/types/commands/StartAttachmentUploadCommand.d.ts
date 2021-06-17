import { ConnectParticipantClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectParticipantClient";
import { StartAttachmentUploadRequest, StartAttachmentUploadResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAttachmentUploadCommandInput extends StartAttachmentUploadRequest {
}
export interface StartAttachmentUploadCommandOutput extends StartAttachmentUploadResponse, __MetadataBearer {
}
/**
 * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
 *             S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, StartAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, StartAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new StartAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAttachmentUploadCommand extends $Command<StartAttachmentUploadCommandInput, StartAttachmentUploadCommandOutput, ConnectParticipantClientResolvedConfig> {
    readonly input: StartAttachmentUploadCommandInput;
    constructor(input: StartAttachmentUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectParticipantClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAttachmentUploadCommandInput, StartAttachmentUploadCommandOutput>;
    private serialize;
    private deserialize;
}

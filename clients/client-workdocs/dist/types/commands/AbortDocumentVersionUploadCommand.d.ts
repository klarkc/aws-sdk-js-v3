import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { AbortDocumentVersionUploadRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AbortDocumentVersionUploadCommandInput extends AbortDocumentVersionUploadRequest {
}
export interface AbortDocumentVersionUploadCommandOutput extends __MetadataBearer {
}
/**
 * <p>Aborts the upload of the specified document version that was previously initiated
 *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
 *             only when it no longer intends to upload the document version, or fails to do
 *             so.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AbortDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link AbortDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AbortDocumentVersionUploadCommand extends $Command<AbortDocumentVersionUploadCommandInput, AbortDocumentVersionUploadCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: AbortDocumentVersionUploadCommandInput;
    constructor(input: AbortDocumentVersionUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortDocumentVersionUploadCommandInput, AbortDocumentVersionUploadCommandOutput>;
    private serialize;
    private deserialize;
}

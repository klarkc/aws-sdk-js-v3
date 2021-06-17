import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { InitiateDocumentVersionUploadRequest, InitiateDocumentVersionUploadResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitiateDocumentVersionUploadCommandInput extends InitiateDocumentVersionUploadRequest {
}
export interface InitiateDocumentVersionUploadCommandOutput extends InitiateDocumentVersionUploadResponse, __MetadataBearer {
}
/**
 * <p>Creates a new document object and version object.</p>
 *         <p>The client specifies the parent folder ID and name of the document to upload. The
 *             ID is optionally specified when creating a new version of an existing document. This is
 *             the first step to upload a document. Next, upload the document to the URL returned from
 *             the call, and then call <a>UpdateDocumentVersion</a>.</p>
 *         <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, InitiateDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, InitiateDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new InitiateDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitiateDocumentVersionUploadCommand extends $Command<InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: InitiateDocumentVersionUploadCommandInput;
    constructor(input: InitiateDocumentVersionUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput>;
    private serialize;
    private deserialize;
}

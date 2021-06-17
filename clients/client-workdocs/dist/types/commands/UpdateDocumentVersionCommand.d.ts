import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { UpdateDocumentVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDocumentVersionCommandInput extends UpdateDocumentVersionRequest {
}
export interface UpdateDocumentVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the status of the document version to ACTIVE. </p>
 *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
 *             in a document upload, after the client uploads the document to an S3-presigned URL
 *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateDocumentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDocumentVersionCommand extends $Command<UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: UpdateDocumentVersionCommandInput;
    constructor(input: UpdateDocumentVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput>;
    private serialize;
    private deserialize;
}

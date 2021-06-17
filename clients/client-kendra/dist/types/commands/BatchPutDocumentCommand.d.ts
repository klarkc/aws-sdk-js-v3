import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchPutDocumentRequest, BatchPutDocumentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchPutDocumentCommandInput extends BatchPutDocumentRequest {
}
export interface BatchPutDocumentCommandOutput extends BatchPutDocumentResponse, __MetadataBearer {
}
/**
 * <p>Adds one or more documents to an index.</p>
 *          <p>The <code>BatchPutDocument</code> operation enables you to ingest
 *       inline documents or a set of documents stored in an Amazon S3 bucket. Use
 *       this operation to ingest your text and unstructured text into an index,
 *       add custom attributes to the documents, and to attach an access control
 *       list to the documents added to the index.</p>
 *          <p>The documents are indexed asynchronously. You can see the progress of
 *       the batch using AWS CloudWatch. Any error messages related to processing
 *       the batch are sent to your AWS CloudWatch log.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchPutDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchPutDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchPutDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchPutDocumentCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchPutDocumentCommand extends $Command<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput, KendraClientResolvedConfig> {
    readonly input: BatchPutDocumentCommandInput;
    constructor(input: BatchPutDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput>;
    private serialize;
    private deserialize;
}

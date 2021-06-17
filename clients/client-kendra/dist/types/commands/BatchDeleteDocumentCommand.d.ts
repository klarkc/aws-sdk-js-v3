import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchDeleteDocumentRequest, BatchDeleteDocumentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteDocumentCommandInput extends BatchDeleteDocumentRequest {
}
export interface BatchDeleteDocumentCommandOutput extends BatchDeleteDocumentResponse, __MetadataBearer {
}
/**
 * <p>Removes one or more documents from an index. The documents must have
 *       been added with the <code>BatchPutDocument</code> operation.</p>
 *          <p>The documents are deleted asynchronously. You can see the progress of
 *       the deletion by using AWS CloudWatch. Any error messages related to the
 *       processing of the batch are sent to you CloudWatch log.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchDeleteDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteDocumentCommand extends $Command<BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput, KendraClientResolvedConfig> {
    readonly input: BatchDeleteDocumentCommandInput;
    constructor(input: BatchDeleteDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput>;
    private serialize;
    private deserialize;
}

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListDocumentClassificationJobsRequest, ListDocumentClassificationJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDocumentClassificationJobsCommandInput extends ListDocumentClassificationJobsRequest {
}
export interface ListDocumentClassificationJobsCommandOutput extends ListDocumentClassificationJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the documentation classification jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassificationJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassificationJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListDocumentClassificationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentClassificationJobsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassificationJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDocumentClassificationJobsCommand extends $Command<ListDocumentClassificationJobsCommandInput, ListDocumentClassificationJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListDocumentClassificationJobsCommandInput;
    constructor(input: ListDocumentClassificationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentClassificationJobsCommandInput, ListDocumentClassificationJobsCommandOutput>;
    private serialize;
    private deserialize;
}

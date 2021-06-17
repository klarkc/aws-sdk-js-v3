import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetDocumentVersionRequest, GetDocumentVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDocumentVersionCommandInput extends GetDocumentVersionRequest {
}
export interface GetDocumentVersionCommandOutput extends GetDocumentVersionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves version metadata for the specified document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDocumentVersionCommand extends $Command<GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: GetDocumentVersionCommandInput;
    constructor(input: GetDocumentVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput>;
    private serialize;
    private deserialize;
}

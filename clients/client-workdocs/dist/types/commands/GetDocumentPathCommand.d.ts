import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetDocumentPathRequest, GetDocumentPathResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDocumentPathCommandInput extends GetDocumentPathRequest {
}
export interface GetDocumentPathCommandOutput extends GetDocumentPathResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             requested document.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested document and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the names of the parent
 *             folders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentPathCommandInput} for command's `input` shape.
 * @see {@link GetDocumentPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDocumentPathCommand extends $Command<GetDocumentPathCommandInput, GetDocumentPathCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: GetDocumentPathCommandInput;
    constructor(input: GetDocumentPathCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentPathCommandInput, GetDocumentPathCommandOutput>;
    private serialize;
    private deserialize;
}

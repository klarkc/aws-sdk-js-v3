import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeFolderContentsRequest, DescribeFolderContentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFolderContentsCommandInput extends DescribeFolderContentsRequest {
}
export interface DescribeFolderContentsCommandOutput extends DescribeFolderContentsResponse, __MetadataBearer {
}
/**
 * <p>Describes the contents of the specified folder, including its documents and
 *             subfolders.</p>
 *         <p>By default, Amazon WorkDocs returns the first 100 active document and folder
 *             metadata items. If there are more results, the response includes a marker that you can
 *             use to request the next set of results. You can also request initialized
 *             documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeFolderContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFolderContentsCommand extends $Command<DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeFolderContentsCommandInput;
    constructor(input: DescribeFolderContentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput>;
    private serialize;
    private deserialize;
}

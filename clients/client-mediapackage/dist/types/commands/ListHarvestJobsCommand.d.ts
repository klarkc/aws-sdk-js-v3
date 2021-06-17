import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { ListHarvestJobsRequest, ListHarvestJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHarvestJobsCommandInput extends ListHarvestJobsRequest {
}
export interface ListHarvestJobsCommandOutput extends ListHarvestJobsResponse, __MetadataBearer {
}
/**
 * Returns a collection of HarvestJob records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListHarvestJobsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListHarvestJobsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHarvestJobsCommandInput} for command's `input` shape.
 * @see {@link ListHarvestJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHarvestJobsCommand extends $Command<ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: ListHarvestJobsCommandInput;
    constructor(input: ListHarvestJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput>;
    private serialize;
    private deserialize;
}

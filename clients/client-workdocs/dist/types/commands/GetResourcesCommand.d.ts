import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetResourcesRequest, GetResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcesCommandInput extends GetResourcesRequest {
}
export interface GetResourcesCommandOutput extends GetResourcesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a collection of resources, including folders and documents. The only
 *             <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetResourcesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetResourcesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcesCommand extends $Command<GetResourcesCommandInput, GetResourcesCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: GetResourcesCommandInput;
    constructor(input: GetResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcesCommandInput, GetResourcesCommandOutput>;
    private serialize;
    private deserialize;
}

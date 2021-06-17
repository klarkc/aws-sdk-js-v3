import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { ListDomainsForPackageRequest, ListDomainsForPackageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDomainsForPackageCommandInput extends ListDomainsForPackageRequest {
}
export interface ListDomainsForPackageCommandOutput extends ListDomainsForPackageResponse, __MetadataBearer {
}
/**
 * <p>Lists all Amazon ES domains associated with the package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListDomainsForPackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListDomainsForPackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListDomainsForPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsForPackageCommandInput} for command's `input` shape.
 * @see {@link ListDomainsForPackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDomainsForPackageCommand extends $Command<ListDomainsForPackageCommandInput, ListDomainsForPackageCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: ListDomainsForPackageCommandInput;
    constructor(input: ListDomainsForPackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainsForPackageCommandInput, ListDomainsForPackageCommandOutput>;
    private serialize;
    private deserialize;
}

import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { ListPackagesForDomainRequest, ListPackagesForDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPackagesForDomainCommandInput extends ListPackagesForDomainRequest {
}
export interface ListPackagesForDomainCommandOutput extends ListPackagesForDomainResponse, __MetadataBearer {
}
/**
 * <p>Lists all packages associated with the Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListPackagesForDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListPackagesForDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListPackagesForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagesForDomainCommandInput} for command's `input` shape.
 * @see {@link ListPackagesForDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPackagesForDomainCommand extends $Command<ListPackagesForDomainCommandInput, ListPackagesForDomainCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: ListPackagesForDomainCommandInput;
    constructor(input: ListPackagesForDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPackagesForDomainCommandInput, ListPackagesForDomainCommandOutput>;
    private serialize;
    private deserialize;
}

import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DissociatePackageRequest, DissociatePackageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DissociatePackageCommandInput extends DissociatePackageRequest {
}
export interface DissociatePackageCommandOutput extends DissociatePackageResponse, __MetadataBearer {
}
/**
 * <p>Dissociates a package from the Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DissociatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DissociatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DissociatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DissociatePackageCommandInput} for command's `input` shape.
 * @see {@link DissociatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DissociatePackageCommand extends $Command<DissociatePackageCommandInput, DissociatePackageCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DissociatePackageCommandInput;
    constructor(input: DissociatePackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DissociatePackageCommandInput, DissociatePackageCommandOutput>;
    private serialize;
    private deserialize;
}

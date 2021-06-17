import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { AssociatePackageRequest, AssociatePackageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociatePackageCommandInput extends AssociatePackageRequest {
}
export interface AssociatePackageCommandOutput extends AssociatePackageResponse, __MetadataBearer {
}
/**
 * <p>Associates a package with an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AssociatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AssociatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new AssociatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePackageCommandInput} for command's `input` shape.
 * @see {@link AssociatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociatePackageCommand extends $Command<AssociatePackageCommandInput, AssociatePackageCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: AssociatePackageCommandInput;
    constructor(input: AssociatePackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociatePackageCommandInput, AssociatePackageCommandOutput>;
    private serialize;
    private deserialize;
}

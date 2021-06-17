import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DeleteInboundCrossClusterSearchConnectionRequest, DeleteInboundCrossClusterSearchConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInboundCrossClusterSearchConnectionCommandInput extends DeleteInboundCrossClusterSearchConnectionRequest {
}
export interface DeleteInboundCrossClusterSearchConnectionCommandOutput extends DeleteInboundCrossClusterSearchConnectionResponse, __MetadataBearer {
}
/**
 * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInboundCrossClusterSearchConnectionCommand extends $Command<DeleteInboundCrossClusterSearchConnectionCommandInput, DeleteInboundCrossClusterSearchConnectionCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DeleteInboundCrossClusterSearchConnectionCommandInput;
    constructor(input: DeleteInboundCrossClusterSearchConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInboundCrossClusterSearchConnectionCommandInput, DeleteInboundCrossClusterSearchConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

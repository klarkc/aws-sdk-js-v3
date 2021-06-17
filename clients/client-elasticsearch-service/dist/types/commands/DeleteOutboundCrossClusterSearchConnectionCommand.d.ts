import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DeleteOutboundCrossClusterSearchConnectionRequest, DeleteOutboundCrossClusterSearchConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOutboundCrossClusterSearchConnectionCommandInput extends DeleteOutboundCrossClusterSearchConnectionRequest {
}
export interface DeleteOutboundCrossClusterSearchConnectionCommandOutput extends DeleteOutboundCrossClusterSearchConnectionResponse, __MetadataBearer {
}
/**
 * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOutboundCrossClusterSearchConnectionCommand extends $Command<DeleteOutboundCrossClusterSearchConnectionCommandInput, DeleteOutboundCrossClusterSearchConnectionCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DeleteOutboundCrossClusterSearchConnectionCommandInput;
    constructor(input: DeleteOutboundCrossClusterSearchConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOutboundCrossClusterSearchConnectionCommandInput, DeleteOutboundCrossClusterSearchConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

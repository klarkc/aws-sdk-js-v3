import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { RejectInboundCrossClusterSearchConnectionRequest, RejectInboundCrossClusterSearchConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectInboundCrossClusterSearchConnectionCommandInput extends RejectInboundCrossClusterSearchConnectionRequest {
}
export interface RejectInboundCrossClusterSearchConnectionCommandOutput extends RejectInboundCrossClusterSearchConnectionResponse, __MetadataBearer {
}
/**
 * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new RejectInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectInboundCrossClusterSearchConnectionCommand extends $Command<RejectInboundCrossClusterSearchConnectionCommandInput, RejectInboundCrossClusterSearchConnectionCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: RejectInboundCrossClusterSearchConnectionCommandInput;
    constructor(input: RejectInboundCrossClusterSearchConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectInboundCrossClusterSearchConnectionCommandInput, RejectInboundCrossClusterSearchConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { AcceptInboundCrossClusterSearchConnectionRequest, AcceptInboundCrossClusterSearchConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptInboundCrossClusterSearchConnectionCommandInput extends AcceptInboundCrossClusterSearchConnectionRequest {
}
export interface AcceptInboundCrossClusterSearchConnectionCommandOutput extends AcceptInboundCrossClusterSearchConnectionResponse, __MetadataBearer {
}
/**
 * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new AcceptInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptInboundCrossClusterSearchConnectionCommand extends $Command<AcceptInboundCrossClusterSearchConnectionCommandInput, AcceptInboundCrossClusterSearchConnectionCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: AcceptInboundCrossClusterSearchConnectionCommandInput;
    constructor(input: AcceptInboundCrossClusterSearchConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInboundCrossClusterSearchConnectionCommandInput, AcceptInboundCrossClusterSearchConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

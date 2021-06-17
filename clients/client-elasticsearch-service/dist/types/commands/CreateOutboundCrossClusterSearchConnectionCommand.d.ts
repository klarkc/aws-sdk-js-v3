import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { CreateOutboundCrossClusterSearchConnectionRequest, CreateOutboundCrossClusterSearchConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOutboundCrossClusterSearchConnectionCommandInput extends CreateOutboundCrossClusterSearchConnectionRequest {
}
export interface CreateOutboundCrossClusterSearchConnectionCommandOutput extends CreateOutboundCrossClusterSearchConnectionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CreateOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOutboundCrossClusterSearchConnectionCommand extends $Command<CreateOutboundCrossClusterSearchConnectionCommandInput, CreateOutboundCrossClusterSearchConnectionCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: CreateOutboundCrossClusterSearchConnectionCommandInput;
    constructor(input: CreateOutboundCrossClusterSearchConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOutboundCrossClusterSearchConnectionCommandInput, CreateOutboundCrossClusterSearchConnectionCommandOutput>;
    private serialize;
    private deserialize;
}

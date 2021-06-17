import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PromoteReadReplicaDBClusterCommandInput extends PromoteReadReplicaDBClusterMessage {
}
export interface PromoteReadReplicaDBClusterCommandOutput extends PromoteReadReplicaDBClusterResult, __MetadataBearer {
}
/**
 * <p>Promotes a read replica DB cluster to a standalone DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PromoteReadReplicaDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PromoteReadReplicaDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PromoteReadReplicaDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteReadReplicaDBClusterCommandInput} for command's `input` shape.
 * @see {@link PromoteReadReplicaDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PromoteReadReplicaDBClusterCommand extends $Command<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: PromoteReadReplicaDBClusterCommandInput;
    constructor(input: PromoteReadReplicaDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}

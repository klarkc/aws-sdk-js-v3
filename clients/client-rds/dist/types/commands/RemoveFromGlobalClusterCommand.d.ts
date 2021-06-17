import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveFromGlobalClusterCommandInput extends RemoveFromGlobalClusterMessage {
}
export interface RemoveFromGlobalClusterCommandOutput extends RemoveFromGlobalClusterResult, __MetadataBearer {
}
/**
 * <p>
 *         Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
 *         standalone cluster with read-write capability instead of being read-only and receiving data from a
 *         primary cluster in a different region.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveFromGlobalClusterCommand extends $Command<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: RemoveFromGlobalClusterCommandInput;
    constructor(input: RemoveFromGlobalClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}

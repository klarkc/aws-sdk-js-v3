import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGlobalClusterCommandInput extends CreateGlobalClusterMessage {
}
export interface CreateGlobalClusterCommandOutput extends CreateGlobalClusterResult, __MetadataBearer {
}
/**
 * <p>
 *         Creates an Aurora global database
 *         spread across multiple AWS Regions. The global database
 *         contains a single primary cluster with read-write capability,
 *         and a read-only secondary cluster that receives
 *         data from the primary cluster through high-speed replication
 *         performed by the Aurora storage subsystem.
 *       </p>
 *          <p>
 *         You can create a global database that is initially empty, and then
 *         add a primary cluster and a secondary cluster to it.
 *         Or you can specify an existing Aurora cluster during the create operation,
 *         and this cluster becomes the primary cluster of the global database.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGlobalClusterCommand extends $Command<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateGlobalClusterCommandInput;
    constructor(input: CreateGlobalClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}

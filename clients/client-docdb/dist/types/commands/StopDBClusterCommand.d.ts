import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDBClusterCommandInput extends StopDBClusterMessage {
}
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {
}
/**
 * <p>Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The
 *             cluster must be in the <i>available</i> state. For more information, see
 *                 <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
 *                 Starting an Amazon DocumentDB Cluster</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, StopDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, StopDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDBClusterCommand extends $Command<StopDBClusterCommandInput, StopDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: StopDBClusterCommandInput;
    constructor(input: StopDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}

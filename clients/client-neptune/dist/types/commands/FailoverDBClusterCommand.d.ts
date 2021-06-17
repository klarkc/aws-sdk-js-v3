import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FailoverDBClusterCommandInput extends FailoverDBClusterMessage {
}
export interface FailoverDBClusterCommandOutput extends FailoverDBClusterResult, __MetadataBearer {
}
/**
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the
 *       DB cluster to be the primary instance (the cluster writer).</p>
 *          <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the
 *       primary instance fails. You can force a failover when you want to simulate a failure of a
 *       primary instance for testing. Because each instance in a DB cluster has its own endpoint
 *       address, you will need to clean up and re-establish any existing connections that use those
 *       endpoint addresses when the failover is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, FailoverDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, FailoverDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class FailoverDBClusterCommand extends $Command<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: FailoverDBClusterCommandInput;
    constructor(input: FailoverDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}

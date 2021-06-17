import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RebootClusterMessage, RebootClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootClusterCommandInput extends RebootClusterMessage {
}
export interface RebootClusterCommandOutput extends RebootClusterResult, __MetadataBearer {
}
/**
 * <p>Reboots a cluster. This action is taken as soon as possible. It results in a
 *             momentary outage to the cluster, during which the cluster status is set to
 *                 <code>rebooting</code>. A cluster event is created when the reboot is completed. Any
 *             pending cluster modifications (see <a>ModifyCluster</a>) are applied at this
 *             reboot.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RebootClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RebootClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RebootClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootClusterCommandInput} for command's `input` shape.
 * @see {@link RebootClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootClusterCommand extends $Command<RebootClusterCommandInput, RebootClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RebootClusterCommandInput;
    constructor(input: RebootClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootClusterCommandInput, RebootClusterCommandOutput>;
    private serialize;
    private deserialize;
}

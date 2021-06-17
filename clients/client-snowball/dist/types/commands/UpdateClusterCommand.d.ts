import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateClusterRequest, UpdateClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClusterCommandInput extends UpdateClusterRequest {
}
export interface UpdateClusterCommandOutput extends UpdateClusterResult, __MetadataBearer {
}
/**
 * <p>While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code>
 *       state, you can update some of the information associated with a cluster. Once the cluster
 *       changes to a different job state, usually 60 minutes after the cluster being created, this
 *       action is no longer available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClusterCommand extends $Command<UpdateClusterCommandInput, UpdateClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: UpdateClusterCommandInput;
    constructor(input: UpdateClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput>;
    private serialize;
    private deserialize;
}

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateClusterVersionRequest, UpdateClusterVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClusterVersionCommandInput extends UpdateClusterVersionRequest {
}
export interface UpdateClusterVersionCommandOutput extends UpdateClusterVersionResponse, __MetadataBearer {
}
/**
 * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues
 *             to function during the update. The response output includes an update ID that you can
 *             use to track the status of your cluster update with the <a>DescribeUpdate</a>
 *             API operation.</p>
 *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 *         <p>If your cluster has managed node groups attached to it, all of your node groups’
 *             Kubernetes versions must match the cluster’s Kubernetes version in order to update the
 *             cluster to a new Kubernetes version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterVersionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterVersionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateClusterVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterVersionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClusterVersionCommand extends $Command<UpdateClusterVersionCommandInput, UpdateClusterVersionCommandOutput, EKSClientResolvedConfig> {
    readonly input: UpdateClusterVersionCommandInput;
    constructor(input: UpdateClusterVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterVersionCommandInput, UpdateClusterVersionCommandOutput>;
    private serialize;
    private deserialize;
}

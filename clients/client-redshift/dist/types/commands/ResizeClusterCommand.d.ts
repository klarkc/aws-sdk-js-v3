import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ResizeClusterMessage } from "../models/models_0";
import { ResizeClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResizeClusterCommandInput extends ResizeClusterMessage {
}
export interface ResizeClusterCommandOutput extends ResizeClusterResult, __MetadataBearer {
}
/**
 * <p>Changes the size of the cluster. You can change the cluster's type, or change the
 *             number or type of nodes. The default behavior is to use the elastic resize method. With
 *             an elastic resize, your cluster is available for read and write operations more quickly
 *             than with the classic resize method. </p>
 *         <p>Elastic resize operations have the following restrictions:</p>
 *         <ul>
 *             <li>
 *                 <p>You can only resize clusters of the following types:</p>
 *                 <ul>
 *                   <li>
 *                         <p>dc1.large (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc1.8xlarge (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.large</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.xlplus</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.4xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.16xlarge</p>
 *                     </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>The type of nodes that you add must match the node type for the
 *                     cluster.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResizeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResizeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResizeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResizeClusterCommandInput} for command's `input` shape.
 * @see {@link ResizeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResizeClusterCommand extends $Command<ResizeClusterCommandInput, ResizeClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ResizeClusterCommandInput;
    constructor(input: ResizeClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResizeClusterCommandInput, ResizeClusterCommandOutput>;
    private serialize;
    private deserialize;
}

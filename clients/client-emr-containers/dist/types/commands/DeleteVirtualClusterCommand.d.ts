import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DeleteVirtualClusterRequest, DeleteVirtualClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVirtualClusterCommandInput extends DeleteVirtualClusterRequest {
}
export interface DeleteVirtualClusterCommandOutput extends DeleteVirtualClusterResponse, __MetadataBearer {
}
/**
 * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DeleteVirtualClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVirtualClusterCommand extends $Command<DeleteVirtualClusterCommandInput, DeleteVirtualClusterCommandOutput, EMRContainersClientResolvedConfig> {
    readonly input: DeleteVirtualClusterCommandInput;
    constructor(input: DeleteVirtualClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRContainersClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualClusterCommandInput, DeleteVirtualClusterCommandOutput>;
    private serialize;
    private deserialize;
}

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClusterCommandInput extends DeleteClusterRequest {
}
export interface DeleteClusterCommandOutput extends DeleteClusterResponse, __MetadataBearer {
}
/**
 * <p>Deletes a previously provisioned DAX cluster.
 *                 <i>DeleteCluster</i> deletes all associated nodes, node endpoints
 *             and the DAX cluster itself. When you receive a successful response from this action,
 *             DAX immediately begins deleting the cluster; you cannot cancel or revert this
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DeleteClusterCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DeleteClusterCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClusterCommand extends $Command<DeleteClusterCommandInput, DeleteClusterCommandOutput, DAXClientResolvedConfig> {
    readonly input: DeleteClusterCommandInput;
    constructor(input: DeleteClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput>;
    private serialize;
    private deserialize;
}

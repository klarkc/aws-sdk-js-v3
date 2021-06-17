import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBClusterCommandInput extends DeleteDBClusterMessage {
}
export interface DeleteDBClusterCommandOutput extends DeleteDBClusterResult, __MetadataBearer {
}
/**
 * <p>Deletes a previously provisioned cluster. When you delete a cluster, all
 *             automated backups for that cluster are deleted and can't be recovered. Manual DB
 *             cluster snapshots of the specified cluster are not deleted.</p>
 *         <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBClusterCommand extends $Command<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DeleteDBClusterCommandInput;
    constructor(input: DeleteDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}

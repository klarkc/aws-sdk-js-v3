import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteGlobalClusterMessage, DeleteGlobalClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGlobalClusterCommandInput extends DeleteGlobalClusterMessage {
}
export interface DeleteGlobalClusterCommandOutput extends DeleteGlobalClusterResult, __MetadataBearer {
}
/**
 * <p>
 *         Deletes a global database cluster. The primary and secondary clusters must already be detached or
 *         destroyed first.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGlobalClusterCommand extends $Command<DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteGlobalClusterCommandInput;
    constructor(input: DeleteGlobalClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}

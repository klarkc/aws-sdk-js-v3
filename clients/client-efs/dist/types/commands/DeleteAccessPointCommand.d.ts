import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteAccessPointRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccessPointCommandInput extends DeleteAccessPointRequest {
}
export interface DeleteAccessPointCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified access point. After deletion is complete, new clients can no
 *       longer connect to the access points. Clients connected to the access point at the time of
 *       deletion will continue to function until they terminate their connection.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccessPointCommand extends $Command<DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput, EFSClientResolvedConfig> {
    readonly input: DeleteAccessPointCommandInput;
    constructor(input: DeleteAccessPointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput>;
    private serialize;
    private deserialize;
}

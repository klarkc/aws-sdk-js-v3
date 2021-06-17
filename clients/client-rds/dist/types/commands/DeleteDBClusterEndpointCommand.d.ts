import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterEndpoint, DeleteDBClusterEndpointMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBClusterEndpointCommandInput extends DeleteDBClusterEndpointMessage {
}
export interface DeleteDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {
}
/**
 * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBClusterEndpointCommand extends $Command<DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBClusterEndpointCommandInput;
    constructor(input: DeleteDBClusterEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}

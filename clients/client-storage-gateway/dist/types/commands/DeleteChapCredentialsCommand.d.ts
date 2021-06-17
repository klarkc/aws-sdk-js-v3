import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteChapCredentialsCommandInput extends DeleteChapCredentialsInput {
}
export interface DeleteChapCredentialsCommandOutput extends DeleteChapCredentialsOutput, __MetadataBearer {
}
/**
 * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteChapCredentialsCommand extends $Command<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteChapCredentialsCommandInput;
    constructor(input: DeleteChapCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}

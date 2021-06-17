import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateChapCredentialsInput, UpdateChapCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateChapCredentialsCommandInput extends UpdateChapCredentialsInput {
}
export interface UpdateChapCredentialsCommandOutput extends UpdateChapCredentialsOutput, __MetadataBearer {
}
/**
 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 *          added security, you might use it. This operation is supported in the volume and tape
 *          gateway types.</p>
 *
 *          <important>
 *             <p>When you update CHAP credentials, all existing connections on the target are closed
 *             and initiators must reconnect with the new credentials.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link UpdateChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateChapCredentialsCommand extends $Command<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateChapCredentialsCommandInput;
    constructor(input: UpdateChapCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}

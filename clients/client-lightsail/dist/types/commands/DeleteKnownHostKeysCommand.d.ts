import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteKnownHostKeysRequest, DeleteKnownHostKeysResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteKnownHostKeysCommandInput extends DeleteKnownHostKeysRequest {
}
export interface DeleteKnownHostKeysCommandOutput extends DeleteKnownHostKeysResult, __MetadataBearer {
}
/**
 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
 *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
 *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
 *          <important>
 *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
 *         or if you are familiar with the new host key or certificate on the instance. For more
 *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
 *           client</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKnownHostKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKnownHostKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKnownHostKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKnownHostKeysCommandInput} for command's `input` shape.
 * @see {@link DeleteKnownHostKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteKnownHostKeysCommand extends $Command<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteKnownHostKeysCommandInput;
    constructor(input: DeleteKnownHostKeysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput>;
    private serialize;
    private deserialize;
}

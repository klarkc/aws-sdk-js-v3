import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { JoinDomainInput, JoinDomainOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface JoinDomainCommandInput extends JoinDomainInput {
}
export interface JoinDomainCommandOutput extends JoinDomainOutput, __MetadataBearer {
}
/**
 * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for
 *          file gateways that support the SMB file protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, JoinDomainCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, JoinDomainCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new JoinDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinDomainCommandInput} for command's `input` shape.
 * @see {@link JoinDomainCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class JoinDomainCommand extends $Command<JoinDomainCommandInput, JoinDomainCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: JoinDomainCommandInput;
    constructor(input: JoinDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<JoinDomainCommandInput, JoinDomainCommandOutput>;
    private serialize;
    private deserialize;
}

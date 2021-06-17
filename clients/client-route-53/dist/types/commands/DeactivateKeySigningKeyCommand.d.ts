import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeactivateKeySigningKeyRequest, DeactivateKeySigningKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeactivateKeySigningKeyCommandInput extends DeactivateKeySigningKeyRequest {
}
export interface DeactivateKeySigningKeyCommandOutput extends DeactivateKeySigningKeyResponse, __MetadataBearer {
}
/**
 * <p>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the
 * 			KSK status to <code>INACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeactivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeactivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeactivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeactivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeactivateKeySigningKeyCommand extends $Command<DeactivateKeySigningKeyCommandInput, DeactivateKeySigningKeyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeactivateKeySigningKeyCommandInput;
    constructor(input: DeactivateKeySigningKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateKeySigningKeyCommandInput, DeactivateKeySigningKeyCommandOutput>;
    private serialize;
    private deserialize;
}

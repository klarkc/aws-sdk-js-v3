import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivateKeySigningKeyCommandInput extends ActivateKeySigningKeyRequest {
}
export interface ActivateKeySigningKeyCommandOutput extends ActivateKeySigningKeyResponse, __MetadataBearer {
}
/**
 * <p>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the
 * 			KSK status to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ActivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ActivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ActivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link ActivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivateKeySigningKeyCommand extends $Command<ActivateKeySigningKeyCommandInput, ActivateKeySigningKeyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ActivateKeySigningKeyCommandInput;
    constructor(input: ActivateKeySigningKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateKeySigningKeyCommandInput, ActivateKeySigningKeyCommandOutput>;
    private serialize;
    private deserialize;
}

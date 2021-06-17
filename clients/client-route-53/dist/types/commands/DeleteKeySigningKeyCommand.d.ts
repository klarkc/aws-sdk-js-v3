import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteKeySigningKeyRequest, DeleteKeySigningKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteKeySigningKeyCommandInput extends DeleteKeySigningKeyRequest {
}
export interface DeleteKeySigningKeyCommandOutput extends DeleteKeySigningKeyResponse, __MetadataBearer {
}
/**
 * <p>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be
 * 		deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteKeySigningKeyCommand extends $Command<DeleteKeySigningKeyCommandInput, DeleteKeySigningKeyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteKeySigningKeyCommandInput;
    constructor(input: DeleteKeySigningKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKeySigningKeyCommandInput, DeleteKeySigningKeyCommandOutput>;
    private serialize;
    private deserialize;
}

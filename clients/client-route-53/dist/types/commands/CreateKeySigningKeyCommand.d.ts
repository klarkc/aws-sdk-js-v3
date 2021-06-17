import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateKeySigningKeyRequest, CreateKeySigningKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateKeySigningKeyCommandInput extends CreateKeySigningKeyRequest {
}
export interface CreateKeySigningKeyCommandOutput extends CreateKeySigningKeyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateKeySigningKeyCommand extends $Command<CreateKeySigningKeyCommandInput, CreateKeySigningKeyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateKeySigningKeyCommandInput;
    constructor(input: CreateKeySigningKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateKeySigningKeyCommandInput, CreateKeySigningKeyCommandOutput>;
    private serialize;
    private deserialize;
}

import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ReplicateSecretToRegionsRequest, ReplicateSecretToRegionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReplicateSecretToRegionsCommandInput extends ReplicateSecretToRegionsRequest {
}
export interface ReplicateSecretToRegionsCommandOutput extends ReplicateSecretToRegionsResponse, __MetadataBearer {
}
/**
 * <p>Converts an existing secret to a multi-Region secret and begins replication the secret to a
 *       list of new regions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ReplicateSecretToRegionsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ReplicateSecretToRegionsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplicateSecretToRegionsCommandInput} for command's `input` shape.
 * @see {@link ReplicateSecretToRegionsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReplicateSecretToRegionsCommand extends $Command<ReplicateSecretToRegionsCommandInput, ReplicateSecretToRegionsCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: ReplicateSecretToRegionsCommandInput;
    constructor(input: ReplicateSecretToRegionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplicateSecretToRegionsCommandInput, ReplicateSecretToRegionsCommandOutput>;
    private serialize;
    private deserialize;
}

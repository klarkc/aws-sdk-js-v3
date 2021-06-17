import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { RemoveRegionsFromReplicationRequest, RemoveRegionsFromReplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveRegionsFromReplicationCommandInput extends RemoveRegionsFromReplicationRequest {
}
export interface RemoveRegionsFromReplicationCommandOutput extends RemoveRegionsFromReplicationResponse, __MetadataBearer {
}
/**
 * <p>Remove regions from replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RemoveRegionsFromReplicationCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RemoveRegionsFromReplicationCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new RemoveRegionsFromReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRegionsFromReplicationCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionsFromReplicationCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveRegionsFromReplicationCommand extends $Command<RemoveRegionsFromReplicationCommandInput, RemoveRegionsFromReplicationCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: RemoveRegionsFromReplicationCommandInput;
    constructor(input: RemoveRegionsFromReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveRegionsFromReplicationCommandInput, RemoveRegionsFromReplicationCommandOutput>;
    private serialize;
    private deserialize;
}

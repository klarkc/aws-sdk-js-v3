import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { UpdateServerEngineAttributesRequest, UpdateServerEngineAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateServerEngineAttributesCommandInput extends UpdateServerEngineAttributesRequest {
}
export interface UpdateServerEngineAttributesCommandOutput extends UpdateServerEngineAttributesResponse, __MetadataBearer {
}
/**
 * <p>
 *       Updates engine-specific attributes on a specified server. The server
 *       enters the <code>MODIFYING</code> state when this operation
 *       is in progress. Only one update can occur at a time.
 *       You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's
 *       admin password (<code>PUPPET_ADMIN_PASSWORD</code>).
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, UpdateServerEngineAttributesCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, UpdateServerEngineAttributesCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new UpdateServerEngineAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerEngineAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateServerEngineAttributesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateServerEngineAttributesCommand extends $Command<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: UpdateServerEngineAttributesCommandInput;
    constructor(input: UpdateServerEngineAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput>;
    private serialize;
    private deserialize;
}

import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { RestoreServerRequest, RestoreServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreServerCommandInput extends RestoreServerRequest {
}
export interface RestoreServerCommandOutput extends RestoreServerResponse, __MetadataBearer {
}
/**
 * <p>
 *       Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state.
 *       When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains
 *       the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work.
 *     </p>
 *          <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state,
 *       AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a
 *       <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown
 *       when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, RestoreServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, RestoreServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new RestoreServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreServerCommandInput} for command's `input` shape.
 * @see {@link RestoreServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreServerCommand extends $Command<RestoreServerCommandInput, RestoreServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: RestoreServerCommandInput;
    constructor(input: RestoreServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreServerCommandInput, RestoreServerCommandOutput>;
    private serialize;
    private deserialize;
}

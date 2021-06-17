import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { StartMaintenanceRequest, StartMaintenanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMaintenanceCommandInput extends StartMaintenanceRequest {
}
export interface StartMaintenanceCommandOutput extends StartMaintenanceResponse, __MetadataBearer {
}
/**
 * <p>
 *       Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying
 *       cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress.
 *     </p>
 *          <p>
 *       Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, StartMaintenanceCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, StartMaintenanceCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new StartMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMaintenanceCommandInput} for command's `input` shape.
 * @see {@link StartMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMaintenanceCommand extends $Command<StartMaintenanceCommandInput, StartMaintenanceCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: StartMaintenanceCommandInput;
    constructor(input: StartMaintenanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMaintenanceCommandInput, StartMaintenanceCommandOutput>;
    private serialize;
    private deserialize;
}

import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterTaskFromMaintenanceWindowRequest, DeregisterTaskFromMaintenanceWindowResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTaskFromMaintenanceWindowCommandInput extends DeregisterTaskFromMaintenanceWindowRequest {
}
export interface DeregisterTaskFromMaintenanceWindowCommandOutput extends DeregisterTaskFromMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Removes a task from a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTaskFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTaskFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterTaskFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTaskFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskFromMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTaskFromMaintenanceWindowCommand extends $Command<DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterTaskFromMaintenanceWindowCommandInput;
    constructor(input: DeregisterTaskFromMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}

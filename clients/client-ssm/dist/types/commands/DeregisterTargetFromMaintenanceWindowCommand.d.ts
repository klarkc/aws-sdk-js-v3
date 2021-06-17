import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterTargetFromMaintenanceWindowRequest, DeregisterTargetFromMaintenanceWindowResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTargetFromMaintenanceWindowCommandInput extends DeregisterTargetFromMaintenanceWindowRequest {
}
export interface DeregisterTargetFromMaintenanceWindowCommandOutput extends DeregisterTargetFromMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Removes a target from a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterTargetFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTargetFromMaintenanceWindowCommand extends $Command<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterTargetFromMaintenanceWindowCommandInput;
    constructor(input: DeregisterTargetFromMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}

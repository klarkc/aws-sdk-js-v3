import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterTaskWithMaintenanceWindowCommandInput extends RegisterTaskWithMaintenanceWindowRequest {
}
export interface RegisterTaskWithMaintenanceWindowCommandOutput extends RegisterTaskWithMaintenanceWindowResult, __MetadataBearer {
}
/**
 * <p>Adds a new task to a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTaskWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterTaskWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTaskWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterTaskWithMaintenanceWindowCommand extends $Command<RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterTaskWithMaintenanceWindowCommandInput;
    constructor(input: RegisterTaskWithMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}

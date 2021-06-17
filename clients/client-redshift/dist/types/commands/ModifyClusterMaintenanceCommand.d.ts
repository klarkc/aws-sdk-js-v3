import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterMaintenanceMessage, ModifyClusterMaintenanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterMaintenanceCommandInput extends ModifyClusterMaintenanceMessage {
}
export interface ModifyClusterMaintenanceCommandOutput extends ModifyClusterMaintenanceResult, __MetadataBearer {
}
/**
 * <p>Modifies the maintenance settings of a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterMaintenanceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterMaintenanceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterMaintenanceCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterMaintenanceCommand extends $Command<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterMaintenanceCommandInput;
    constructor(input: ModifyClusterMaintenanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput>;
    private serialize;
    private deserialize;
}

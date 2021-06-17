import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { UpdateAuditStreamConfigurationRequest, UpdateAuditStreamConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAuditStreamConfigurationCommandInput extends UpdateAuditStreamConfigurationRequest {
}
export interface UpdateAuditStreamConfigurationCommandOutput extends UpdateAuditStreamConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the audit stream configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateAuditStreamConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateAuditStreamConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateAuditStreamConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuditStreamConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAuditStreamConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAuditStreamConfigurationCommand extends $Command<UpdateAuditStreamConfigurationCommandInput, UpdateAuditStreamConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: UpdateAuditStreamConfigurationCommandInput;
    constructor(input: UpdateAuditStreamConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAuditStreamConfigurationCommandInput, UpdateAuditStreamConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

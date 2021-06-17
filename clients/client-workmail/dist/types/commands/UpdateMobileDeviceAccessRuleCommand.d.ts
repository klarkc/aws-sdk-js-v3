import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateMobileDeviceAccessRuleRequest, UpdateMobileDeviceAccessRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMobileDeviceAccessRuleCommandInput extends UpdateMobileDeviceAccessRuleRequest {
}
export interface UpdateMobileDeviceAccessRuleCommandOutput extends UpdateMobileDeviceAccessRuleResponse, __MetadataBearer {
}
/**
 * <p>Updates a mobile device access rule for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMobileDeviceAccessRuleCommand extends $Command<UpdateMobileDeviceAccessRuleCommandInput, UpdateMobileDeviceAccessRuleCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdateMobileDeviceAccessRuleCommandInput;
    constructor(input: UpdateMobileDeviceAccessRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMobileDeviceAccessRuleCommandInput, UpdateMobileDeviceAccessRuleCommandOutput>;
    private serialize;
    private deserialize;
}

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteOrganizationConfigRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOrganizationConfigRuleCommandInput extends DeleteOrganizationConfigRuleRequest {
}
export interface DeleteOrganizationConfigRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. </p>
 * 	        <p>Only a master account and a delegated administrator account can delete an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
 * 			You cannot update a rule while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOrganizationConfigRuleCommand extends $Command<DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteOrganizationConfigRuleCommandInput;
    constructor(input: DeleteOrganizationConfigRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}

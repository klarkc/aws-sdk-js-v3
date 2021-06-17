import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnablePolicyTypeRequest, EnablePolicyTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnablePolicyTypeCommandInput extends EnablePolicyTypeRequest {
}
export interface EnablePolicyTypeCommandOutput extends EnablePolicyTypeResponse, __MetadataBearer {
}
/**
 * <p>Enables a policy type in a root. After you enable a policy type in a root, you can
 *             attach policies of that type to the root, any organizational unit (OU), or account in
 *             that root. You can undo this by using the <a>DisablePolicyType</a>
 *             operation.</p>
 *         <p>This is an asynchronous request that AWS performs in the background. AWS
 *             recommends that you first use <a>ListRoots</a> to see the status of policy
 *             types for a specified root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p>You can enable a policy type in a root only if that policy type is available in the
 *             organization. To view the status of available policy types in the organization, use
 *                 <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link EnablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnablePolicyTypeCommand extends $Command<EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: EnablePolicyTypeCommandInput;
    constructor(input: EnablePolicyTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput>;
    private serialize;
    private deserialize;
}

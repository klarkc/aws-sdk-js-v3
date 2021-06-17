import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePolicyCommandInput extends UpdatePolicyRequest {
}
export interface UpdatePolicyCommandOutput extends UpdatePolicyResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing policy with a new name, description, or content. If you don't
 *             supply any parameter, that value remains unchanged. You can't change a policy's
 *             type.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdatePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdatePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePolicyCommand extends $Command<UpdatePolicyCommandInput, UpdatePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: UpdatePolicyCommandInput;
    constructor(input: UpdatePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePolicyCommandInput, UpdatePolicyCommandOutput>;
    private serialize;
    private deserialize;
}

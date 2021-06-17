import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribePolicyRequest, DescribePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePolicyCommandInput extends DescribePolicyRequest {
}
export interface DescribePolicyCommandOutput extends DescribePolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a policy.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePolicyCommand extends $Command<DescribePolicyCommandInput, DescribePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribePolicyCommandInput;
    constructor(input: DescribePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePolicyCommandInput, DescribePolicyCommandOutput>;
    private serialize;
    private deserialize;
}

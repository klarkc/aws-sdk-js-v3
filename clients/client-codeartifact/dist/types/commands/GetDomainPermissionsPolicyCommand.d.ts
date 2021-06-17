import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetDomainPermissionsPolicyRequest, GetDomainPermissionsPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDomainPermissionsPolicyCommandInput extends GetDomainPermissionsPolicyRequest {
}
export interface GetDomainPermissionsPolicyCommandOutput extends GetDomainPermissionsPolicyResult, __MetadataBearer {
}
/**
 * <p>
 *         Returns the resource policy attached to the specified domain.
 *       </p>
 *          <note>
 *             <p>
 *          The policy is a resource-based policy, not an identity-based policy. For more information, see
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies
 *            and resource-based policies </a> in the <i>AWS Identity and Access Management User Guide</i>.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDomainPermissionsPolicyCommand extends $Command<GetDomainPermissionsPolicyCommandInput, GetDomainPermissionsPolicyCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: GetDomainPermissionsPolicyCommandInput;
    constructor(input: GetDomainPermissionsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainPermissionsPolicyCommandInput, GetDomainPermissionsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

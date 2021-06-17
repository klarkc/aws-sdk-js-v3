import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { AssociateWebACLRequest, AssociateWebACLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateWebACLCommandInput extends AssociateWebACLRequest {
}
export interface AssociateWebACLCommandOutput extends AssociateWebACLResponse, __MetadataBearer {
}
/**
 * <p>Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
 *          <p>For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a Web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the Web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, AssociateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, AssociateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new AssociateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateWebACLCommand extends $Command<AssociateWebACLCommandInput, AssociateWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: AssociateWebACLCommandInput;
    constructor(input: AssociateWebACLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWebACLCommandInput, AssociateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}

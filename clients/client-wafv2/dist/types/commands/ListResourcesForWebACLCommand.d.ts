import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourcesForWebACLCommandInput extends ListResourcesForWebACLRequest {
}
export interface ListResourcesForWebACLCommandOutput extends ListResourcesForWebACLResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListResourcesForWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListResourcesForWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourcesForWebACLCommand extends $Command<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListResourcesForWebACLCommandInput;
    constructor(input: ListResourcesForWebACLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput>;
    private serialize;
    private deserialize;
}

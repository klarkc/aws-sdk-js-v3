import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddTagsCommandInput extends AddTagsInput {
}
export interface AddTagsCommandOutput extends AddTagsOutput, __MetadataBearer {
}
/**
 * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
 *       Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
 *       listeners, and rules.</p>
 *          <p>Each tag consists of a key and an optional value. If a resource already has a tag with the
 *       same key, <code>AddTags</code> updates its value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddTagsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddTagsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: AddTagsCommandInput;
    constructor(input: AddTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsCommandInput, AddTagsCommandOutput>;
    private serialize;
    private deserialize;
}

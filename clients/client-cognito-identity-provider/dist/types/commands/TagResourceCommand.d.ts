import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
/**
 * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can
 *             use to categorize and manage user pools in different ways, such as by purpose, owner,
 *             environment, or other criteria.</p>
 *         <p>Each tag consists of a key and value, both of which you define. A key is a general
 *             category for more specific values. For example, if you have two versions of a user pool,
 *             one for testing and another for production, you might assign an <code>Environment</code>
 *             tag key to both user pools. The value of this key might be <code>Test</code> for one
 *             user pool and <code>Production</code> for the other.</p>
 *         <p>Tags are useful for cost tracking and access control. You can activate your tags so
 *             that they appear on the Billing and Cost Management console, where you can track the
 *             costs associated with your user pools. In an IAM policy, you can constrain permissions
 *             for user pools based on specific tags or tag values.</p>
 *         <p>You can use this action up to 5 times per second, per account. A user pool can have as
 *             many as 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, TagResourceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, TagResourceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}

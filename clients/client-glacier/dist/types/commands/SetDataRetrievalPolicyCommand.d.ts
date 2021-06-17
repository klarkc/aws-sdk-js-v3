import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetDataRetrievalPolicyInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetDataRetrievalPolicyCommandInput extends SetDataRetrievalPolicyInput {
}
export interface SetDataRetrievalPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation sets and then enacts a data retrieval policy in the region specified
 *          in the PUT request. You can set one policy per region for an AWS account. The policy is
 *          enacted within a few minutes of a successful PUT operation.</p>
 *          <p>The set policy operation does not affect retrieval jobs that were in progress before
 *          the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon
 *             Glacier Data Retrieval Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new SetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link SetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetDataRetrievalPolicyCommand extends $Command<SetDataRetrievalPolicyCommandInput, SetDataRetrievalPolicyCommandOutput, GlacierClientResolvedConfig> {
    readonly input: SetDataRetrievalPolicyCommandInput;
    constructor(input: SetDataRetrievalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetDataRetrievalPolicyCommandInput, SetDataRetrievalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

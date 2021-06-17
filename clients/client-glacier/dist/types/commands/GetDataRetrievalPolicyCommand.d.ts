import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDataRetrievalPolicyCommandInput extends GetDataRetrievalPolicyInput {
}
export interface GetDataRetrievalPolicyCommandOutput extends GetDataRetrievalPolicyOutput, __MetadataBearer {
}
/**
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDataRetrievalPolicyCommand extends $Command<GetDataRetrievalPolicyCommandInput, GetDataRetrievalPolicyCommandOutput, GlacierClientResolvedConfig> {
    readonly input: GetDataRetrievalPolicyCommandInput;
    constructor(input: GetDataRetrievalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataRetrievalPolicyCommandInput, GetDataRetrievalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

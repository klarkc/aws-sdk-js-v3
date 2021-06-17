import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetContainerPolicyInput, GetContainerPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerPolicyCommandInput extends GetContainerPolicyInput {
}
export interface GetContainerPolicyCommandOutput extends GetContainerPolicyOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the access policy for the specified container. For information about the
 *          data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetContainerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerPolicyCommand extends $Command<GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetContainerPolicyCommandInput;
    constructor(input: GetContainerPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

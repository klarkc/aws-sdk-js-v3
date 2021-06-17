import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutContainerPolicyInput, PutContainerPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutContainerPolicyCommandInput extends PutContainerPolicyInput {
}
export interface PutContainerPolicyCommandOutput extends PutContainerPolicyOutput, __MetadataBearer {
}
/**
 * <p>Creates an access policy for the specified container to restrict the users and
 *          clients that can access it. For information about the data that is included in an access
 *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
 *             Access Management User Guide</a>.</p>
 *          <p>For this release of the REST API, you can create only one policy for a container. If
 *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
 *          policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new PutContainerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutContainerPolicyCommand extends $Command<PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: PutContainerPolicyCommandInput;
    constructor(input: PutContainerPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

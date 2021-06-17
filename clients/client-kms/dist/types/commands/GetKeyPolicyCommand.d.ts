import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetKeyPolicyRequest, GetKeyPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetKeyPolicyCommandInput extends GetKeyPolicyRequest {
}
export interface GetKeyPolicyCommandOutput extends GetKeyPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets a key policy attached to the specified customer master key (CMK).</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyPolicy</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>PutKeyPolicy</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetKeyPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link GetKeyPolicyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKeyPolicyCommand extends $Command<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput, KMSClientResolvedConfig> {
    readonly input: GetKeyPolicyCommandInput;
    constructor(input: GetKeyPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

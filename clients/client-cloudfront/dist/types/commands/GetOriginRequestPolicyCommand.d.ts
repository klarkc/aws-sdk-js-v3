import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetOriginRequestPolicyCommandInput extends GetOriginRequestPolicyRequest {}
export interface GetOriginRequestPolicyCommandOutput extends GetOriginRequestPolicyResult, __MetadataBearer {}
/**
 * <p>Gets an origin request policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get an origin request policy, you must provide the policy’s identifier. If the origin
 * 			request policy is attached to a distribution’s cache behavior, you can get the policy’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			origin request policy is not attached to a cache behavior, you can get the identifier
 * 			using <code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOriginRequestPolicyCommand extends $Command<
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetOriginRequestPolicyCommandInput;
  constructor(input: GetOriginRequestPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOriginRequestPolicyCommandInput, GetOriginRequestPolicyCommandOutput>;
  private serialize;
  private deserialize;
}

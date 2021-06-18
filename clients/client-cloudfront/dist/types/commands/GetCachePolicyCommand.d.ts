import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetCachePolicyRequest, GetCachePolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetCachePolicyCommandInput extends GetCachePolicyRequest {}
export interface GetCachePolicyCommandOutput extends GetCachePolicyResult, __MetadataBearer {}
/**
 * <p>Gets a cache policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get a cache policy, you must provide the policy’s identifier. If the cache policy is
 * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
 * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
 * 			not attached to a cache behavior, you can get the identifier using
 * 			<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCachePolicyCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCachePolicyCommand extends $Command<
  GetCachePolicyCommandInput,
  GetCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetCachePolicyCommandInput;
  constructor(input: GetCachePolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCachePolicyCommandInput, GetCachePolicyCommandOutput>;
  private serialize;
  private deserialize;
}

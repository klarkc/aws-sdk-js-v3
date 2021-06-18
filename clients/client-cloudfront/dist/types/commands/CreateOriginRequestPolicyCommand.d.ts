import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateOriginRequestPolicyRequest, CreateOriginRequestPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateOriginRequestPolicyCommandInput extends CreateOriginRequestPolicyRequest {}
export interface CreateOriginRequestPolicyCommandOutput extends CreateOriginRequestPolicyResult, __MetadataBearer {}
/**
 * <p>Creates an origin request policy.</p>
 * 		       <p>After you create an origin request policy, you can attach it to one or more cache behaviors.
 * 			When it’s attached to a cache behavior, the origin request policy determines the values
 * 			that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends
 * 			to the origin includes the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The headers that CloudFront automatically includes in every origin request, including
 * 					<code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or
 * 					the origin request policy. These can include items from the viewer request and,
 * 					in the case of headers, additional ones that are added by CloudFront.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>CloudFront sends a request when it can’t find a valid object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 * 		       <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOriginRequestPolicyCommand extends $Command<
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: CreateOriginRequestPolicyCommandInput;
  constructor(input: CreateOriginRequestPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOriginRequestPolicyCommandInput, CreateOriginRequestPolicyCommandOutput>;
  private serialize;
  private deserialize;
}

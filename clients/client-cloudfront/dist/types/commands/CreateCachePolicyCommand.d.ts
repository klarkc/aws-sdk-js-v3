import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateCachePolicyRequest, CreateCachePolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateCachePolicyCommandInput extends CreateCachePolicyRequest {}
export interface CreateCachePolicyCommandOutput extends CreateCachePolicyResult, __MetadataBearer {}
/**
 * <p>Creates a cache policy.</p>
 * 		       <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it’s
 * 			attached to a cache behavior, the cache policy determines the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The values that CloudFront includes in the <i>cache key</i>. These values can
 * 					include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to
 * 					find an object in its cache that it can return to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
 * 					in the CloudFront cache.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find an object in its cache that matches the request’s cache key. If you want to send
 * 			values to the origin but <i>not</i> include them in the cache key, use
 * 			<code>OriginRequestPolicy</code>.</p>
 * 		       <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCachePolicyCommand extends $Command<
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: CreateCachePolicyCommandInput;
  constructor(input: CreateCachePolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput>;
  private serialize;
  private deserialize;
}

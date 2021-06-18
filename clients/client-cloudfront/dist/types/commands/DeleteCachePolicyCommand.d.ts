import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteCachePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteCachePolicyCommandInput extends DeleteCachePolicyRequest {}
export interface DeleteCachePolicyCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a cache policy.</p>
 * 		       <p>You cannot delete a cache policy if it’s attached to a cache behavior. First update your
 * 			distributions to remove the cache policy from all cache behaviors, then delete the cache
 * 			policy.</p>
 * 		       <p>To delete a cache policy, you must provide the policy’s identifier and version. To get these
 * 			values, you can use <code>ListCachePolicies</code> or
 * 			<code>GetCachePolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCachePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCachePolicyCommand extends $Command<
  DeleteCachePolicyCommandInput,
  DeleteCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: DeleteCachePolicyCommandInput;
  constructor(input: DeleteCachePolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput>;
  private serialize;
  private deserialize;
}

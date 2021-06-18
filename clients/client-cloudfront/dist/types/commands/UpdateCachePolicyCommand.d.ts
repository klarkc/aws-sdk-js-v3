import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateCachePolicyCommandInput extends UpdateCachePolicyRequest {}
export interface UpdateCachePolicyCommandOutput extends UpdateCachePolicyResult, __MetadataBearer {}
/**
 * <p>Updates a cache policy configuration.</p>
 * 		       <p>When you update a cache policy configuration, all the fields are updated with the
 * 			values provided in the request. You cannot update some fields independent of others. To
 * 			update a cache policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the cache policy configuration that you want to
 * 					update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
 * 					configuration, including the fields that you modified and those that you
 * 					didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCachePolicyCommand extends $Command<
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: UpdateCachePolicyCommandInput;
  constructor(input: UpdateCachePolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput>;
  private serialize;
  private deserialize;
}

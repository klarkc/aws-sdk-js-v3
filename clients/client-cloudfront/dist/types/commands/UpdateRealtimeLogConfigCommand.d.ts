import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateRealtimeLogConfigCommandInput extends UpdateRealtimeLogConfigRequest {}
export interface UpdateRealtimeLogConfigCommandOutput extends UpdateRealtimeLogConfigResult, __MetadataBearer {}
/**
 * <p>Updates a real-time log configuration.</p>
 * 		       <p>When you update a real-time log configuration, all the parameters are updated with the
 * 			values provided in the request. You cannot update some parameters independent of others.
 * 			To update a real-time log configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
 * 					configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the parameters in the real-time log configuration that you want
 * 					to update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
 * 					real-time log configuration, including the parameters that you modified and
 * 					those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>You cannot update a real-time log configuration’s <code>Name</code> or
 * 			<code>ARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRealtimeLogConfigCommand extends $Command<
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: UpdateRealtimeLogConfigCommandInput;
  constructor(input: UpdateRealtimeLogConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRealtimeLogConfigCommandInput, UpdateRealtimeLogConfigCommandOutput>;
  private serialize;
  private deserialize;
}

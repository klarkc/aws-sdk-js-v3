import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateKeyGroupRequest, UpdateKeyGroupResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateKeyGroupCommandInput extends UpdateKeyGroupRequest {}
export interface UpdateKeyGroupCommandOutput extends UpdateKeyGroupResult, __MetadataBearer {}
/**
 * <p>Updates a key group.</p>
 * 		       <p>When you update a key group, all the fields are updated with the values provided in
 * 			the request. You cannot update some fields independent of others. To update a key
 * 			group:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Get the current key group with <code>GetKeyGroup</code> or
 * 					<code>GetKeyGroupConfig</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the key group that you want to update. For
 * 					example, add or remove public key IDs.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
 * 					the fields that you modified and those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateKeyGroupCommand extends $Command<
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: UpdateKeyGroupCommandInput;
  constructor(input: UpdateKeyGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput>;
  private serialize;
  private deserialize;
}

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteKeyGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteKeyGroupCommandInput extends DeleteKeyGroupRequest {}
export interface DeleteKeyGroupCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a key group.</p>
 * 		       <p>You cannot delete a key group that is referenced in a cache behavior. First update
 * 			your distributions to remove the key group from all cache behaviors, then delete the key
 * 			group.</p>
 * 		       <p>To delete a key group, you must provide the key group’s identifier and version. To get
 * 			these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or
 * 			<code>GetKeyGroupConfig</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteKeyGroupCommand extends $Command<
  DeleteKeyGroupCommandInput,
  DeleteKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: DeleteKeyGroupCommandInput;
  constructor(input: DeleteKeyGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput>;
  private serialize;
  private deserialize;
}

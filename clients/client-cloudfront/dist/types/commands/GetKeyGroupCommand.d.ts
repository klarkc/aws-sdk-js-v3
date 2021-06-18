import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetKeyGroupRequest, GetKeyGroupResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetKeyGroupCommandInput extends GetKeyGroupRequest {}
export interface GetKeyGroupCommandOutput extends GetKeyGroupResult, __MetadataBearer {}
/**
 * <p>Gets a key group, including the date and time when the key group was last modified.</p>
 * 		       <p>To get a key group, you must provide the key group’s identifier. If the key group is
 * 			referenced in a distribution’s cache behavior, you can get the key group’s identifier
 * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group
 * 			is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyGroupCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKeyGroupCommand extends $Command<
  GetKeyGroupCommandInput,
  GetKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetKeyGroupCommandInput;
  constructor(input: GetKeyGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyGroupCommandInput, GetKeyGroupCommandOutput>;
  private serialize;
  private deserialize;
}

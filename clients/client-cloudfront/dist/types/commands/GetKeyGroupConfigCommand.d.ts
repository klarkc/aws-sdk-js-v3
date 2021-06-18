import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetKeyGroupConfigRequest, GetKeyGroupConfigResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetKeyGroupConfigCommandInput extends GetKeyGroupConfigRequest {}
export interface GetKeyGroupConfigCommandOutput extends GetKeyGroupConfigResult, __MetadataBearer {}
/**
 * <p>Gets a key group configuration.</p>
 * 		       <p>To get a key group configuration, you must provide the key group’s identifier. If the
 * 			key group is referenced in a distribution’s cache behavior, you can get the key group’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			key group is not referenced in a cache behavior, you can get the identifier using
 * 			<code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetKeyGroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyGroupConfigCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKeyGroupConfigCommand extends $Command<
  GetKeyGroupConfigCommandInput,
  GetKeyGroupConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetKeyGroupConfigCommandInput;
  constructor(input: GetKeyGroupConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput>;
  private serialize;
  private deserialize;
}

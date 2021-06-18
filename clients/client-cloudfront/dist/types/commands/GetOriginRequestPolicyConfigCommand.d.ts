import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetOriginRequestPolicyConfigCommandInput extends GetOriginRequestPolicyConfigRequest {}
export interface GetOriginRequestPolicyConfigCommandOutput
  extends GetOriginRequestPolicyConfigResult,
    __MetadataBearer {}
/**
 * <p>Gets an origin request policy configuration.</p>
 * 		       <p>To get an origin request policy configuration, you must provide the policy’s identifier. If
 * 			the origin request policy is attached to a distribution’s cache behavior, you can get
 * 			the policy’s identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOriginRequestPolicyConfigCommand extends $Command<
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: GetOriginRequestPolicyConfigCommandInput;
  constructor(input: GetOriginRequestPolicyConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOriginRequestPolicyConfigCommandInput, GetOriginRequestPolicyConfigCommandOutput>;
  private serialize;
  private deserialize;
}

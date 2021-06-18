import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListDistributionsByRealtimeLogConfigRequest,
  ListDistributionsByRealtimeLogConfigResult,
} from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListDistributionsByRealtimeLogConfigCommandInput extends ListDistributionsByRealtimeLogConfigRequest {}
export interface ListDistributionsByRealtimeLogConfigCommandOutput
  extends ListDistributionsByRealtimeLogConfigResult,
    __MetadataBearer {}
/**
 * <p>Gets a list of distributions that have a cache behavior that’s associated with the specified
 * 			real-time log configuration.</p>
 * 		       <p>You can specify the real-time log configuration by its name or its Amazon Resource Name
 * 			(ARN). You must provide at least one. If you provide both, CloudFront uses the name to
 * 			identify the real-time log configuration to list distributions for.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDistributionsByRealtimeLogConfigCommand extends $Command<
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListDistributionsByRealtimeLogConfigCommandInput;
  constructor(input: ListDistributionsByRealtimeLogConfigCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByRealtimeLogConfigCommandInput, ListDistributionsByRealtimeLogConfigCommandOutput>;
  private serialize;
  private deserialize;
}

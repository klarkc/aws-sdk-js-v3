import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListRealtimeLogConfigsCommandInput extends ListRealtimeLogConfigsRequest {}
export interface ListRealtimeLogConfigsCommandOutput extends ListRealtimeLogConfigsResult, __MetadataBearer {}
/**
 * <p>Gets a list of real-time log configurations.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListRealtimeLogConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListRealtimeLogConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListRealtimeLogConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRealtimeLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRealtimeLogConfigsCommand extends $Command<
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListRealtimeLogConfigsCommandInput;
  constructor(input: ListRealtimeLogConfigsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRealtimeLogConfigsCommandInput, ListRealtimeLogConfigsCommandOutput>;
  private serialize;
  private deserialize;
}

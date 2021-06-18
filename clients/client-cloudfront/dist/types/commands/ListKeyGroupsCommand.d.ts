import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListKeyGroupsRequest, ListKeyGroupsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListKeyGroupsCommandInput extends ListKeyGroupsRequest {}
export interface ListKeyGroupsCommandOutput extends ListKeyGroupsResult, __MetadataBearer {}
/**
 * <p>Gets a list of key groups.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListKeyGroupsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListKeyGroupsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListKeyGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListKeyGroupsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListKeyGroupsCommand extends $Command<
  ListKeyGroupsCommandInput,
  ListKeyGroupsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListKeyGroupsCommandInput;
  constructor(input: ListKeyGroupsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput>;
  private serialize;
  private deserialize;
}

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListOriginRequestPoliciesRequest, ListOriginRequestPoliciesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListOriginRequestPoliciesCommandInput extends ListOriginRequestPoliciesRequest {}
export interface ListOriginRequestPoliciesCommandOutput extends ListOriginRequestPoliciesResult, __MetadataBearer {}
/**
 * <p>Gets a list of origin request policies.</p>
 * 		       <p>You can optionally apply a filter to return only the managed policies created by AWS, or
 * 			only the custom policies created in your AWS account.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListOriginRequestPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginRequestPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListOriginRequestPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginRequestPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListOriginRequestPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOriginRequestPoliciesCommand extends $Command<
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListOriginRequestPoliciesCommandInput;
  constructor(input: ListOriginRequestPoliciesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOriginRequestPoliciesCommandInput, ListOriginRequestPoliciesCommandOutput>;
  private serialize;
  private deserialize;
}

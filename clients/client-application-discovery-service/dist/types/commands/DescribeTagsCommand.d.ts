import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeTagsRequest, DescribeTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeTagsCommandInput extends DescribeTagsRequest {}
export interface DescribeTagsCommandOutput extends DescribeTagsResponse, __MetadataBearer {}
/**
 * <p>Retrieves a list of configuration items that have tags as specified by the key-value
 *       pairs, name and value, passed to the optional parameter <code>filters</code>.</p>
 *          <p>There are three valid tag filter names:</p>
 *          <ul>
 *             <li>
 *                <p>tagKey</p>
 *             </li>
 *             <li>
 *                <p>tagValue</p>
 *             </li>
 *             <li>
 *                <p>configurationId</p>
 *             </li>
 *          </ul>
 *          <p>Also, all configuration items associated with your user account that have tags can be
 *       listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: DescribeTagsCommandInput;
  constructor(input: DescribeTagsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput>;
  private serialize;
  private deserialize;
}

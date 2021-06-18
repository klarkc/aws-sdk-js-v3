import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDiscoverySummaryCommandInput extends GetDiscoverySummaryRequest {}
export interface GetDiscoverySummaryCommandOutput extends GetDiscoverySummaryResponse, __MetadataBearer {}
/**
 * <p>Retrieves a short summary of discovered assets.</p>
 *          <p>This API operation takes no request parameters and is called as is at the command
 *       prompt as shown in the example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new GetDiscoverySummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoverySummaryCommandInput} for command's `input` shape.
 * @see {@link GetDiscoverySummaryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDiscoverySummaryCommand extends $Command<
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: GetDiscoverySummaryCommandInput;
  constructor(input: GetDiscoverySummaryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput>;
  private serialize;
  private deserialize;
}

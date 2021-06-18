import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListServerNeighborsCommandInput extends ListServerNeighborsRequest {}
export interface ListServerNeighborsCommandOutput extends ListServerNeighborsResponse, __MetadataBearer {}
/**
 * <p>Retrieves a list of servers that are one network hop away from a specified
 *       server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new ListServerNeighborsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerNeighborsCommandInput} for command's `input` shape.
 * @see {@link ListServerNeighborsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServerNeighborsCommand extends $Command<
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: ListServerNeighborsCommandInput;
  constructor(input: ListServerNeighborsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput>;
  private serialize;
  private deserialize;
}

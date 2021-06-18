import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DeleteApplicationsRequest, DeleteApplicationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteApplicationsCommandInput extends DeleteApplicationsRequest {}
export interface DeleteApplicationsCommandOutput extends DeleteApplicationsResponse, __MetadataBearer {}
/**
 * <p>Deletes a list of applications and their associations with configuration
 *       items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DeleteApplicationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DeleteApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApplicationsCommand extends $Command<
  DeleteApplicationsCommandInput,
  DeleteApplicationsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: DeleteApplicationsCommandInput;
  constructor(input: DeleteApplicationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput>;
  private serialize;
  private deserialize;
}

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { ListConnectorEntitiesRequest, ListConnectorEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListConnectorEntitiesCommandInput extends ListConnectorEntitiesRequest {}
export interface ListConnectorEntitiesCommandOutput extends ListConnectorEntitiesResponse, __MetadataBearer {}
/**
 * <p>
 *   Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorEntitiesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorEntitiesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListConnectorEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListConnectorEntitiesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConnectorEntitiesCommand extends $Command<
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
  AppflowClientResolvedConfig
> {
  readonly input: ListConnectorEntitiesCommandInput;
  constructor(input: ListConnectorEntitiesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConnectorEntitiesCommandInput, ListConnectorEntitiesCommandOutput>;
  private serialize;
  private deserialize;
}

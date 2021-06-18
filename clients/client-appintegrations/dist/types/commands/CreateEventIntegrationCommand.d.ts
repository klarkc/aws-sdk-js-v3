import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateEventIntegrationCommandInput extends CreateEventIntegrationRequest {}
export interface CreateEventIntegrationCommandOutput extends CreateEventIntegrationResponse, __MetadataBearer {}
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Creates an EventIntegration, given a specified name, description, and a reference to an
 *       Amazon Eventbridge bus in your account and a partner event source that will push events to that bus. No
 *       objects are created in the your account, only metadata that is persisted on the EventIntegration
 *       control plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new CreateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEventIntegrationCommand extends $Command<
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  readonly input: CreateEventIntegrationCommandInput;
  constructor(input: CreateEventIntegrationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventIntegrationCommandInput, CreateEventIntegrationCommandOutput>;
  private serialize;
  private deserialize;
}

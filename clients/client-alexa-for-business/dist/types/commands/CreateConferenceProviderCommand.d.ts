import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateConferenceProviderRequest, CreateConferenceProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateConferenceProviderCommandInput extends CreateConferenceProviderRequest {}
export interface CreateConferenceProviderCommandOutput extends CreateConferenceProviderResponse, __MetadataBearer {}
/**
 * <p>Adds a new conference provider under the user's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link CreateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConferenceProviderCommand extends $Command<
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: CreateConferenceProviderCommandInput;
  constructor(input: CreateConferenceProviderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConferenceProviderCommandInput, CreateConferenceProviderCommandOutput>;
  private serialize;
  private deserialize;
}

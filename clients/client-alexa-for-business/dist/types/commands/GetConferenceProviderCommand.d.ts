import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferenceProviderRequest, GetConferenceProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetConferenceProviderCommandInput extends GetConferenceProviderRequest {}
export interface GetConferenceProviderCommandOutput extends GetConferenceProviderResponse, __MetadataBearer {}
/**
 * <p>Gets details about a specific conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link GetConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConferenceProviderCommand extends $Command<
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: GetConferenceProviderCommandInput;
  constructor(input: GetConferenceProviderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConferenceProviderCommandInput, GetConferenceProviderCommandOutput>;
  private serialize;
  private deserialize;
}

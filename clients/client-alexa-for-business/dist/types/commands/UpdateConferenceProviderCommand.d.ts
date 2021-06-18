import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateConferenceProviderRequest, UpdateConferenceProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateConferenceProviderCommandInput extends UpdateConferenceProviderRequest {}
export interface UpdateConferenceProviderCommandOutput extends UpdateConferenceProviderResponse, __MetadataBearer {}
/**
 * <p>Updates an existing conference provider's settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConferenceProviderCommand extends $Command<
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: UpdateConferenceProviderCommandInput;
  constructor(input: UpdateConferenceProviderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConferenceProviderCommandInput, UpdateConferenceProviderCommandOutput>;
  private serialize;
  private deserialize;
}

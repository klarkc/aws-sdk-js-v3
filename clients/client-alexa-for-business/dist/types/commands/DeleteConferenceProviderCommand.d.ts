import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteConferenceProviderRequest, DeleteConferenceProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteConferenceProviderCommandInput extends DeleteConferenceProviderRequest {}
export interface DeleteConferenceProviderCommandOutput extends DeleteConferenceProviderResponse, __MetadataBearer {}
/**
 * <p>Deletes a conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConferenceProviderCommand extends $Command<
  DeleteConferenceProviderCommandInput,
  DeleteConferenceProviderCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DeleteConferenceProviderCommandInput;
  constructor(input: DeleteConferenceProviderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConferenceProviderCommandInput, DeleteConferenceProviderCommandOutput>;
  private serialize;
  private deserialize;
}

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutConferencePreferenceRequest, PutConferencePreferenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutConferencePreferenceCommandInput extends PutConferencePreferenceRequest {}
export interface PutConferencePreferenceCommandOutput extends PutConferencePreferenceResponse, __MetadataBearer {}
/**
 * <p>Sets the conference preferences on a specific conference provider at the account
 *          level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link PutConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutConferencePreferenceCommand extends $Command<
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: PutConferencePreferenceCommandInput;
  constructor(input: PutConferencePreferenceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput>;
  private serialize;
  private deserialize;
}

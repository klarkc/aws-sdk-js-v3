import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferencePreferenceRequest, GetConferencePreferenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetConferencePreferenceCommandInput extends GetConferencePreferenceRequest {}
export interface GetConferencePreferenceCommandOutput extends GetConferencePreferenceResponse, __MetadataBearer {}
/**
 * <p>Retrieves the existing conference preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link GetConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConferencePreferenceCommand extends $Command<
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: GetConferencePreferenceCommandInput;
  constructor(input: GetConferencePreferenceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConferencePreferenceCommandInput, GetConferencePreferenceCommandOutput>;
  private serialize;
  private deserialize;
}

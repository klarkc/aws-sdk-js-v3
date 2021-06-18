import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListConferenceProvidersCommandInput extends ListConferenceProvidersRequest {}
export interface ListConferenceProvidersCommandOutput extends ListConferenceProvidersResponse, __MetadataBearer {}
/**
 * <p>Lists conference providers under a specific AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListConferenceProvidersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListConferenceProvidersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListConferenceProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConferenceProvidersCommandInput} for command's `input` shape.
 * @see {@link ListConferenceProvidersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConferenceProvidersCommand extends $Command<
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: ListConferenceProvidersCommandInput;
  constructor(input: ListConferenceProvidersCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput>;
  private serialize;
  private deserialize;
}

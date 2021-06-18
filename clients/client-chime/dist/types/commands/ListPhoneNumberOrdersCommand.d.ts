import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListPhoneNumberOrdersRequest, ListPhoneNumberOrdersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListPhoneNumberOrdersCommandInput extends ListPhoneNumberOrdersRequest {}
export interface ListPhoneNumberOrdersCommandOutput extends ListPhoneNumberOrdersResponse, __MetadataBearer {}
/**
 * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListPhoneNumberOrdersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListPhoneNumberOrdersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListPhoneNumberOrdersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumberOrdersCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumberOrdersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPhoneNumberOrdersCommand extends $Command<
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListPhoneNumberOrdersCommandInput;
  constructor(input: ListPhoneNumberOrdersCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPhoneNumberOrdersCommandInput, ListPhoneNumberOrdersCommandOutput>;
  private serialize;
  private deserialize;
}

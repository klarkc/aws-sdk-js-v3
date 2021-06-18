import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetAddressBookRequest, GetAddressBookResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAddressBookCommandInput extends GetAddressBookRequest {}
export interface GetAddressBookCommandOutput extends GetAddressBookResponse, __MetadataBearer {}
/**
 * <p>Gets address the book details by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAddressBookCommandInput} for command's `input` shape.
 * @see {@link GetAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAddressBookCommand extends $Command<
  GetAddressBookCommandInput,
  GetAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: GetAddressBookCommandInput;
  constructor(input: GetAddressBookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAddressBookCommandInput, GetAddressBookCommandOutput>;
  private serialize;
  private deserialize;
}

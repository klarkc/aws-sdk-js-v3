import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateAddressBookRequest, CreateAddressBookResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateAddressBookCommandInput extends CreateAddressBookRequest {}
export interface CreateAddressBookCommandOutput extends CreateAddressBookResponse, __MetadataBearer {}
/**
 * <p>Creates an address book with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddressBookCommandInput} for command's `input` shape.
 * @see {@link CreateAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAddressBookCommand extends $Command<
  CreateAddressBookCommandInput,
  CreateAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: CreateAddressBookCommandInput;
  constructor(input: CreateAddressBookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAddressBookCommandInput, CreateAddressBookCommandOutput>;
  private serialize;
  private deserialize;
}

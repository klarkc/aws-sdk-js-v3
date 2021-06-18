import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateAddressBookRequest, UpdateAddressBookResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAddressBookCommandInput extends UpdateAddressBookRequest {}
export interface UpdateAddressBookCommandOutput extends UpdateAddressBookResponse, __MetadataBearer {}
/**
 * <p>Updates address book details by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAddressBookCommandInput} for command's `input` shape.
 * @see {@link UpdateAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAddressBookCommand extends $Command<
  UpdateAddressBookCommandInput,
  UpdateAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: UpdateAddressBookCommandInput;
  constructor(input: UpdateAddressBookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput>;
  private serialize;
  private deserialize;
}

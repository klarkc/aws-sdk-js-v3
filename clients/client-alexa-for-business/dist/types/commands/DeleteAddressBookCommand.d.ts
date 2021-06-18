import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteAddressBookRequest, DeleteAddressBookResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteAddressBookCommandInput extends DeleteAddressBookRequest {}
export interface DeleteAddressBookCommandOutput extends DeleteAddressBookResponse, __MetadataBearer {}
/**
 * <p>Deletes an address book by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAddressBookCommandInput} for command's `input` shape.
 * @see {@link DeleteAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAddressBookCommand extends $Command<
  DeleteAddressBookCommandInput,
  DeleteAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DeleteAddressBookCommandInput;
  constructor(input: DeleteAddressBookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput>;
  private serialize;
  private deserialize;
}

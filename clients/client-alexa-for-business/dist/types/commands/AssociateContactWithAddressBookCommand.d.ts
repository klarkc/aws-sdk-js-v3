import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateContactWithAddressBookRequest, AssociateContactWithAddressBookResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociateContactWithAddressBookCommandInput extends AssociateContactWithAddressBookRequest {}
export interface AssociateContactWithAddressBookCommandOutput
  extends AssociateContactWithAddressBookResponse,
    __MetadataBearer {}
/**
 * <p>Associates a contact with a given address book.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateContactWithAddressBookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateContactWithAddressBookCommandInput} for command's `input` shape.
 * @see {@link AssociateContactWithAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateContactWithAddressBookCommand extends $Command<
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: AssociateContactWithAddressBookCommandInput;
  constructor(input: AssociateContactWithAddressBookCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateContactWithAddressBookCommandInput, AssociateContactWithAddressBookCommandOutput>;
  private serialize;
  private deserialize;
}

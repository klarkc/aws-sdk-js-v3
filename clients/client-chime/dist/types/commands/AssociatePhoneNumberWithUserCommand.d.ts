import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { AssociatePhoneNumberWithUserRequest, AssociatePhoneNumberWithUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociatePhoneNumberWithUserCommandInput extends AssociatePhoneNumberWithUserRequest {}
export interface AssociatePhoneNumberWithUserCommandOutput
  extends AssociatePhoneNumberWithUserResponse,
    __MetadataBearer {}
/**
 * <p>Associates a phone number with the specified Amazon Chime user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociatePhoneNumberWithUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociatePhoneNumberWithUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociatePhoneNumberWithUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePhoneNumberWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberWithUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociatePhoneNumberWithUserCommand extends $Command<
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: AssociatePhoneNumberWithUserCommandInput;
  constructor(input: AssociatePhoneNumberWithUserCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociatePhoneNumberWithUserCommandInput, AssociatePhoneNumberWithUserCommandOutput>;
  private serialize;
  private deserialize;
}

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetPhoneNumberRequest, GetPhoneNumberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetPhoneNumberCommandInput extends GetPhoneNumberRequest {}
export interface GetPhoneNumberCommandOutput extends GetPhoneNumberResponse, __MetadataBearer {}
/**
 * <p>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPhoneNumberCommand extends $Command<
  GetPhoneNumberCommandInput,
  GetPhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetPhoneNumberCommandInput;
  constructor(input: GetPhoneNumberCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput>;
  private serialize;
  private deserialize;
}

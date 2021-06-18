import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { PutAccountConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutAccountConfigurationCommandInput extends PutAccountConfigurationRequest {}
export interface PutAccountConfigurationCommandOutput extends __MetadataBearer {}
/**
 * <p>Adds or modifies
 *       account-level configurations in ACM.
 *       </p>
 *          <p>The
 *       supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the
 *       number of days prior to certificate expiration when ACM starts generating
 *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
 *       certificate expires. By default, accounts receive events starting 45 days before certificate
 *       expiration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, PutAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, PutAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new PutAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccountConfigurationCommand extends $Command<
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
  ACMClientResolvedConfig
> {
  readonly input: PutAccountConfigurationCommandInput;
  constructor(input: PutAccountConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountConfigurationCommandInput, PutAccountConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}

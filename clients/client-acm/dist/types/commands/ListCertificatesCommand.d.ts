import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, __MetadataBearer {}
/**
 * <p>Retrieves a list of certificate ARNs and domain names. You can request that only
 *       certificates that match a specific status be listed. You can also filter by specific
 *       attributes of the certificate. Default filtering returns only <code>RSA_2048</code>
 *       certificates. For more information, see <a>Filters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListCertificatesCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListCertificatesCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCertificatesCommand extends $Command<
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
  ACMClientResolvedConfig
> {
  readonly input: ListCertificatesCommandInput;
  constructor(input: ListCertificatesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput>;
  private serialize;
  private deserialize;
}

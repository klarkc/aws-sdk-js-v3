import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { Configuration, GetConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetConfigurationCommandInput extends GetConfigurationRequest {}
export interface GetConfigurationCommandOutput extends Configuration, __MetadataBearer {}
/**
 * <p>Receive information about a configuration.</p>
 *          <important>
 *             <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter
 *             to identify the configuration version on your clients. If you don’t send
 *                <code>ClientConfigurationVersion</code> with each call to
 *                <code>GetConfiguration</code>, your clients receive the current configuration. You
 *             are charged each time your clients receive a configuration.</p>
 *             <p>To avoid excess charges, we recommend that you include the
 *                <code>ClientConfigurationVersion</code> value with every call to
 *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
 *             calls to <code>GetConfiguration</code> must pass this value by using the
 *                <code>ClientConfigurationVersion</code> parameter. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConfigurationCommand extends $Command<
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: GetConfigurationCommandInput;
  constructor(input: GetConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationCommandInput, GetConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}

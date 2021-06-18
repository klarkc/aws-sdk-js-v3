import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { GetHostedConfigurationVersionRequest, HostedConfigurationVersion } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetHostedConfigurationVersionCommandInput extends GetHostedConfigurationVersionRequest {}
export interface GetHostedConfigurationVersionCommandOutput extends HostedConfigurationVersion, __MetadataBearer {}
/**
 * <p>Get information about a specific configuration version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link GetHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostedConfigurationVersionCommand extends $Command<
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: GetHostedConfigurationVersionCommandInput;
  constructor(input: GetHostedConfigurationVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedConfigurationVersionCommandInput, GetHostedConfigurationVersionCommandOutput>;
  private serialize;
  private deserialize;
}

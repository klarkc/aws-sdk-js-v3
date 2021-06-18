import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { ConfigurationProfile, CreateConfigurationProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateConfigurationProfileCommandInput extends CreateConfigurationProfileRequest {}
export interface CreateConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}
/**
 * <p>Information that enables AppConfig to access the configuration source. Valid
 *          configuration sources include Systems Manager (SSM) documents, SSM Parameter Store parameters, and
 *          Amazon S3 objects. A configuration profile includes the following information.</p>
 *          <ul>
 *             <li>
 *                <p>The Uri location of the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>The AWS Identity and Access Management (IAM) role that provides access to the configuration data.</p>
 *             </li>
 *             <li>
 *                <p>A validator for the configuration data. Available validators include either a JSON
 *                Schema or an AWS Lambda function.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
 *             Configuration and a Configuration Profile</a> in the
 *             <i>AWS AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationProfileCommand extends $Command<
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: CreateConfigurationProfileCommandInput;
  constructor(input: CreateConfigurationProfileCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationProfileCommandInput, CreateConfigurationProfileCommandOutput>;
  private serialize;
  private deserialize;
}

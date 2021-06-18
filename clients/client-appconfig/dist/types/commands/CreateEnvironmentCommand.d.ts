import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { CreateEnvironmentRequest, Environment } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {}
export interface CreateEnvironmentCommandOutput extends Environment, __MetadataBearer {}
/**
 * <p>For each application, you define one or more environments. An environment is a logical
 *          deployment group of AppConfig targets, such as applications in a <code>Beta</code> or
 *             <code>Production</code> environment. You can also define environments for application
 *          subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code>
 *          components for your application. You can configure Amazon CloudWatch alarms for each environment.
 *          The system monitors alarms during a configuration deployment. If an alarm is triggered, the
 *          system rolls back the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateEnvironmentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateEnvironmentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEnvironmentCommand extends $Command<
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: CreateEnvironmentCommandInput;
  constructor(input: CreateEnvironmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput>;
  private serialize;
  private deserialize;
}

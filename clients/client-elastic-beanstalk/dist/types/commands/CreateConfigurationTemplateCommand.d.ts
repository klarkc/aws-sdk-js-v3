import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigurationTemplateCommandInput extends CreateConfigurationTemplateMessage {
}
export interface CreateConfigurationTemplateCommandOutput extends ConfigurationSettingsDescription, __MetadataBearer {
}
/**
 * <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk
 *       application. You define application configuration settings in a configuration template. You
 *       can then use the configuration template to deploy different versions of the application with
 *       the same configuration settings.</p>
 *          <p>Templates aren't associated with any environment. The <code>EnvironmentName</code>
 *       response element is always <code>null</code>.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationOptions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationSettings</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAvailableSolutionStacks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationTemplateCommand extends $Command<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateConfigurationTemplateCommandInput;
    constructor(input: CreateConfigurationTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

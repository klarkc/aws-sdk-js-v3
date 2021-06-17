import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, UpdateEnvironmentMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentMessage {
}
export interface UpdateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {
}
/**
 * <p>Updates the environment description, deploys a new application version, updates the
 *       configuration settings to an entirely new configuration template, or updates select
 *       configuration option values in the running environment.</p>
 *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
 *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
 *          <p> When updating the configuration settings to a new template or individual settings, a
 *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
 *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
 *       values. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEnvironmentCommand extends $Command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateEnvironmentCommandInput;
    constructor(input: UpdateEnvironmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}

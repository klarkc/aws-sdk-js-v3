import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigurationOptionsCommandInput extends DescribeConfigurationOptionsMessage {
}
export interface DescribeConfigurationOptionsCommandOutput extends ConfigurationOptionsDescription, __MetadataBearer {
}
/**
 * <p>Describes the configuration options that are used in a particular configuration
 *       template or environment, or that a specified solution stack defines. The description includes
 *       the values the options, their default values, and an indication of the required action on a
 *       running environment if an option value is changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigurationOptionsCommand extends $Command<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeConfigurationOptionsCommandInput;
    constructor(input: DescribeConfigurationOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput>;
    private serialize;
    private deserialize;
}

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeInstancesHealthRequest, DescribeInstancesHealthResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstancesHealthCommandInput extends DescribeInstancesHealthRequest {
}
export interface DescribeInstancesHealthCommandOutput extends DescribeInstancesHealthResult, __MetadataBearer {
}
/**
 * <p>Retrieves detailed information about the health of instances in your AWS Elastic
 *       Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health
 *       reporting</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeInstancesHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeInstancesHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeInstancesHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstancesHealthCommand extends $Command<DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeInstancesHealthCommandInput;
    constructor(input: DescribeInstancesHealthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput>;
    private serialize;
    private deserialize;
}

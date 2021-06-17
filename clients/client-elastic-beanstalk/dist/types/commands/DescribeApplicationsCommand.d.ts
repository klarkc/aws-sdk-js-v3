import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionsMessage, DescribeApplicationsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeApplicationsCommandInput extends DescribeApplicationsMessage {
}
export interface DescribeApplicationsCommandOutput extends ApplicationDescriptionsMessage, __MetadataBearer {
}
/**
 * <p>Returns the descriptions of existing applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeApplicationsCommand extends $Command<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeApplicationsCommandInput;
    constructor(input: DescribeApplicationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeApplicationVersionsCommandInput extends DescribeApplicationVersionsMessage {
}
export interface DescribeApplicationVersionsCommandOutput extends ApplicationVersionDescriptionsMessage, __MetadataBearer {
}
/**
 * <p>Retrieve a list of application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeApplicationVersionsCommand extends $Command<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeApplicationVersionsCommandInput;
    constructor(input: DescribeApplicationVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput>;
    private serialize;
    private deserialize;
}

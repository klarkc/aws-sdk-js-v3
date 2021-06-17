import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPlatformVersionsCommandInput extends ListPlatformVersionsRequest {
}
export interface ListPlatformVersionsCommandOutput extends ListPlatformVersionsResult, __MetadataBearer {
}
/**
 * <p>Lists the platform versions available for your account in an AWS Region. Provides
 *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
 *       version.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListPlatformVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPlatformVersionsCommand extends $Command<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ListPlatformVersionsCommandInput;
    constructor(input: ListPlatformVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput>;
    private serialize;
    private deserialize;
}

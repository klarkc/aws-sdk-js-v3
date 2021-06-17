import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ComposeEnvironmentsCommandInput extends ComposeEnvironmentsMessage {
}
export interface ComposeEnvironmentsCommandOutput extends EnvironmentDescriptionsMessage, __MetadataBearer {
}
/**
 * <p>Create or update a group of environments that each run a separate component of a single
 *       application. Takes a list of version labels that specify application source bundles for each
 *       of the environments to create or update. The name of each environment and other required
 *       information must be included in the source bundles in an environment manifest named
 *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
 *       for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ComposeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ComposeEnvironmentsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ComposeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ComposeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ComposeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ComposeEnvironmentsCommand extends $Command<ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ComposeEnvironmentsCommandInput;
    constructor(input: ComposeEnvironmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}

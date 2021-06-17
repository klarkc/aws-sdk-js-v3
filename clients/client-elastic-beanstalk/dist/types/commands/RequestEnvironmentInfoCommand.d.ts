import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RequestEnvironmentInfoMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RequestEnvironmentInfoCommandInput extends RequestEnvironmentInfoMessage {
}
export interface RequestEnvironmentInfoCommandOutput extends __MetadataBearer {
}
/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RequestEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RequestEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RequestEnvironmentInfoCommand extends $Command<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RequestEnvironmentInfoCommandInput;
    constructor(input: RequestEnvironmentInfoCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput>;
    private serialize;
    private deserialize;
}

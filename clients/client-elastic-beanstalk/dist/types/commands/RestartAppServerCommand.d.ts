import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RestartAppServerMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestartAppServerCommandInput extends RestartAppServerMessage {
}
export interface RestartAppServerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Causes the environment to restart the application container server running on each
 *       Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RestartAppServerCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RestartAppServerCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RestartAppServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestartAppServerCommandInput} for command's `input` shape.
 * @see {@link RestartAppServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestartAppServerCommand extends $Command<RestartAppServerCommandInput, RestartAppServerCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RestartAppServerCommandInput;
    constructor(input: RestartAppServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestartAppServerCommandInput, RestartAppServerCommandOutput>;
    private serialize;
    private deserialize;
}

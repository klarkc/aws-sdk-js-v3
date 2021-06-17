import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RebuildEnvironmentMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebuildEnvironmentCommandInput extends RebuildEnvironmentMessage {
}
export interface RebuildEnvironmentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
 *       load balancer, etc.) for a specified environment and forces a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RebuildEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RebuildEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RebuildEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebuildEnvironmentCommandInput} for command's `input` shape.
 * @see {@link RebuildEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebuildEnvironmentCommand extends $Command<RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: RebuildEnvironmentCommandInput;
    constructor(input: RebuildEnvironmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}

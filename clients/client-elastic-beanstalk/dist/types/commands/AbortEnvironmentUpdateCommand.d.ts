import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { AbortEnvironmentUpdateMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AbortEnvironmentUpdateCommandInput extends AbortEnvironmentUpdateMessage {
}
export interface AbortEnvironmentUpdateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels in-progress environment configuration update or application version
 *       deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortEnvironmentUpdateCommandInput} for command's `input` shape.
 * @see {@link AbortEnvironmentUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AbortEnvironmentUpdateCommand extends $Command<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: AbortEnvironmentUpdateCommandInput;
    constructor(input: AbortEnvironmentUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput>;
    private serialize;
    private deserialize;
}

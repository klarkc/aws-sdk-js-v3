import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, TerminateEnvironmentMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateEnvironmentCommandInput extends TerminateEnvironmentMessage {
}
export interface TerminateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {
}
/**
 * <p>Terminates the specified environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, TerminateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, TerminateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new TerminateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link TerminateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateEnvironmentCommand extends $Command<TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: TerminateEnvironmentCommandInput;
    constructor(input: TerminateEnvironmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}

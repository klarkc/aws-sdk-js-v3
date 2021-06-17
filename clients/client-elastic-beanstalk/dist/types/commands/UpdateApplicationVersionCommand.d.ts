import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionMessage, UpdateApplicationVersionMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApplicationVersionCommandInput extends UpdateApplicationVersionMessage {
}
export interface UpdateApplicationVersionCommandOutput extends ApplicationVersionDescriptionMessage, __MetadataBearer {
}
/**
 * <p>Updates the specified application version to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApplicationVersionCommand extends $Command<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateApplicationVersionCommandInput;
    constructor(input: UpdateApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}

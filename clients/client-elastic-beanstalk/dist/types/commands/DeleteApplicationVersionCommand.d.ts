import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteApplicationVersionMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApplicationVersionCommandInput extends DeleteApplicationVersionMessage {
}
export interface DeleteApplicationVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified version from the specified application.</p>
 *          <note>
 *             <p>You cannot delete an application version that is associated with a running
 *         environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApplicationVersionCommand extends $Command<DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteApplicationVersionCommandInput;
    constructor(input: DeleteApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}

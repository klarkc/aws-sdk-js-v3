import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteApplicationMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteApplicationCommandInput extends DeleteApplicationMessage {
}
export interface DeleteApplicationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified application along with all associated versions and
 *       configurations. The application versions will not be deleted from your Amazon S3
 *       bucket.</p>
 *          <note>
 *             <p>You cannot delete an application that has a running environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApplicationCommand extends $Command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteApplicationCommandInput;
    constructor(input: DeleteApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>;
    private serialize;
    private deserialize;
}

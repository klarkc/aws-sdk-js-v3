import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListAvailableSolutionStacksResultMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAvailableSolutionStacksCommandInput {
}
export interface ListAvailableSolutionStacksCommandOutput extends ListAvailableSolutionStacksResultMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of the available solution stack names, with the public version first and
 *       then in reverse chronological order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListAvailableSolutionStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableSolutionStacksCommandInput} for command's `input` shape.
 * @see {@link ListAvailableSolutionStacksCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAvailableSolutionStacksCommand extends $Command<ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ListAvailableSolutionStacksCommandInput;
    constructor(input: ListAvailableSolutionStacksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput>;
    private serialize;
    private deserialize;
}

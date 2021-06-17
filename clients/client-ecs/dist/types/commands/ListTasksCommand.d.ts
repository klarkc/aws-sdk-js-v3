import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTasksRequest, ListTasksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTasksCommandInput extends ListTasksRequest {
}
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of tasks. You can filter the results by cluster, task definition
 * 			family, container instance, launch type, what IAM principal started the task, or by the
 * 			desired status of the task.</p>
 * 		       <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks
 * 			appear in the returned results for at least one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTasksCommand extends $Command<ListTasksCommandInput, ListTasksCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListTasksCommandInput;
    constructor(input: ListTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTasksCommandInput, ListTasksCommandOutput>;
    private serialize;
    private deserialize;
}

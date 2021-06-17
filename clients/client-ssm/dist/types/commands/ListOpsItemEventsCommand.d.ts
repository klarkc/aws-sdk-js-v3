import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOpsItemEventsCommandInput extends ListOpsItemEventsRequest {
}
export interface ListOpsItemEventsCommandOutput extends ListOpsItemEventsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all OpsItem events in the current AWS account and Region. You can limit
 *    the results to events associated with specific OpsItems by specifying a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemEventsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemEventsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOpsItemEventsCommand extends $Command<ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListOpsItemEventsCommandInput;
    constructor(input: ListOpsItemEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput>;
    private serialize;
    private deserialize;
}

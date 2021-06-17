import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { ListTagsLogGroupRequest, ListTagsLogGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsLogGroupCommandInput extends ListTagsLogGroupRequest {
}
export interface ListTagsLogGroupCommandOutput extends ListTagsLogGroupResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags for the specified log group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListTagsLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListTagsLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new ListTagsLogGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsLogGroupCommandInput} for command's `input` shape.
 * @see {@link ListTagsLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsLogGroupCommand extends $Command<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: ListTagsLogGroupCommandInput;
    constructor(input: ListTagsLogGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}

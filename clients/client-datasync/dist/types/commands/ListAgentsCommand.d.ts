import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAgentsCommandInput extends ListAgentsRequest {
}
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the
 *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
 *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
 *       pagination that enables you to optionally reduce the number of agents returned in a
 *       response.</p>
 *          <p>If you have more agents than are returned in a response (that is, the response returns
 *       only a truncated list of your agents), the response contains a marker that you can specify in
 *       your next request to fetch the next page of agents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListAgentsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListAgentsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAgentsCommand extends $Command<ListAgentsCommandInput, ListAgentsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: ListAgentsCommandInput;
    constructor(input: ListAgentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAgentsCommandInput, ListAgentsCommandOutput>;
    private serialize;
    private deserialize;
}

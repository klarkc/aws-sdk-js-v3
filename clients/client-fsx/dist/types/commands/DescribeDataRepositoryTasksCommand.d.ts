import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataRepositoryTasksCommandInput extends DescribeDataRepositoryTasksRequest {
}
export interface DescribeDataRepositoryTasksCommandOutput extends DescribeDataRepositoryTasksResponse, __MetadataBearer {
}
/**
 * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your AWS account in the AWS Region of the endpoint that you're calling.</p>
 *
 *         <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon
 *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryTasksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryTasksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeDataRepositoryTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataRepositoryTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryTasksCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataRepositoryTasksCommand extends $Command<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput, FSxClientResolvedConfig> {
    readonly input: DescribeDataRepositoryTasksCommandInput;
    constructor(input: DescribeDataRepositoryTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput>;
    private serialize;
    private deserialize;
}

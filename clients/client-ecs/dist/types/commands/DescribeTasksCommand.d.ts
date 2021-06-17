import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTasksRequest, DescribeTasksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTasksCommandInput extends DescribeTasksRequest {
}
export interface DescribeTasksCommandOutput extends DescribeTasksResponse, __MetadataBearer {
}
/**
 * <p>Describes a specified task or tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTasksCommand extends $Command<DescribeTasksCommandInput, DescribeTasksCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeTasksCommandInput;
    constructor(input: DescribeTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTasksCommandInput, DescribeTasksCommandOutput>;
    private serialize;
    private deserialize;
}

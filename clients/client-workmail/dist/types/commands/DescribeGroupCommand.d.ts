import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGroupCommandInput extends DescribeGroupRequest {
}
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns the data available for the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGroupCommand extends $Command<DescribeGroupCommandInput, DescribeGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeGroupCommandInput;
    constructor(input: DescribeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGroupCommandInput, DescribeGroupCommandOutput>;
    private serialize;
    private deserialize;
}

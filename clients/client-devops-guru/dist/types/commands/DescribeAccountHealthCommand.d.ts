import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeAccountHealthRequest, DescribeAccountHealthResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountHealthCommandInput extends DescribeAccountHealthRequest {
}
export interface DescribeAccountHealthCommandOutput extends DescribeAccountHealthResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account.
 *    		Use these numbers to gauge the health of operations in your AWS account.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountHealthCommand extends $Command<DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeAccountHealthCommandInput;
    constructor(input: DescribeAccountHealthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput>;
    private serialize;
    private deserialize;
}

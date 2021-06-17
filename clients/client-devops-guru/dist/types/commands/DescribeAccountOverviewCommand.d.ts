import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeAccountOverviewRequest, DescribeAccountOverviewResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountOverviewCommandInput extends DescribeAccountOverviewRequest {
}
export interface DescribeAccountOverviewCommandOutput extends DescribeAccountOverviewResponse, __MetadataBearer {
}
/**
 * <p>
 *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
 *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountOverviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountOverviewCommand extends $Command<DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeAccountOverviewCommandInput;
    constructor(input: DescribeAccountOverviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput>;
    private serialize;
    private deserialize;
}

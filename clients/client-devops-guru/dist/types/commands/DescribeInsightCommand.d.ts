import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeInsightRequest, DescribeInsightResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInsightCommandInput extends DescribeInsightRequest {
}
export interface DescribeInsightCommandOutput extends DescribeInsightResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns details about an insight that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInsightCommand extends $Command<DescribeInsightCommandInput, DescribeInsightCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeInsightCommandInput;
    constructor(input: DescribeInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInsightCommandInput, DescribeInsightCommandOutput>;
    private serialize;
    private deserialize;
}

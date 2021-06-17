import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeAnomalyRequest, DescribeAnomalyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAnomalyCommandInput extends DescribeAnomalyRequest {
}
export interface DescribeAnomalyCommandOutput extends DescribeAnomalyResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns details about an anomaly that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAnomalyCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAnomalyCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAnomalyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAnomalyCommand extends $Command<DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeAnomalyCommandInput;
    constructor(input: DescribeAnomalyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput>;
    private serialize;
    private deserialize;
}

import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetOpsSummaryResult } from "../models/models_1";
import { GetOpsSummaryRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOpsSummaryCommandInput extends GetOpsSummaryRequest {
}
export interface GetOpsSummaryCommandOutput extends GetOpsSummaryResult, __MetadataBearer {
}
/**
 * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOpsSummaryCommand extends $Command<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetOpsSummaryCommandInput;
    constructor(input: GetOpsSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput>;
    private serialize;
    private deserialize;
}

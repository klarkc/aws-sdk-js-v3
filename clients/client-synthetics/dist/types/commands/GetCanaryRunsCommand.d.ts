import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { GetCanaryRunsRequest, GetCanaryRunsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCanaryRunsCommandInput extends GetCanaryRunsRequest {
}
export interface GetCanaryRunsCommandOutput extends GetCanaryRunsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of runs for a specified canary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryRunsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryRunsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new GetCanaryRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCanaryRunsCommandInput} for command's `input` shape.
 * @see {@link GetCanaryRunsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCanaryRunsCommand extends $Command<GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: GetCanaryRunsCommandInput;
    constructor(input: GetCanaryRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput>;
    private serialize;
    private deserialize;
}

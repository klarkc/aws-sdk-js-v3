import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { GetCanaryRequest, GetCanaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCanaryCommandInput extends GetCanaryRequest {
}
export interface GetCanaryCommandOutput extends GetCanaryResponse, __MetadataBearer {
}
/**
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new GetCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCanaryCommandInput} for command's `input` shape.
 * @see {@link GetCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCanaryCommand extends $Command<GetCanaryCommandInput, GetCanaryCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: GetCanaryCommandInput;
    constructor(input: GetCanaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCanaryCommandInput, GetCanaryCommandOutput>;
    private serialize;
    private deserialize;
}

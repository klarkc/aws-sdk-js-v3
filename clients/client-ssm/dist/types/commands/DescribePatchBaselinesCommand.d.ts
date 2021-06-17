import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePatchBaselinesCommandInput extends DescribePatchBaselinesRequest {
}
export interface DescribePatchBaselinesCommandOutput extends DescribePatchBaselinesResult, __MetadataBearer {
}
/**
 * <p>Lists the patch baselines in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchBaselinesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchBaselinesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchBaselinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchBaselinesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchBaselinesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePatchBaselinesCommand extends $Command<DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchBaselinesCommandInput;
    constructor(input: DescribePatchBaselinesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput>;
    private serialize;
    private deserialize;
}

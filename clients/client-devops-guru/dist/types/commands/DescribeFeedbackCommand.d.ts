import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeFeedbackRequest, DescribeFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFeedbackCommandInput extends DescribeFeedbackRequest {
}
export interface DescribeFeedbackCommandOutput extends DescribeFeedbackResponse, __MetadataBearer {
}
/**
 * <p>
 * 			Returns the most recent feedback submitted in the current AWS account and Region.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFeedbackCommand extends $Command<DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: DescribeFeedbackCommandInput;
    constructor(input: DescribeFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

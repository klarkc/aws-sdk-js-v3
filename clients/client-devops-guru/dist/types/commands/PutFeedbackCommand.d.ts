import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFeedbackCommandInput extends PutFeedbackRequest {
}
export interface PutFeedbackCommandOutput extends PutFeedbackResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Collects customer feedback about the specified insight.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, PutFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, PutFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFeedbackCommand extends $Command<PutFeedbackCommandInput, PutFeedbackCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: PutFeedbackCommandInput;
    constructor(input: PutFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFeedbackCommandInput, PutFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

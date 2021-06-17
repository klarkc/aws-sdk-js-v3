import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { SubmitFeedbackRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SubmitFeedbackCommandInput extends SubmitFeedbackRequest {
}
export interface SubmitFeedbackCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables you to provide feedback to Amazon Kendra to improve the
 *             performance of the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, SubmitFeedbackCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, SubmitFeedbackCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SubmitFeedbackCommand extends $Command<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput, KendraClientResolvedConfig> {
    readonly input: SubmitFeedbackCommandInput;
    constructor(input: SubmitFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

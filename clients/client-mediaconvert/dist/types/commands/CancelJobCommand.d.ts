import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { CancelJobRequest, CancelJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelJobCommandInput extends CancelJobRequest {
}
export interface CancelJobCommandOutput extends CancelJobResponse, __MetadataBearer {
}
/**
 * Permanently cancel a job. Once you have canceled a job, you can't start it again.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CancelJobCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CancelJobCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelJobCommand extends $Command<CancelJobCommandInput, CancelJobCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: CancelJobCommandInput;
    constructor(input: CancelJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelJobCommandInput, CancelJobCommandOutput>;
    private serialize;
    private deserialize;
}

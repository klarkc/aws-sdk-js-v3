import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelWorldGenerationJobRequest, CancelWorldGenerationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelWorldGenerationJobCommandInput extends CancelWorldGenerationJobRequest {
}
export interface CancelWorldGenerationJobCommandOutput extends CancelWorldGenerationJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified world generator job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CancelWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelWorldGenerationJobCommand extends $Command<CancelWorldGenerationJobCommandInput, CancelWorldGenerationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CancelWorldGenerationJobCommandInput;
    constructor(input: CancelWorldGenerationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelWorldGenerationJobCommandInput, CancelWorldGenerationJobCommandOutput>;
    private serialize;
    private deserialize;
}

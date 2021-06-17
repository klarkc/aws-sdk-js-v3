import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelWorldExportJobRequest, CancelWorldExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelWorldExportJobCommandInput extends CancelWorldExportJobRequest {
}
export interface CancelWorldExportJobCommandOutput extends CancelWorldExportJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelWorldExportJobCommand extends $Command<CancelWorldExportJobCommandInput, CancelWorldExportJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CancelWorldExportJobCommandInput;
    constructor(input: CancelWorldExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelWorldExportJobCommandInput, CancelWorldExportJobCommandOutput>;
    private serialize;
    private deserialize;
}

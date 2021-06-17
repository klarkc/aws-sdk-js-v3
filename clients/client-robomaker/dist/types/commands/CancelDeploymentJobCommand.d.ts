import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelDeploymentJobRequest, CancelDeploymentJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelDeploymentJobCommandInput extends CancelDeploymentJobRequest {
}
export interface CancelDeploymentJobCommandOutput extends CancelDeploymentJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified deployment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link CancelDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelDeploymentJobCommand extends $Command<CancelDeploymentJobCommandInput, CancelDeploymentJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CancelDeploymentJobCommandInput;
    constructor(input: CancelDeploymentJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelDeploymentJobCommandInput, CancelDeploymentJobCommandOutput>;
    private serialize;
    private deserialize;
}

import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { SyncDeploymentJobRequest, SyncDeploymentJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SyncDeploymentJobCommandInput extends SyncDeploymentJobRequest {
}
export interface SyncDeploymentJobCommandOutput extends SyncDeploymentJobResponse, __MetadataBearer {
}
/**
 * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were
 *          added after a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, SyncDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, SyncDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new SyncDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SyncDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link SyncDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SyncDeploymentJobCommand extends $Command<SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: SyncDeploymentJobCommandInput;
    constructor(input: SyncDeploymentJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput>;
    private serialize;
    private deserialize;
}

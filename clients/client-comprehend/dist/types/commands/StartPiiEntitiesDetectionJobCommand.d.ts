import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartPiiEntitiesDetectionJobRequest, StartPiiEntitiesDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartPiiEntitiesDetectionJobCommandInput extends StartPiiEntitiesDetectionJobRequest {
}
export interface StartPiiEntitiesDetectionJobCommandOutput extends StartPiiEntitiesDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous PII entity detection job for a collection of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartPiiEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartPiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartPiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartPiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartPiiEntitiesDetectionJobCommand extends $Command<StartPiiEntitiesDetectionJobCommandInput, StartPiiEntitiesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartPiiEntitiesDetectionJobCommandInput;
    constructor(input: StartPiiEntitiesDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPiiEntitiesDetectionJobCommandInput, StartPiiEntitiesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}

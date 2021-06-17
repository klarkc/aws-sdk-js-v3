import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateWorldGenerationJobRequest, CreateWorldGenerationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorldGenerationJobCommandInput extends CreateWorldGenerationJobRequest {
}
export interface CreateWorldGenerationJobCommandOutput extends CreateWorldGenerationJobResponse, __MetadataBearer {
}
/**
 * <p>Creates worlds using the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorldGenerationJobCommand extends $Command<CreateWorldGenerationJobCommandInput, CreateWorldGenerationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateWorldGenerationJobCommandInput;
    constructor(input: CreateWorldGenerationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorldGenerationJobCommandInput, CreateWorldGenerationJobCommandOutput>;
    private serialize;
    private deserialize;
}

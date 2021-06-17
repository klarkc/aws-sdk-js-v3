import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateWorldExportJobRequest, CreateWorldExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorldExportJobCommandInput extends CreateWorldExportJobRequest {
}
export interface CreateWorldExportJobCommandOutput extends CreateWorldExportJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorldExportJobCommand extends $Command<CreateWorldExportJobCommandInput, CreateWorldExportJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateWorldExportJobCommandInput;
    constructor(input: CreateWorldExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorldExportJobCommandInput, CreateWorldExportJobCommandOutput>;
    private serialize;
    private deserialize;
}

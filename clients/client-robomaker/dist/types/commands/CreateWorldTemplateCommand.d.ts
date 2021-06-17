import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateWorldTemplateRequest, CreateWorldTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorldTemplateCommandInput extends CreateWorldTemplateRequest {
}
export interface CreateWorldTemplateCommandOutput extends CreateWorldTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorldTemplateCommand extends $Command<CreateWorldTemplateCommandInput, CreateWorldTemplateCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: CreateWorldTemplateCommandInput;
    constructor(input: CreateWorldTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorldTemplateCommandInput, CreateWorldTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

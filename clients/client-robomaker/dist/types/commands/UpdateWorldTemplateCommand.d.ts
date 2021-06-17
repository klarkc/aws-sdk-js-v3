import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { UpdateWorldTemplateRequest, UpdateWorldTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorldTemplateCommandInput extends UpdateWorldTemplateRequest {
}
export interface UpdateWorldTemplateCommandOutput extends UpdateWorldTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorldTemplateCommand extends $Command<UpdateWorldTemplateCommandInput, UpdateWorldTemplateCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: UpdateWorldTemplateCommandInput;
    constructor(input: UpdateWorldTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorldTemplateCommandInput, UpdateWorldTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

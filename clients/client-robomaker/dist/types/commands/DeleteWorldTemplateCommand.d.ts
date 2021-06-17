import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DeleteWorldTemplateRequest, DeleteWorldTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorldTemplateCommandInput extends DeleteWorldTemplateRequest {
}
export interface DeleteWorldTemplateCommandOutput extends DeleteWorldTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorldTemplateCommand extends $Command<DeleteWorldTemplateCommandInput, DeleteWorldTemplateCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DeleteWorldTemplateCommandInput;
    constructor(input: DeleteWorldTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorldTemplateCommandInput, DeleteWorldTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { RenderUiTemplateRequest, RenderUiTemplateResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RenderUiTemplateCommandInput extends RenderUiTemplateRequest {
}
export interface RenderUiTemplateCommandOutput extends RenderUiTemplateResponse, __MetadataBearer {
}
/**
 * <p>Renders the UI template so that you can preview the worker's experience. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RenderUiTemplateCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RenderUiTemplateCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RenderUiTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenderUiTemplateCommandInput} for command's `input` shape.
 * @see {@link RenderUiTemplateCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RenderUiTemplateCommand extends $Command<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: RenderUiTemplateCommandInput;
    constructor(input: RenderUiTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

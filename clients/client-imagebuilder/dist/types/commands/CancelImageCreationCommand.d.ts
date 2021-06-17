import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CancelImageCreationRequest, CancelImageCreationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelImageCreationCommandInput extends CancelImageCreationRequest {
}
export interface CancelImageCreationCommandOutput extends CancelImageCreationResponse, __MetadataBearer {
}
/**
 * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on
 *       images in a non-terminal state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelImageCreationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImageCreationCommandInput} for command's `input` shape.
 * @see {@link CancelImageCreationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelImageCreationCommand extends $Command<CancelImageCreationCommandInput, CancelImageCreationCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CancelImageCreationCommandInput;
    constructor(input: CancelImageCreationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelImageCreationCommandInput, CancelImageCreationCommandOutput>;
    private serialize;
    private deserialize;
}

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContainerImageRequest, DeleteContainerImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContainerImageCommandInput extends DeleteContainerImageRequest {
}
export interface DeleteContainerImageCommandOutput extends DeleteContainerImageResult, __MetadataBearer {
}
/**
 * <p>Deletes a container image that is registered to your Amazon Lightsail container
 *       service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContainerImageCommand extends $Command<DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteContainerImageCommandInput;
    constructor(input: DeleteContainerImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput>;
    private serialize;
    private deserialize;
}

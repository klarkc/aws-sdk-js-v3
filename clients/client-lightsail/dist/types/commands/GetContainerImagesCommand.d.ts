import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerImagesRequest, GetContainerImagesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerImagesCommandInput extends GetContainerImagesRequest {
}
export interface GetContainerImagesCommandOutput extends GetContainerImagesResult, __MetadataBearer {
}
/**
 * <p>Returns the container images that are registered to your Amazon Lightsail container
 *       service.</p>
 *
 *          <note>
 *             <p>If you created a deployment on your Lightsail container service that uses container
 *         images from a public registry like Docker Hub, those images are not returned as part of this
 *         action. Those images are not registered to your Lightsail container service.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerImagesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerImagesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerImagesCommandInput} for command's `input` shape.
 * @see {@link GetContainerImagesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerImagesCommand extends $Command<GetContainerImagesCommandInput, GetContainerImagesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerImagesCommandInput;
    constructor(input: GetContainerImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerImagesCommandInput, GetContainerImagesCommandOutput>;
    private serialize;
    private deserialize;
}

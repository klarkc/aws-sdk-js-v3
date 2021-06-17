import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RegisterContainerImageRequest, RegisterContainerImageResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterContainerImageCommandInput extends RegisterContainerImageRequest {
}
export interface RegisterContainerImageCommandOutput extends RegisterContainerImageResult, __MetadataBearer {
}
/**
 * <p>Registers a container image to your Amazon Lightsail container service.</p>
 *
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Lightsail Dev Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RegisterContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RegisterContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RegisterContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterContainerImageCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterContainerImageCommand extends $Command<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput, LightsailClientResolvedConfig> {
    readonly input: RegisterContainerImageCommandInput;
    constructor(input: RegisterContainerImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput>;
    private serialize;
    private deserialize;
}

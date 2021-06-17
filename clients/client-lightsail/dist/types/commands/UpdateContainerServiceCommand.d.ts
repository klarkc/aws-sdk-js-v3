import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateContainerServiceRequest, UpdateContainerServiceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateContainerServiceCommandInput extends UpdateContainerServiceRequest {
}
export interface UpdateContainerServiceCommandOutput extends UpdateContainerServiceResult, __MetadataBearer {
}
/**
 * <p>Updates the configuration of your Amazon Lightsail container service, such as its power,
 *       scale, and public domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateContainerServiceCommand extends $Command<UpdateContainerServiceCommandInput, UpdateContainerServiceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateContainerServiceCommandInput;
    constructor(input: UpdateContainerServiceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContainerServiceCommandInput, UpdateContainerServiceCommandOutput>;
    private serialize;
    private deserialize;
}

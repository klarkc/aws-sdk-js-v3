import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ContainerServicesListResult, GetContainerServicesRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerServicesCommandInput extends GetContainerServicesRequest {
}
export interface GetContainerServicesCommandOutput extends ContainerServicesListResult, __MetadataBearer {
}
/**
 * <p>Returns information about one or more of your Amazon Lightsail container services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServicesCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerServicesCommand extends $Command<GetContainerServicesCommandInput, GetContainerServicesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerServicesCommandInput;
    constructor(input: GetContainerServicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerServicesCommandInput, GetContainerServicesCommandOutput>;
    private serialize;
    private deserialize;
}

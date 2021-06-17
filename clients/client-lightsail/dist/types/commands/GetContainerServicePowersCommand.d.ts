import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServicePowersRequest, GetContainerServicePowersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerServicePowersCommandInput extends GetContainerServicePowersRequest {
}
export interface GetContainerServicePowersCommandOutput extends GetContainerServicePowersResult, __MetadataBearer {
}
/**
 * <p>Returns the list of powers that can be specified for your Amazon Lightsail container
 *       services.</p>
 *
 *          <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the
 *       container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicePowersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicePowersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServicePowersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServicePowersCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicePowersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerServicePowersCommand extends $Command<GetContainerServicePowersCommandInput, GetContainerServicePowersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerServicePowersCommandInput;
    constructor(input: GetContainerServicePowersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerServicePowersCommandInput, GetContainerServicePowersCommandOutput>;
    private serialize;
    private deserialize;
}

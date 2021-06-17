import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRegionsRequest, GetRegionsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRegionsCommandInput extends GetRegionsRequest {
}
export interface GetRegionsCommandOutput extends GetRegionsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include
 *         availability zones</code> parameter to also return the Availability Zones in a
 *       region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRegionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRegionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegionsCommandInput} for command's `input` shape.
 * @see {@link GetRegionsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRegionsCommand extends $Command<GetRegionsCommandInput, GetRegionsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRegionsCommandInput;
    constructor(input: GetRegionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegionsCommandInput, GetRegionsCommandOutput>;
    private serialize;
    private deserialize;
}

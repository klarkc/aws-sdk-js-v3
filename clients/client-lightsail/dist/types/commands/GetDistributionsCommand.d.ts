import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionsRequest, GetDistributionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDistributionsCommandInput extends GetDistributionsRequest {
}
export interface GetDistributionsCommandOutput extends GetDistributionsResult, __MetadataBearer {
}
/**
 * <p>Returns information about one or more of your Amazon Lightsail content delivery network
 *       (CDN) distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionsCommandInput} for command's `input` shape.
 * @see {@link GetDistributionsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDistributionsCommand extends $Command<GetDistributionsCommandInput, GetDistributionsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDistributionsCommandInput;
    constructor(input: GetDistributionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionsCommandInput, GetDistributionsCommandOutput>;
    private serialize;
    private deserialize;
}

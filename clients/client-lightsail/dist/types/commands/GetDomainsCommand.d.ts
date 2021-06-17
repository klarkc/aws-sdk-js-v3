import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDomainsRequest, GetDomainsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDomainsCommandInput extends GetDomainsRequest {
}
export interface GetDomainsCommandOutput extends GetDomainsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of all domains in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDomainsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDomainsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainsCommandInput} for command's `input` shape.
 * @see {@link GetDomainsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDomainsCommand extends $Command<GetDomainsCommandInput, GetDomainsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDomainsCommandInput;
    constructor(input: GetDomainsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainsCommandInput, GetDomainsCommandOutput>;
    private serialize;
    private deserialize;
}

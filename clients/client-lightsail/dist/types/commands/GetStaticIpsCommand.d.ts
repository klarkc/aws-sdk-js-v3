import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetStaticIpsRequest, GetStaticIpsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStaticIpsCommandInput extends GetStaticIpsRequest {
}
export interface GetStaticIpsCommandOutput extends GetStaticIpsResult, __MetadataBearer {
}
/**
 * <p>Returns information about all static IPs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetStaticIpsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetStaticIpsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetStaticIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStaticIpsCommandInput} for command's `input` shape.
 * @see {@link GetStaticIpsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStaticIpsCommand extends $Command<GetStaticIpsCommandInput, GetStaticIpsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetStaticIpsCommandInput;
    constructor(input: GetStaticIpsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStaticIpsCommandInput, GetStaticIpsCommandOutput>;
    private serialize;
    private deserialize;
}

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetKeyPairsRequest, GetKeyPairsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetKeyPairsCommandInput extends GetKeyPairsRequest {
}
export interface GetKeyPairsCommandOutput extends GetKeyPairsResult, __MetadataBearer {
}
/**
 * <p>Returns information about all key pairs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetKeyPairsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetKeyPairsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPairsCommandInput} for command's `input` shape.
 * @see {@link GetKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKeyPairsCommand extends $Command<GetKeyPairsCommandInput, GetKeyPairsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetKeyPairsCommandInput;
    constructor(input: GetKeyPairsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPairsCommandInput, GetKeyPairsCommandOutput>;
    private serialize;
    private deserialize;
}

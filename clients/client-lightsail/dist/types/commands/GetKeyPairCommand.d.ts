import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetKeyPairRequest, GetKeyPairResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetKeyPairCommandInput extends GetKeyPairRequest {
}
export interface GetKeyPairCommandOutput extends GetKeyPairResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific key pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPairCommandInput} for command's `input` shape.
 * @see {@link GetKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKeyPairCommand extends $Command<GetKeyPairCommandInput, GetKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetKeyPairCommandInput;
    constructor(input: GetKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPairCommandInput, GetKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}

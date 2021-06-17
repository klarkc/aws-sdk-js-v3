import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationsForResourceRequest, GetOperationsForResourceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOperationsForResourceCommandInput extends GetOperationsForResourceRequest {
}
export interface GetOperationsForResourceCommandOutput extends GetOperationsForResourceResult, __MetadataBearer {
}
/**
 * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationsForResourceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationsForResourceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetOperationsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationsForResourceCommandInput} for command's `input` shape.
 * @see {@link GetOperationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOperationsForResourceCommand extends $Command<GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetOperationsForResourceCommandInput;
    constructor(input: GetOperationsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}

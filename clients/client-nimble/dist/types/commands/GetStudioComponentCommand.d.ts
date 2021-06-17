import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStudioComponentRequest, GetStudioComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStudioComponentCommandInput extends GetStudioComponentRequest {
}
export interface GetStudioComponentCommandOutput extends GetStudioComponentResponse, __MetadataBearer {
}
/**
 * <p>Gets a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioComponentCommandInput} for command's `input` shape.
 * @see {@link GetStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStudioComponentCommand extends $Command<GetStudioComponentCommandInput, GetStudioComponentCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetStudioComponentCommandInput;
    constructor(input: GetStudioComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStudioComponentCommandInput, GetStudioComponentCommandOutput>;
    private serialize;
    private deserialize;
}

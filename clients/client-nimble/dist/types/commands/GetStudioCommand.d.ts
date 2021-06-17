import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStudioRequest, GetStudioResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStudioCommandInput extends GetStudioRequest {
}
export interface GetStudioCommandOutput extends GetStudioResponse, __MetadataBearer {
}
/**
 * <p>Get a Studio resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioCommandInput} for command's `input` shape.
 * @see {@link GetStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStudioCommand extends $Command<GetStudioCommandInput, GetStudioCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetStudioCommandInput;
    constructor(input: GetStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStudioCommandInput, GetStudioCommandOutput>;
    private serialize;
    private deserialize;
}

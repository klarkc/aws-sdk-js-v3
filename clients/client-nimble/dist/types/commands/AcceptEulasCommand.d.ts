import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { AcceptEulasRequest, AcceptEulasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptEulasCommandInput extends AcceptEulasRequest {
}
export interface AcceptEulasCommandOutput extends AcceptEulasResponse, __MetadataBearer {
}
/**
 * <p>Accept EULAs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, AcceptEulasCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, AcceptEulasCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new AcceptEulasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptEulasCommandInput} for command's `input` shape.
 * @see {@link AcceptEulasCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptEulasCommand extends $Command<AcceptEulasCommandInput, AcceptEulasCommandOutput, NimbleClientResolvedConfig> {
    readonly input: AcceptEulasCommandInput;
    constructor(input: AcceptEulasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptEulasCommandInput, AcceptEulasCommandOutput>;
    private serialize;
    private deserialize;
}

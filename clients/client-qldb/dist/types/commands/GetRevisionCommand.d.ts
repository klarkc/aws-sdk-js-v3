import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { GetRevisionRequest, GetRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRevisionCommandInput extends GetRevisionRequest {
}
export interface GetRevisionCommandOutput extends GetRevisionResponse, __MetadataBearer {
}
/**
 * <p>Returns a revision data object for a specified document ID and block address. Also
 *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
 *          is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetRevisionCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetRevisionCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRevisionCommand extends $Command<GetRevisionCommandInput, GetRevisionCommandOutput, QLDBClientResolvedConfig> {
    readonly input: GetRevisionCommandInput;
    constructor(input: GetRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRevisionCommandInput, GetRevisionCommandOutput>;
    private serialize;
    private deserialize;
}

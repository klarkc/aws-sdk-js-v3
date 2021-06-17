import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { GetDigestRequest, GetDigestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDigestCommandInput extends GetDigestRequest {
}
export interface GetDigestCommandOutput extends GetDigestResponse, __MetadataBearer {
}
/**
 * <p>Returns the digest of a ledger at the latest committed block in the journal. The
 *          response includes a 256-bit hash value and a block address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetDigestCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetDigestCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetDigestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDigestCommandInput} for command's `input` shape.
 * @see {@link GetDigestCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDigestCommand extends $Command<GetDigestCommandInput, GetDigestCommandOutput, QLDBClientResolvedConfig> {
    readonly input: GetDigestCommandInput;
    constructor(input: GetDigestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDigestCommandInput, GetDigestCommandOutput>;
    private serialize;
    private deserialize;
}

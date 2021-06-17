import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDimensionKeysCommandInput extends DescribeDimensionKeysRequest {
}
export interface DescribeDimensionKeysCommandOutput extends DescribeDimensionKeysResponse, __MetadataBearer {
}
/**
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a
 *       metric.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DescribeDimensionKeysCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DescribeDimensionKeysCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new DescribeDimensionKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDimensionKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionKeysCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDimensionKeysCommand extends $Command<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput, PIClientResolvedConfig> {
    readonly input: DescribeDimensionKeysCommandInput;
    constructor(input: DescribeDimensionKeysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput>;
    private serialize;
    private deserialize;
}

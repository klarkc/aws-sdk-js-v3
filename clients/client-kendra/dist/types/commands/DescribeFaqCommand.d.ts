import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeFaqRequest, DescribeFaqResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFaqCommandInput extends DescribeFaqRequest {
}
export interface DescribeFaqCommandOutput extends DescribeFaqResponse, __MetadataBearer {
}
/**
 * <p>Gets information about an FAQ list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFaqCommandInput} for command's `input` shape.
 * @see {@link DescribeFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFaqCommand extends $Command<DescribeFaqCommandInput, DescribeFaqCommandOutput, KendraClientResolvedConfig> {
    readonly input: DescribeFaqCommandInput;
    constructor(input: DescribeFaqCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFaqCommandInput, DescribeFaqCommandOutput>;
    private serialize;
    private deserialize;
}

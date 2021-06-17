import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeIndexRequest, DescribeIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIndexCommandInput extends DescribeIndexRequest {
}
export interface DescribeIndexCommandOutput extends DescribeIndexResponse, __MetadataBearer {
}
/**
 * <p>Describes an existing Amazon Kendra index</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIndexCommand extends $Command<DescribeIndexCommandInput, DescribeIndexCommandOutput, KendraClientResolvedConfig> {
    readonly input: DescribeIndexCommandInput;
    constructor(input: DescribeIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIndexCommandInput, DescribeIndexCommandOutput>;
    private serialize;
    private deserialize;
}

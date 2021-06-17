import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExclusionsCommandInput extends DescribeExclusionsRequest {
}
export interface DescribeExclusionsCommandOutput extends DescribeExclusionsResponse, __MetadataBearer {
}
/**
 * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeExclusionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeExclusionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeExclusionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExclusionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExclusionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExclusionsCommand extends $Command<DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeExclusionsCommandInput;
    constructor(input: DescribeExclusionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput>;
    private serialize;
    private deserialize;
}

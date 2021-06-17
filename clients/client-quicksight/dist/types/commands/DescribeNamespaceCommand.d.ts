import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNamespaceCommandInput extends DescribeNamespaceRequest {
}
export interface DescribeNamespaceCommandOutput extends DescribeNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Describes the current namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNamespaceCommand extends $Command<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeNamespaceCommandInput;
    constructor(input: DescribeNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}

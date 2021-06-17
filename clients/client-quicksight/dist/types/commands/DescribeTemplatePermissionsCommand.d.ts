import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplatePermissionsRequest, DescribeTemplatePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTemplatePermissionsCommandInput extends DescribeTemplatePermissionsRequest {
}
export interface DescribeTemplatePermissionsCommandOutput extends DescribeTemplatePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Describes read and write permissions on a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTemplatePermissionsCommand extends $Command<DescribeTemplatePermissionsCommandInput, DescribeTemplatePermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeTemplatePermissionsCommandInput;
    constructor(input: DescribeTemplatePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTemplatePermissionsCommandInput, DescribeTemplatePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

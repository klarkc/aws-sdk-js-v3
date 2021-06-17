import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplateAliasRequest, DescribeTemplateAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTemplateAliasCommandInput extends DescribeTemplateAliasRequest {
}
export interface DescribeTemplateAliasCommandOutput extends DescribeTemplateAliasResponse, __MetadataBearer {
}
/**
 * <p>Describes the template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTemplateAliasCommand extends $Command<DescribeTemplateAliasCommandInput, DescribeTemplateAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeTemplateAliasCommandInput;
    constructor(input: DescribeTemplateAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTemplateAliasCommandInput, DescribeTemplateAliasCommandOutput>;
    private serialize;
    private deserialize;
}

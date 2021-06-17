import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeThemeAliasRequest, DescribeThemeAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThemeAliasCommandInput extends DescribeThemeAliasRequest {
}
export interface DescribeThemeAliasCommandOutput extends DescribeThemeAliasResponse, __MetadataBearer {
}
/**
 * <p>Describes the alias for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThemeAliasCommand extends $Command<DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeThemeAliasCommandInput;
    constructor(input: DescribeThemeAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput>;
    private serialize;
    private deserialize;
}

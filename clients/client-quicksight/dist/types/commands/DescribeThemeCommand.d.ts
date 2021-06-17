import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeThemeRequest, DescribeThemeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThemeCommandInput extends DescribeThemeRequest {
}
export interface DescribeThemeCommandOutput extends DescribeThemeResponse, __MetadataBearer {
}
/**
 * <p>Describes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemeCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThemeCommand extends $Command<DescribeThemeCommandInput, DescribeThemeCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeThemeCommandInput;
    constructor(input: DescribeThemeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThemeCommandInput, DescribeThemeCommandOutput>;
    private serialize;
    private deserialize;
}

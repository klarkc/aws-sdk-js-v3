import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeThemePermissionsRequest, DescribeThemePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThemePermissionsCommandInput extends DescribeThemePermissionsRequest {
}
export interface DescribeThemePermissionsCommandOutput extends DescribeThemePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Describes the read and write permissions for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThemePermissionsCommand extends $Command<DescribeThemePermissionsCommandInput, DescribeThemePermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeThemePermissionsCommandInput;
    constructor(input: DescribeThemePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThemePermissionsCommandInput, DescribeThemePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

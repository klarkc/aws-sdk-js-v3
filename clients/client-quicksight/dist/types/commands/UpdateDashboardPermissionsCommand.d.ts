import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDashboardPermissionsRequest, UpdateDashboardPermissionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDashboardPermissionsCommandInput extends UpdateDashboardPermissionsRequest {
}
export interface UpdateDashboardPermissionsCommandOutput extends UpdateDashboardPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Updates read and write permissions on a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDashboardPermissionsCommand extends $Command<UpdateDashboardPermissionsCommandInput, UpdateDashboardPermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateDashboardPermissionsCommandInput;
    constructor(input: UpdateDashboardPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDashboardPermissionsCommandInput, UpdateDashboardPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

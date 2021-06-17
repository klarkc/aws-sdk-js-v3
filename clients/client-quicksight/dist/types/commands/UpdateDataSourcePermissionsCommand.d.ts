import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDataSourcePermissionsRequest, UpdateDataSourcePermissionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDataSourcePermissionsCommandInput extends UpdateDataSourcePermissionsRequest {
}
export interface UpdateDataSourcePermissionsCommandOutput extends UpdateDataSourcePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Updates the permissions to a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataSourcePermissionsCommand extends $Command<UpdateDataSourcePermissionsCommandInput, UpdateDataSourcePermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateDataSourcePermissionsCommandInput;
    constructor(input: UpdateDataSourcePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSourcePermissionsCommandInput, UpdateDataSourcePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

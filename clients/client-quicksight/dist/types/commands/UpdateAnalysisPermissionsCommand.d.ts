import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateAnalysisPermissionsRequest, UpdateAnalysisPermissionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAnalysisPermissionsCommandInput extends UpdateAnalysisPermissionsRequest {
}
export interface UpdateAnalysisPermissionsCommandOutput extends UpdateAnalysisPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Updates the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAnalysisPermissionsCommand extends $Command<UpdateAnalysisPermissionsCommandInput, UpdateAnalysisPermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateAnalysisPermissionsCommandInput;
    constructor(input: UpdateAnalysisPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAnalysisPermissionsCommandInput, UpdateAnalysisPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

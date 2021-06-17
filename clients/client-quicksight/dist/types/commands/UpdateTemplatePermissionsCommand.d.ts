import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateTemplatePermissionsRequest, UpdateTemplatePermissionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTemplatePermissionsCommandInput extends UpdateTemplatePermissionsRequest {
}
export interface UpdateTemplatePermissionsCommandOutput extends UpdateTemplatePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Updates the resource permissions for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTemplatePermissionsCommand extends $Command<UpdateTemplatePermissionsCommandInput, UpdateTemplatePermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateTemplatePermissionsCommandInput;
    constructor(input: UpdateTemplatePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTemplatePermissionsCommandInput, UpdateTemplatePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

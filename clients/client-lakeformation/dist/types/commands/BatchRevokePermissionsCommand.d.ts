import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchRevokePermissionsRequest, BatchRevokePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchRevokePermissionsCommandInput extends BatchRevokePermissionsRequest {
}
export interface BatchRevokePermissionsCommandOutput extends BatchRevokePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Batch operation to revoke permissions from the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchRevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchRevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchRevokePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchRevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchRevokePermissionsCommand extends $Command<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: BatchRevokePermissionsCommandInput;
    constructor(input: BatchRevokePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

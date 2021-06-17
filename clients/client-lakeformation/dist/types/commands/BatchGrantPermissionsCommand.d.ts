import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchGrantPermissionsRequest, BatchGrantPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGrantPermissionsCommandInput extends BatchGrantPermissionsRequest {
}
export interface BatchGrantPermissionsCommandOutput extends BatchGrantPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Batch operation to grant permissions to the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchGrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchGrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new BatchGrantPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchGrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGrantPermissionsCommand extends $Command<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: BatchGrantPermissionsCommandInput;
    constructor(input: BatchGrantPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RevokePermissionsRequest, RevokePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokePermissionsCommandInput extends RevokePermissionsRequest {
}
export interface RevokePermissionsCommandOutput extends RevokePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RevokePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link RevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokePermissionsCommand extends $Command<RevokePermissionsCommandInput, RevokePermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: RevokePermissionsCommandInput;
    constructor(input: RevokePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokePermissionsCommandInput, RevokePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

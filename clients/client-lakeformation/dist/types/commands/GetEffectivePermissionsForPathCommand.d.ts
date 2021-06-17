import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEffectivePermissionsForPathCommandInput extends GetEffectivePermissionsForPathRequest {
}
export interface GetEffectivePermissionsForPathCommandOutput extends GetEffectivePermissionsForPathResponse, __MetadataBearer {
}
/**
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetEffectivePermissionsForPathCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetEffectivePermissionsForPathCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetEffectivePermissionsForPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePermissionsForPathCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePermissionsForPathCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEffectivePermissionsForPathCommand extends $Command<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GetEffectivePermissionsForPathCommandInput;
    constructor(input: GetEffectivePermissionsForPathCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput>;
    private serialize;
    private deserialize;
}

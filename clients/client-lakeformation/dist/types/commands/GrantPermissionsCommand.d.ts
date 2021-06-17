import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GrantPermissionsRequest, GrantPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GrantPermissionsCommandInput extends GrantPermissionsRequest {
}
export interface GrantPermissionsCommandOutput extends GrantPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
 * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GrantPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link GrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GrantPermissionsCommand extends $Command<GrantPermissionsCommandInput, GrantPermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: GrantPermissionsCommandInput;
    constructor(input: GrantPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantPermissionsCommandInput, GrantPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}

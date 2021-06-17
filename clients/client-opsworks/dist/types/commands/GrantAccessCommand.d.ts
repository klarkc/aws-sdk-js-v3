import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { GrantAccessRequest, GrantAccessResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GrantAccessCommandInput extends GrantAccessRequest {
}
export interface GrantAccessCommandOutput extends GrantAccessResult, __MetadataBearer {
}
/**
 * <note>
 *             <p>This action can be used only with Windows stacks.</p>
 *          </note>
 *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GrantAccessCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GrantAccessCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GrantAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantAccessCommandInput} for command's `input` shape.
 * @see {@link GrantAccessCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GrantAccessCommand extends $Command<GrantAccessCommandInput, GrantAccessCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: GrantAccessCommandInput;
    constructor(input: GrantAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantAccessCommandInput, GrantAccessCommandOutput>;
    private serialize;
    private deserialize;
}

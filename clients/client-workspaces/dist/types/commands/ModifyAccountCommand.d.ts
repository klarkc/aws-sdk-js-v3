import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyAccountRequest, ModifyAccountResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyAccountCommandInput extends ModifyAccountRequest {
}
export interface ModifyAccountCommandOutput extends ModifyAccountResult, __MetadataBearer {
}
/**
 * <p>Modifies the configuration of Bring Your Own License (BYOL) for the specified
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyAccountCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyAccountCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAccountCommandInput} for command's `input` shape.
 * @see {@link ModifyAccountCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyAccountCommand extends $Command<ModifyAccountCommandInput, ModifyAccountCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyAccountCommandInput;
    constructor(input: ModifyAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyAccountCommandInput, ModifyAccountCommandOutput>;
    private serialize;
    private deserialize;
}

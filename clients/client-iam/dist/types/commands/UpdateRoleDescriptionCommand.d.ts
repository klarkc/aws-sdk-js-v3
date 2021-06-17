import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleDescriptionRequest, UpdateRoleDescriptionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoleDescriptionCommandInput extends UpdateRoleDescriptionRequest {
}
export interface UpdateRoleDescriptionCommandOutput extends UpdateRoleDescriptionResponse, __MetadataBearer {
}
/**
 * <p>Use <a>UpdateRole</a> instead.</p>
 *         <p>Modifies only the description of a role. This operation performs the same function as
 *             the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleDescriptionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleDescriptionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleDescriptionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoleDescriptionCommand extends $Command<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateRoleDescriptionCommandInput;
    constructor(input: UpdateRoleDescriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}

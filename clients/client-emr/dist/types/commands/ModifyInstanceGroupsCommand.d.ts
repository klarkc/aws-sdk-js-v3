import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceGroupsInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyInstanceGroupsCommandInput extends ModifyInstanceGroupsInput {
}
export interface ModifyInstanceGroupsCommandOutput extends __MetadataBearer {
}
/**
 * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an
 *          instance group. The input parameters include the new target instance count for the group
 *          and the instance group ID. The call will either succeed or fail atomically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyInstanceGroupsCommand extends $Command<ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ModifyInstanceGroupsCommandInput;
    constructor(input: ModifyInstanceGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

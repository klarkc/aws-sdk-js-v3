import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { PutAccessControlRuleRequest, PutAccessControlRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccessControlRuleCommandInput extends PutAccessControlRuleRequest {
}
export interface PutAccessControlRuleCommandOutput extends PutAccessControlRuleResponse, __MetadataBearer {
}
/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccessControlRuleCommand extends $Command<PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: PutAccessControlRuleCommandInput;
    constructor(input: PutAccessControlRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput>;
    private serialize;
    private deserialize;
}

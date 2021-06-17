import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { CreateProtectionGroupRequest, CreateProtectionGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProtectionGroupCommandInput extends CreateProtectionGroupRequest {
}
export interface CreateProtectionGroupCommandOutput extends CreateProtectionGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProtectionGroupCommand extends $Command<CreateProtectionGroupCommandInput, CreateProtectionGroupCommandOutput, ShieldClientResolvedConfig> {
    readonly input: CreateProtectionGroupCommandInput;
    constructor(input: CreateProtectionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProtectionGroupCommandInput, CreateProtectionGroupCommandOutput>;
    private serialize;
    private deserialize;
}

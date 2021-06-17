import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyOptionGroupMessage, ModifyOptionGroupResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyOptionGroupCommandInput extends ModifyOptionGroupMessage {
}
export interface ModifyOptionGroupCommandOutput extends ModifyOptionGroupResult, __MetadataBearer {
}
/**
 * <p>Modifies an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyOptionGroupCommand extends $Command<ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyOptionGroupCommandInput;
    constructor(input: ModifyOptionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}

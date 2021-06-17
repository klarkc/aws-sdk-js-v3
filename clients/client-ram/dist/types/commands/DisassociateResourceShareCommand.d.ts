import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DisassociateResourceShareRequest, DisassociateResourceShareResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateResourceShareCommandInput extends DisassociateResourceShareRequest {
}
export interface DisassociateResourceShareCommandOutput extends DisassociateResourceShareResponse, __MetadataBearer {
}
/**
 * <p>Disassociates the specified principals or resources from the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateResourceShareCommand extends $Command<DisassociateResourceShareCommandInput, DisassociateResourceShareCommandOutput, RAMClientResolvedConfig> {
    readonly input: DisassociateResourceShareCommandInput;
    constructor(input: DisassociateResourceShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResourceShareCommandInput, DisassociateResourceShareCommandOutput>;
    private serialize;
    private deserialize;
}

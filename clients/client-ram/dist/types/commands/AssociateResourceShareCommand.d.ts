import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AssociateResourceShareRequest, AssociateResourceShareResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateResourceShareCommandInput extends AssociateResourceShareRequest {
}
export interface AssociateResourceShareCommandOutput extends AssociateResourceShareResponse, __MetadataBearer {
}
/**
 * <p>Associates the specified resource share with the specified principals and resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateResourceShareCommand extends $Command<AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput, RAMClientResolvedConfig> {
    readonly input: AssociateResourceShareCommandInput;
    constructor(input: AssociateResourceShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput>;
    private serialize;
    private deserialize;
}

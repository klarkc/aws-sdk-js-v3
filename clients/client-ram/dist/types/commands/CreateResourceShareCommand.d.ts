import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourceShareCommandInput extends CreateResourceShareRequest {
}
export interface CreateResourceShareCommandOutput extends CreateResourceShareResponse, __MetadataBearer {
}
/**
 * <p>Creates a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceShareCommand extends $Command<CreateResourceShareCommandInput, CreateResourceShareCommandOutput, RAMClientResolvedConfig> {
    readonly input: CreateResourceShareCommandInput;
    constructor(input: CreateResourceShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceShareCommandInput, CreateResourceShareCommandOutput>;
    private serialize;
    private deserialize;
}

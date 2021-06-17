import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteOptionGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOptionGroupCommandInput extends DeleteOptionGroupMessage {
}
export interface DeleteOptionGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOptionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOptionGroupCommand extends $Command<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteOptionGroupCommandInput;
    constructor(input: DeleteOptionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}

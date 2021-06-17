import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapesInput, CreateTapesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTapesCommandInput extends CreateTapesInput {
}
export interface CreateTapesCommandOutput extends CreateTapesOutput, __MetadataBearer {
}
/**
 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 *          the tapes. This operation is only supported in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapesCommandInput} for command's `input` shape.
 * @see {@link CreateTapesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTapesCommand extends $Command<CreateTapesCommandInput, CreateTapesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateTapesCommandInput;
    constructor(input: CreateTapesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTapesCommandInput, CreateTapesCommandOutput>;
    private serialize;
    private deserialize;
}

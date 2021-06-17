import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CancelArchivalInput, CancelArchivalOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelArchivalCommandInput extends CancelArchivalInput {
}
export interface CancelArchivalCommandOutput extends CancelArchivalOutput, __MetadataBearer {
}
/**
 * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
 *          process is initiated. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelArchivalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelArchivalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CancelArchivalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelArchivalCommandInput} for command's `input` shape.
 * @see {@link CancelArchivalCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelArchivalCommand extends $Command<CancelArchivalCommandInput, CancelArchivalCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CancelArchivalCommandInput;
    constructor(input: CancelArchivalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelArchivalCommandInput, CancelArchivalCommandOutput>;
    private serialize;
    private deserialize;
}

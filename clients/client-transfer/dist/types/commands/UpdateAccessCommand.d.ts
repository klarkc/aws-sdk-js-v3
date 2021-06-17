import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { UpdateAccessRequest, UpdateAccessResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAccessCommandInput extends UpdateAccessRequest {
}
export interface UpdateAccessCommandOutput extends UpdateAccessResponse, __MetadataBearer {
}
/**
 * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
 *       <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new UpdateAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccessCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAccessCommand extends $Command<UpdateAccessCommandInput, UpdateAccessCommandOutput, TransferClientResolvedConfig> {
    readonly input: UpdateAccessCommandInput;
    constructor(input: UpdateAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccessCommandInput, UpdateAccessCommandOutput>;
    private serialize;
    private deserialize;
}

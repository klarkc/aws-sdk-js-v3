import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { UpdateLedgerPermissionsModeRequest, UpdateLedgerPermissionsModeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLedgerPermissionsModeCommandInput extends UpdateLedgerPermissionsModeRequest {
}
export interface UpdateLedgerPermissionsModeCommandOutput extends UpdateLedgerPermissionsModeResponse, __MetadataBearer {
}
/**
 * <p>Updates the permissions mode of a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerPermissionsModeCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerPermissionsModeCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLedgerPermissionsModeCommand extends $Command<UpdateLedgerPermissionsModeCommandInput, UpdateLedgerPermissionsModeCommandOutput, QLDBClientResolvedConfig> {
    readonly input: UpdateLedgerPermissionsModeCommandInput;
    constructor(input: UpdateLedgerPermissionsModeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLedgerPermissionsModeCommandInput, UpdateLedgerPermissionsModeCommandOutput>;
    private serialize;
    private deserialize;
}

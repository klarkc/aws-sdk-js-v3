import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { AddProfilePermissionRequest, AddProfilePermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddProfilePermissionCommandInput extends AddProfilePermissionRequest {
}
export interface AddProfilePermissionCommandOutput extends AddProfilePermissionResponse, __MetadataBearer {
}
/**
 * <p>Adds cross-account permissions to a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, AddProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, AddProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new AddProfilePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link AddProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddProfilePermissionCommand extends $Command<AddProfilePermissionCommandInput, AddProfilePermissionCommandOutput, SignerClientResolvedConfig> {
    readonly input: AddProfilePermissionCommandInput;
    constructor(input: AddProfilePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddProfilePermissionCommandInput, AddProfilePermissionCommandOutput>;
    private serialize;
    private deserialize;
}

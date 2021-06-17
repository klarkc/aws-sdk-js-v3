import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteLaunchProfileRequest, DeleteLaunchProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLaunchProfileCommandInput extends DeleteLaunchProfileRequest {
}
export interface DeleteLaunchProfileCommandOutput extends DeleteLaunchProfileResponse, __MetadataBearer {
}
/**
 * <p>Permanently delete a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLaunchProfileCommand extends $Command<DeleteLaunchProfileCommandInput, DeleteLaunchProfileCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteLaunchProfileCommandInput;
    constructor(input: DeleteLaunchProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLaunchProfileCommandInput, DeleteLaunchProfileCommandOutput>;
    private serialize;
    private deserialize;
}

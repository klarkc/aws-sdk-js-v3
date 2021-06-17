import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateLaunchProfileRequest, UpdateLaunchProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLaunchProfileCommandInput extends UpdateLaunchProfileRequest {
}
export interface UpdateLaunchProfileCommandOutput extends UpdateLaunchProfileResponse, __MetadataBearer {
}
/**
 * <p>Update a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLaunchProfileCommand extends $Command<UpdateLaunchProfileCommandInput, UpdateLaunchProfileCommandOutput, NimbleClientResolvedConfig> {
    readonly input: UpdateLaunchProfileCommandInput;
    constructor(input: UpdateLaunchProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLaunchProfileCommandInput, UpdateLaunchProfileCommandOutput>;
    private serialize;
    private deserialize;
}

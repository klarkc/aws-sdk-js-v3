import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateLaunchProfileMemberRequest, UpdateLaunchProfileMemberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLaunchProfileMemberCommandInput extends UpdateLaunchProfileMemberRequest {
}
export interface UpdateLaunchProfileMemberCommandOutput extends UpdateLaunchProfileMemberResponse, __MetadataBearer {
}
/**
 * <p>Update a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLaunchProfileMemberCommand extends $Command<UpdateLaunchProfileMemberCommandInput, UpdateLaunchProfileMemberCommandOutput, NimbleClientResolvedConfig> {
    readonly input: UpdateLaunchProfileMemberCommandInput;
    constructor(input: UpdateLaunchProfileMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLaunchProfileMemberCommandInput, UpdateLaunchProfileMemberCommandOutput>;
    private serialize;
    private deserialize;
}

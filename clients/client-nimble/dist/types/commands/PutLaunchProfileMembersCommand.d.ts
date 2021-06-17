import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { PutLaunchProfileMembersRequest, PutLaunchProfileMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLaunchProfileMembersCommandInput extends PutLaunchProfileMembersRequest {
}
export interface PutLaunchProfileMembersCommandOutput extends PutLaunchProfileMembersResponse, __MetadataBearer {
}
/**
 * <p>Add/update users with given persona to launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link PutLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutLaunchProfileMembersCommand extends $Command<PutLaunchProfileMembersCommandInput, PutLaunchProfileMembersCommandOutput, NimbleClientResolvedConfig> {
    readonly input: PutLaunchProfileMembersCommandInput;
    constructor(input: PutLaunchProfileMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLaunchProfileMembersCommandInput, PutLaunchProfileMembersCommandOutput>;
    private serialize;
    private deserialize;
}

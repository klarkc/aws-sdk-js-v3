import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetLaunchProfileMemberRequest, GetLaunchProfileMemberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLaunchProfileMemberCommandInput extends GetLaunchProfileMemberRequest {
}
export interface GetLaunchProfileMemberCommandOutput extends GetLaunchProfileMemberResponse, __MetadataBearer {
}
/**
 * <p>Get a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLaunchProfileMemberCommand extends $Command<GetLaunchProfileMemberCommandInput, GetLaunchProfileMemberCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetLaunchProfileMemberCommandInput;
    constructor(input: GetLaunchProfileMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLaunchProfileMemberCommandInput, GetLaunchProfileMemberCommandOutput>;
    private serialize;
    private deserialize;
}

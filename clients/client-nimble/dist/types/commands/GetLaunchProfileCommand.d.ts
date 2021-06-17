import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetLaunchProfileRequest, GetLaunchProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLaunchProfileCommandInput extends GetLaunchProfileRequest {
}
export interface GetLaunchProfileCommandOutput extends GetLaunchProfileResponse, __MetadataBearer {
}
/**
 * <p>Get a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLaunchProfileCommand extends $Command<GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetLaunchProfileCommandInput;
    constructor(input: GetLaunchProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput>;
    private serialize;
    private deserialize;
}

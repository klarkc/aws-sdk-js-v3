import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceProfileCommandInput extends GetInstanceProfileRequest {
}
export interface GetInstanceProfileCommandOutput extends GetInstanceProfileResponse, __MetadataBearer {
}
/**
 * <p> Retrieves information about the specified instance profile, including the instance
 *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceProfileCommand extends $Command<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetInstanceProfileCommandInput;
    constructor(input: GetInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}

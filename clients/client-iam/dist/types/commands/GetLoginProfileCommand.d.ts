import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {
}
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the user name and password creation date for the specified IAM user. If
 *             the user has not been assigned a password, the operation returns a 404
 *                 (<code>NoSuchEntity</code>) error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoginProfileCommandInput} for command's `input` shape.
 * @see {@link GetLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoginProfileCommand extends $Command<GetLoginProfileCommandInput, GetLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetLoginProfileCommandInput;
    constructor(input: GetLoginProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoginProfileCommandInput, GetLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}

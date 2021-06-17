import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAdminAccountRequest, GetAdminAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAdminAccountCommandInput extends GetAdminAccountRequest {
}
export interface GetAdminAccountCommandOutput extends GetAdminAccountResponse, __MetadataBearer {
}
/**
 * <p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager
 *       as the AWS Firewall Manager administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAdminAccountCommand extends $Command<GetAdminAccountCommandInput, GetAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetAdminAccountCommandInput;
    constructor(input: GetAdminAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAdminAccountCommandInput, GetAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}

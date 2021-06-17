import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAppsListRequest, GetAppsListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppsListCommandInput extends GetAppsListRequest {
}
export interface GetAppsListCommandOutput extends GetAppsListResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppsListCommandInput} for command's `input` shape.
 * @see {@link GetAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppsListCommand extends $Command<GetAppsListCommandInput, GetAppsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetAppsListCommandInput;
    constructor(input: GetAppsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppsListCommandInput, GetAppsListCommandOutput>;
    private serialize;
    private deserialize;
}

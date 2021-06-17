import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutAppsListRequest, PutAppsListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAppsListCommandInput extends PutAppsListRequest {
}
export interface PutAppsListCommandOutput extends PutAppsListResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppsListCommandInput} for command's `input` shape.
 * @see {@link PutAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppsListCommand extends $Command<PutAppsListCommandInput, PutAppsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: PutAppsListCommandInput;
    constructor(input: PutAppsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppsListCommandInput, PutAppsListCommandOutput>;
    private serialize;
    private deserialize;
}

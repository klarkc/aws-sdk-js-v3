import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteAppsListRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAppsListCommandInput extends DeleteAppsListRequest {
}
export interface DeleteAppsListCommandOutput extends __MetadataBearer {
}
/**
 * <p>Permanently deletes an AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppsListCommandInput} for command's `input` shape.
 * @see {@link DeleteAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAppsListCommand extends $Command<DeleteAppsListCommandInput, DeleteAppsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: DeleteAppsListCommandInput;
    constructor(input: DeleteAppsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppsListCommandInput, DeleteAppsListCommandOutput>;
    private serialize;
    private deserialize;
}

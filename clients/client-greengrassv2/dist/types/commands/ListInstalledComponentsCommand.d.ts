import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListInstalledComponentsRequest, ListInstalledComponentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInstalledComponentsCommandInput extends ListInstalledComponentsRequest {
}
export interface ListInstalledComponentsCommandOutput extends ListInstalledComponentsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of the components that a AWS IoT Greengrass core device runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListInstalledComponentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListInstalledComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListInstalledComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstalledComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInstalledComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInstalledComponentsCommand extends $Command<ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: ListInstalledComponentsCommandInput;
    constructor(input: ListInstalledComponentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput>;
    private serialize;
    private deserialize;
}
